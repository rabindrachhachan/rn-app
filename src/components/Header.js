import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {UIText, UIView} from 'ui-kit';

const styles = StyleSheet.create({
  headerWrapper: {
    alignSelf: 'stretch',
    height: 60,
    backgroundColor: '#FFCC07',
    elevation: 1,
  },

  header: {
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: 59,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    minHeight: 24,
    width: '100%',
    color: '#252525',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 24,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'System',
  },
});

const Header = props => {
  return (
    <UIView style={styles.headerWrapper}>
      <UIView style={styles.header}>
        <UIText style={styles.title}>{props?.title || 'OKR Listing'}</UIText>
      </UIView>
    </UIView>
  );
};
export default Header;
