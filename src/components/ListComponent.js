import React from 'react';
import {View} from 'react-native';
import {UIList, UIView} from 'ui-kit';
import downIcon from '../assests/uikit-icon/down.webp';
import upIcon from '../assests/uikit-icon/up.webp';
import ListItem from './ListItemCard';

const ListComponet = ({data, handleExpand, reload, handleDetailModal}) => {
  const renderItem2 = ({item, index}) => {
    if (item && Object.keys(item).length) {
      return (
        <UIView h={50} bg={'white'}>
          <ListItem
            id={item.id}
            title={item.title}
            showTogle={item.showTogle}
            toggleIcon={item.expand ? upIcon : downIcon}
            prefix={item.prefix}
            handleExpand={() => handleDetailModal(item)}
            subItem={true}
          />
        </UIView>
      );
    }
    return null;
  };

  const renderList2 = ({data, title}) => {
    if (typeof data !== 'undefined' && Array.isArray(data)) {
      return (
        <UIList
          data={data}
          renderItem={renderItem2}
          keyExtractor={item => item.id}
          listKey={item => item.id}
          showsVerticalScrollIndicator={false}
          extraData={reload}
          ccStyle={{paddingBottom: 20}}
        />
      );
    }
    return null;
  };

  const renderItem = ({item, index}) => {
    if (item && Object.keys(item).length) {
      return (
        <View style={{minHeight: 40}}>
          <ListItem
            id={item.id}
            title={item.title}
            showTogle={item.showTogle}
            toggleIcon={item.expand ? upIcon : downIcon}
            prefix={item.prefix}
            handleExpand={() => handleExpand(item)}
          />
          {item.expand && renderList2({data: item.data, title: item.title})}
        </View>
      );
    }
    return null;
  };

  const renderList = ({data}) => {
    if (typeof data !== 'undefined' && Array.isArray(data)) {
      return (
        <UIList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          listKey={item => item.id}
          showsVerticalScrollIndicator={false}
          extraData={reload}
          ccStyle={{paddingBottom: 200}}
        />
      );
    }
    return null;
  };

  return renderList({data});
};

export default ListComponet;
