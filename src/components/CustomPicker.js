import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {UIImage, UIText, UIView} from 'ui-kit';
import icon from '../assests/uikit-icon/down.webp';

const pickerSelectStyles = StyleSheet.create({
  container: {
    width: '92%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 4,
    color: '#2f2f4d',
    paddingRight: 30, // to ensure the UIText is never behind the icon
    backgroundColor: 'white',
    borderColor: '#467df3',
    margin: 15,
  },
  caretDown: {
    backgroundColor: 'transparent',
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderLeftWidth: 5,
    borderTopColor: 'black',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    width: 0,
    height: 0,
  },

  caretDown2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    backgroundColor: 'white',
  },

  nonEditContainer: {
    fontSize: 16,
    color: '#878C98',
    textAlign: 'center',
    paddingRight: 30, // to ensure the UIText is never behind the icon
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'System',
    width: '100%',
  },
});

const CustomPicker = React.memo(({placeholder, value, onPress}) => {
  const renderIcon = () => {
    return (
      <UIView style={pickerSelectStyles.caretDown2}>
        <UIImage
          path={icon}
          style={{height: 12, width: 14}}
          resizeMode={'contain'}
          tintColor={'#467df3'}
        />
      </UIView>
    );
  };

  return (
    <UIView onPress={onPress} style={pickerSelectStyles.container}>
      <UIView w={'80%'} bg={'white'}>
        <UIText style={pickerSelectStyles.nonEditContainer}>
          {value || placeholder}
        </UIText>
      </UIView>
      <UIView w={'20%'} bg={'white'}>
        {renderIcon()}
      </UIView>
    </UIView>
  );
});

export default CustomPicker;
