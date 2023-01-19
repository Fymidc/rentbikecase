import { View, Text } from 'react-native'
import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker';

const DropdownPicker = (props) => {

  return (<View style={{ flex: 1 }} >

    <DropDownPicker
      dropDownContainerStyle={{
        backgroundColor:"white",
        borderWidth: 0
      }}
      containerStyle={{
        width: "80%",
      }}

      placeholderStyle={{
        color: "tomato",
        fontWeight: "bold",
      }}
      listItemLabelStyle={{
        color: "#000",
        fontSize: 17,
      }}
      listItemContainerStyle={{
        zIndex: 22
      }}
      style={{
        borderWidth: 0,
        zIndex: 22
      }}
      placeholder={props.placeholder}
      open={props.open}
      value={props.value}
      items={props.items}
      setOpen={props.setOpen}
      setValue={props.setValue}
      setItems={props.setItems}
    />
  </View>
  )
}

export default DropdownPicker