import React from 'react';
import {FlatList} from 'react-native';

export default ({
  style = {},
  ccStyle = {},
  renderItem,
  data = [],
  horizontal = false,
  horizontalBar = false,
  numColumns = 1,
  initialNumToRender = 10,
  headerComponent = null,
  footerComponent = null,
  separatorComponent = null,
  emptyComponent = null,
  inverted = false,
  pullToLoad = null,
  onRefresh = null,
  refreshing = false,
  onEndReached = null,
}) => (
  <FlatList
    refreshing={refreshing}
    onRefresh={onRefresh}
    inverted={inverted}
    horizontal={horizontal}
    showsHorizontalScrollIndicator={horizontalBar}
    numColumns={numColumns}
    initialNumToRender={initialNumToRender}
    style={style}
    contentContainerStyle={ccStyle}
    data={data}
    keyExtractor={(item, index) => index.toString()}
    renderItem={renderItem}
    ListHeaderComponent={headerComponent}
    ListFooterComponent={footerComponent}
    ListEmptyComponent={emptyComponent}
    ItemSeparatorComponent={separatorComponent}
    refreshControl={pullToLoad}
    onEndReached={onEndReached}
  />
);
