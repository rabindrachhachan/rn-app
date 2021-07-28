import _ from 'lodash';
import React from 'react';
import {Dimensions, Modal, Platform, StyleSheet} from 'react-native';
import {UIImage, UIList, UIText, UIView} from 'ui-kit';
import checkIcon from '../assests/uikit-icon/check.webp';
import closeIcon from '../assests/uikit-icon/close.webp';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  overlay: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  custom_modal: {
    height: 230,
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: DEVICE_HEIGHT * 0.4,
    borderColor: '#DADADA',
    borderRadius: 5,
    overflow: 'hidden',
  },

  modalBody: {
    minHeight: 220,
    width: DEVICE_WIDTH,
    backgroundColor: 'white',
    paddingBottom: 30,
    borderColor: '#c8c8c8',
    borderRadius: 5,
    overflow: 'hidden',
    top: 80,
    left: 0,
    right: 0,
    position: 'absolute',
  },

  modalContainer: {
    minHeight: 160,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  modalFooter: {
    height: 50,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },

  confirmUIText: {
    color: 'white',
    fontSize: 15,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: '600',
    width: '100%',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'System',
  },

  confirmButton: {
    height: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#467df3',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#467df3',
  },

  itemStyle: {
    height: 57,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomColor: 'rgba(151,151,151,0.1)',
    borderBottomWidth: 1,
    alignSelf: 'center',
    marginBottom: 2,
    marginHorizontal: 15,
  },

  squareWrapper: {
    height: 24,
    width: 24,
    borderColor: '#e7e6e6',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  squareUIView: {
    height: 22,
    width: 22,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  nameWrapper: {
    height: 35,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  nameUIText: {
    width: '100%',
    color: '#353b4e',
    fontSize: 14,
    textAlign: 'left',
    paddingStart: 15,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'System',
  },

  checkBox: {
    height: 16,
    width: 16,
    alignSelf: 'center',
  },

  UITextInputBox: {
    height: 40,
    width: '91%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#e4e3e3',
    backgroundColor: 'white',
  },

  UITextInput: {
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'System',
    color: 'black',
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'left',
    width: '100%',
    paddingLeft: 10,
  },

  modalInputWrapper: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  modalHeader: {
    height: 50,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff6f0',
    padding: 15,
    marginTop: 0.5,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomColor: '#dee6ef',
    borderBottomWidth: 1,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '60%',
    backgroundColor: '#fff6f0',
  },
  titleText: {
    color: '#252525',
    fontSize: 15,
    alignSelf: 'center',
    textAlign: 'left',
    fontWeight: 'bold',
    width: '100%',
    minHeight: 15,
    textAlign: 'left',
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  iconContainer: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    paddingEnd: 10,
    backgroundColor: '#fff6f0',
  },

  icon: {
    height: 18,
    width: 18,
    alignSelf: 'center',
  },
});

const ModalHeader = React.memo(props => {
  const {title, handleClose} = props;

  return (
    <UIView style={styles.modalHeader}>
      <UIView style={styles.textContainer}>
        <UIText style={styles.titleText}>{title}</UIText>
      </UIView>

      <UIView
        onPress={() => handleClose()}
        style={styles.iconContainer}
        hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
        <UIImage path={closeIcon} resizeMode={'cover'} style={styles.icon} />
      </UIView>
    </UIView>
  );
});

const Item = ({item, onSelectedHandler, selectedOptions}) => {
  const selected = _.findIndex(selectedOptions, {id: item.id}) > -1;
  return (
    <UIView
      style={styles.itemStyle}
      onPress={() => onSelectedHandler(item)}
      key={`${item.id}${item.label}`}>
      <UIView
        style={[styles.squareWrapper, selected && {borderColor: '#467df3'}]}>
        <UIView style={[styles.squareUIView, {backgroundColor: 'white'}]}>
          {selected && (
            <UIImage
              path={checkIcon}
              resizeMode={'cover'}
              style={styles.checkBox}
              tc={selected ? '#467df3' : 'white'}
            />
          )}
        </UIView>
      </UIView>
      <UIView style={styles.nameWrapper}>
        <UIText style={styles.nameUIText}>{item.label}</UIText>
      </UIView>
    </UIView>
  );
};

const ModalBody = ({options, onSelectedHandler, selectedOptions, refresh}) => {
  return (
    <UIList
      data={options}
      renderItem={({item, index}) => (
        <Item
          item={item}
          index={index}
          onSelectedHandler={onSelectedHandler}
          selectedOptions={selectedOptions}
        />
      )}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => String(item.id)}
      extraData={refresh}
    />
  );
};

const ModalFooter = ({okeyText, handleOnConfirm, saveActive}) => {
  return (
    <UIView style={styles.modalFooter}>
      <UIView style={styles.confirmButton} onPress={handleOnConfirm}>
        <UIText style={styles.confirmUIText}>{okeyText}</UIText>
      </UIView>
    </UIView>
  );
};

export function FilterModal(props) {
  const {
    title,
    visible,

    options,
    selectedOptions,

    handleOnConfirm,
    handleOnCancel,
    refresh,
    okeyText,
    onSelectedHandler,
  } = props;

  return (
    <Modal animationType="fade" transparent={true} visible={visible || false}>
      <UIView style={styles.overlay}>
        <UIView
          style={[
            styles.custom_modal,
            {
              height: DEVICE_HEIGHT - 165,
              top: 160,
              paddingBottom: 20,
            },
          ]}>
          <UIView>
            <ModalHeader title={title} handleClose={handleOnCancel} />
            <ModalBody
              options={options}
              onSelectedHandler={onSelectedHandler}
              selectedOptions={selectedOptions}
              refresh={refresh}
            />
            <ModalFooter
              okeyText={okeyText}
              handleOnConfirm={handleOnConfirm}
              saveActive={
                Array.isArray(selectedOptions) && selectedOptions.length > 0
                  ? true
                  : false
              }
            />
          </UIView>
          <React.Fragment />
        </UIView>
      </UIView>
    </Modal>
  );
}

export default FilterModal;
