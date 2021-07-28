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
import {formatData, getCategory} from '../utils/helper';

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
    /**
     *make api call
     */

    try {
      url = 'https://okrcentral.github.io/sample-okrs/db.json';
      response = await fetch(url, {
        method: 'GET',
        headers: {},
      });

      if (response.ok) {
        const data = await response.json();
        const mData = formatData(data.data);
        /**
         *set local set variable, e.g data ,filter options
         */
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
    /**
     *handle multi select category filter options
     * help in to show check/uncheck
     */

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
    /**
     * filter the data base on selected category
     */

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
    /**
     * get all applied category filter
     */
    const labels = _.map(selectedOptions, item => item.label);
    return labels.toString();
  };

  const handleExpand = item => {
    /**
     * handle hide/show child list of a parent node
     */
    const index = _.findIndex(data, {id: item.id});
    if (index !== -1) {
      data[index].expand = !data[index].expand;
      setData(data);
      setRefresh(!refresh);
    }
  };

  const handleDetailModal = item => {
    /**
     * open details of a child node
     */
    setDetailItem(item);
    setVisibleDetail(true);
  };

  const getParentTitle = () => {
    let title = 'Detail';
    const found = _.find(
      data,
      dItem => dItem.id === detailItem.parent_objective_id,
    );
    if (typeof found !== 'undefined') {
      title = found.title;
    }

    return title;
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
          title={getParentTitle()}
          visible={visibleDetail}
          data={detailItem}
          handleOnCancel={() => setVisibleDetail(false)}
        />
      )}
    </UIView>
  );
};

export default OKRListingPage;
