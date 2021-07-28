import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default props => {
  const {
    children,
    style,
    b,
    c,
    h,
    fs,
    lh,
    ph,
    pv,
    mh,
    mv,
    m,
    p,
    ta,
    ul,
    mb,
    mt,
    pt,
    pb,
    pl,
    pr,
    ml,
    mr,
    italic,
    f,
    eb,
  } = props;
  return (
    <Text
      {...props}
      style={[
        styles.default,
        b && {fontFamily: 'Roboto-Medium'},
        eb && {fontWeight: '700'},
        c && {color: c},
        h && styles.header,
        fs && {fontSize: fs},
        lh && {lineHeight: lh},
        ph && {paddingHorizontal: ph},
        pv && {paddingVertical: pv},
        mh && {marginHorizontal: mh},
        mv && {marginVertical: mv},
        p && {padding: p},
        pl && {paddingLeft: pl},
        pr && {paddingRight: pr},
        pt && {paddingTop: pt},
        pb && {paddingBottom: pb},
        mt && {marginTop: mt},
        mb && {marginBottom: mb},
        m && {margin: m},
        ml && {marginLeft: ml},
        mr && {marginRight: mr},
        ta && {textAlign: ta},
        ul && {textDecorationLine: 'underline'},
        italic && {fontStyle: 'italic'},
        f && {flex: f},
        style,
      ]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  default: {
    color: 'black',
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 20,
  },
  header: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: 'Roboto-Medium',
  },
});
