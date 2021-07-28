import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {UIImage, UIText, UIView} from 'ui-kit';
import userIcon from '../assests/uikit-icon/user.webp';

const styles = StyleSheet.create({
  item: {
    height: 47,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(97,97,97,.1)',
  },

  item2: {
    minHeight: 47,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 60,
    backgroundColor: 'white',
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(97,97,97,.1)',
    paddingVertical: 5,
  },

  arrowIcon: {
    height: 16,
    width: 16,
    marginEnd: 5,
  },

  userIcon: {
    height: 24,
    width: 24,
  },

  prefix: {
    width: 20,
    height: 20,
    lineHeight: 18,
    fontSize: 16,
    marginLeft: 10,
    color: 'rgba(37, 37, 37,0.5)',
    fontWeight: '400',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'System',
  },

  title: {
    flex: 1,
    lineHeight: 18,
    fontSize: 16,
    marginHorizontal: 10,
    color: '#252525',
    fontWeight: '400',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'System',
  },
});

const ListItem = ({
  id,
  title,
  showTogle,
  toggleIcon,
  prefix,
  handleExpand,
  subItem,
}) => {
  if (subItem) {
    return (
      <UIView style={styles.item2} key={id} onPress={handleExpand}>
        <UIImage
          style={[styles.userIcon]}
          path={userIcon}
          resizeMode={'cover'}
        />
        <UIText style={styles.prefix}>{prefix}</UIText>
        <UIText style={styles.title}>{title}</UIText>
      </UIView>
    );
  }
  return (
    <UIView style={styles.item} key={id} onPress={handleExpand}>
      {showTogle && (
        <UIImage
          style={styles.arrowIcon}
          path={toggleIcon}
          resizeMode={'cover'}
        />
      )}
      <UIImage style={[styles.userIcon]} path={userIcon} resizeMode={'cover'} />
      <UIText style={styles.prefix}>{prefix}</UIText>
      <UIText style={styles.title}>{title}</UIText>
    </UIView>
  );
};
export default ListItem;
