import { View, Text, Modal } from 'react-native'
import React, { useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import Fontisto from "react-native-vector-icons/Fontisto"
import AddModal from './AddModal';
import DropdownPicker from './DropdownPicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import auth from "@react-native-firebase/auth"

const Header = (props) => {
    const [open, setOpen] = useState(false);
    //const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'All', value: "All" },
        { label: 'beşiktaş', value: 'beşiktaş' },
        { label: 'taksim', value: 'taksim' },
        { label: 'beykoz', value: 'beykoz' }
    ]);
    const [visible, setVisible] = React.useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    

    const logout=()=>{
        auth().signOut().then((res)=>{
            console.log(res)
    })
    }
    const showDatePicker = () => {
        setDatePickerVisibility(true);
        console.log("show")
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
        props.setdate(null)
      };

    const handleConfirm = (date) => {
        const ndate = new Date(date).toDateString().slice(0,10)
        props.setdate(ndate)
        //console.log("A date has been picked: ", ndate);
        hideDatePicker();
    };


    return (
        <View style={{ elevation: 4, zIndex: 22, padding: 20, borderBottomColor: "red" }} >
            <View style={{flexDirection:"row",justifyContent:"space-between"}} >

                <Text style={{ fontSize: 25, fontWeight: "800", color: "black" }} >Choose A Bike</Text>
                <Ionicons onPress={()=> logout()} style={{paddingHorizontal:10}} name='log-out-outline' size={25} />
            </View>
            <View style={{ flexDirection: "row", marginTop: 15, justifyContent: "space-around", alignItems: "center" }} >
                <DropdownPicker

                    placeholder={"Select a Location"}
                    open={open}
                    value={props.location}
                    items={items}
                    setOpen={setOpen}
                    setValue={props.setlocation}
                    setItems={setItems}
                />
                <Fontisto onPress={() => showDatePicker()} style={{ paddingHorizontal: 10 }} name='date' size={25} />
                <Ionicons onPress={() => setVisible(true)} style={{ paddingHorizontal: 10 }} name='filter' size={25} />

            </View>
            <AddModal
            setlocation={props.setlocation}
            location={props.location}
            setrating={props.setrating}
            rating={props.rating}
            setcolor={props.setcolor}
            color={props.color}
            setmodel={props.setmodel}
            model={props.model}
            
            visible={visible} 
            setVisible={setVisible} />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    )
}

export default Header