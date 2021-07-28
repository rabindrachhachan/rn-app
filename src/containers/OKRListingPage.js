/**
 *Import build in component
 */
import _ from 'lodash';
import React, {useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {UIView} from 'ui-kit';
import CustomPicker from '../components/CustomPicker';
import DetailModal from '../components/DetailModal';
import FilterModal from '../components/FilterModal';
import ListComponent from '../components/ListComponent';

const PREFIX = [
  'a.',
  'b.',
  'c.',
  'd.',
  'e.',
  'f.',
  'g.',
  'h.',
  'i.',
  'j.',
  'k.',
];

const formatData = data => {
  let mData = [];

  let parentPrefix = 0;
  _.forEach(data, (mItem, index) => {
    let pObject = {};
    let childPrefix = -1;
    if (mItem.parent_objective_id == '') {
      parentPrefix = parentPrefix + 1;

      pObject = {
        ...mItem,
        prefix: `${parentPrefix}.`,
        expand: true,
        showTogle: true,
      };
      let filters = [];

      _.forEach(data, (dItem, index) => {
        if (mItem.id === dItem.parent_objective_id) {
          childPrefix = childPrefix + 1;
          dItem.prefix = PREFIX[childPrefix];
          filters.push(dItem);
        }
      });
      pObject.data = filters;
      mData.push(pObject);
    }
  });
  return mData;
};

const getCategory = data => {
  let categories = [];
  categories = _.map(data, (mItem, index) => ({
    label: mItem.category,
    id: index,
  }));
  categories = _.uniqBy(categories, 'label');
  return categories;
};

const OKRListingPage = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [selectedOptions, setSelectedOption] = useState([]);
  const [options, setOption] = useState([]);

  const [dataSource, setDataSource] = useState([]);
  const [data, setData] = useState([]);

  const [refresh, setRefresh] = useState(true);
  const [visible, setVisible] = useState(false);
  const [visibleDetail, setVisibleDetail] = useState(false);
  const [detailItem, setDetailItem] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      url = 'https://okrcentral.github.io/sample-okrs/db.json';
      response = await fetch(url, {
        method: 'GET',
        headers: {},
      });

      if (response.ok) {
        const data = await response.json();
        const mData = formatData(data.data);
        setData(mData);
        setDataSource(data.data);
        const options = getCategory(data.data);
        setOption(options);
      } else {
        alert('Something went wrong');
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleOnSelect = item => {
    let uSelectedData = selectedOptions;
    const index = _.findIndex(uSelectedData, {id: item.id});
    if (index !== -1) {
      _.remove(uSelectedData, {id: item.id});
    } else {
      uSelectedData.push(item);
    }
    setSelectedOption(uSelectedData);
    setRefresh(!refresh);
  };

  const handleOnApplyFilter = () => {
    if (selectedOptions && selectedOptions.length) {
      let filterData = [];
      _.forEach(selectedOptions, fItem => {
        const foundItems = _.filter(
          dataSource,
          dItem => dItem.category === fItem.label,
        );
        filterData = [...filterData, ...foundItems];
      });
      const mData = formatData(filterData);
      setData(mData);
    } else {
      const mData = formatData(dataSource);
      setData(mData);
    }
    // close modal
    toggleModal();
  };

  const toggleModal = () => {
    setVisible(prev => !prev);
  };

  const getFilter = () => {
    const labels = _.map(selectedOptions, item => item.label);
    return labels.toString();
  };

  const handleExpand = item => {
    const index = _.findIndex(data, {id: item.id});
    if (index !== -1) {
      data[index].expand = !data[index].expand;
      setData(data);
      setRefresh(!refresh);
    }
  };

  const handleDetailModal = item => {
    setDetailItem(item);
    setVisibleDetail(true);
  };

  return (
    <UIView bg={isDarkMode ? Colors.black : 'black'} h={'100%'} w={'100%'}>
      <CustomPicker
        placeholder={'Choose a category'}
        value={getFilter() || ''}
        onPress={toggleModal}
      />
      <UIView>
        <ListComponent
          data={data}
          handleExpand={handleExpand}
          reload={refresh}
          handleDetailModal={handleDetailModal}
        />
      </UIView>

      {visible && (
        <FilterModal
          title={'Category'}
          visible={visible}
          options={options}
          selectedOptions={selectedOptions}
          handleOnConfirm={handleOnApplyFilter}
          handleOnCancel={toggleModal}
          onSelectedHandler={handleOnSelect}
          refresh={refresh}
          okeyText={'Apply'}
        />
      )}

      {visibleDetail && (
        <DetailModal
          title={'Details'}
          visible={visibleDetail}
          data={detailItem}
          handleOnCancel={() => setVisibleDetail(false)}
        />
      )}
    </UIView>
  );
};

export default OKRListingPage;
