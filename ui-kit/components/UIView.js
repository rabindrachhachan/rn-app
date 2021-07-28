import React, {Fragment} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';

export default ({
  i,
  onPress,
  onLongPress,
  delayLongPress,
  scroll,
  children,
  f,
  row,
  jc,
  style,
  bg,
  m,
  mh,
  mv,
  mt,
  mb,
  pt,
  pb,
  pl,
  pr,
  ml,
  mr,
  p,
  ph,
  pv,
  br,
  bc,
  e,
  ai,
  as,
  ao,
  absolute,
  h,
  w,
  minh,
  bw,
  zi,
  r,
  b,
  center,
  ccStyle = {},
  enableKeyboardTaps = 'never',
  layout,
}) => {
  const _View = scroll
    ? ScrollView
    : onPress || onLongPress
    ? TouchableOpacity
    : View;
  return (
    <_View
      key={i}
      activeOpacity={ao || 0.8}
      style={[
        styles.default,
        row && {flexDirection: 'row'},
        f && {flex: f},
        h && {height: h},
        minh && {minHeight: minh},
        w && {width: w},
        absolute && {position: 'absolute'},
        bg && {backgroundColor: bg},
        jc && {justifyContent: jc},
        as && {alignSelf: as},
        ai && {alignItems: ai},
        m && {margin: m},
        mh && {marginHorizontal: mh},
        mv && {marginVertical: mv},
        p && {padding: p},
        ph && {paddingHorizontal: ph},
        pv && {paddingVertical: pv},
        pl && {paddingLeft: pl},
        pr && {paddingRight: pr},
        ml && {marginLeft: ml},
        mr && {marginRight: mr},
        mb && {marginBottom: mb},
        mt && {marginTop: mt},
        pt && {paddingTop: pt},
        pb && {paddingBottom: pb},
        br && {borderRadius: br},
        bc && {borderColor: bc},
        bw && {borderWidth: bw},
        e && {elevation},
        zi && {zIndex: zi},
        r && {right: r},
        b !== undefined && {bottom: b},
        center && {justifyContent: 'center', alignItems: 'center'},
        style,
      ]}
      borderless={true}
      onPress={onPress}
      onLongPress={onLongPress}
      delayLongPress={delayLongPress}
      contentContainerStyle={ccStyle}
      keyboardShouldPersistTaps={enableKeyboardTaps && 'always'}
      onLayout={layout}>
      <Fragment>{children}</Fragment>
    </_View>
  );
};

const styles = StyleSheet.create({
  default: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
});
