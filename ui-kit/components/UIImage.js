import React from 'react';
import {Image} from 'react-native';

export default ({
  path,
  onload,
  uri = null,
  style,
  resizeMode = 'contain',
  tc,
}) => (
  <Image
    onLoad={onload}
    style={[style]}
    tintColor={tc}
    source={
      path || {
        uri,
      }
    }
    resizeMode={resizeMode}
  />
);
