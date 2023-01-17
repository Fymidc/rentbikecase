import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import BikeCard from '../components/BikeCard'
import { AirbnbRating } from '@rneui/themed';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import database from '@react-native-firebase/database';

const DetailScreen = ({route}) => {
    //default rating propsdan gelecek.
    const {brand,key} = route.params
    console.log(route.name)
    const [rating, setRating] = useState("")
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [data, setdata] = useState([])

    console.log("key",key)

    useEffect(() => {
        database()
        .ref(`/${key}`)
        .once('value')
        .then(snapshot => {
            setdata(snapshot.val())
           // console.log('detailsden gelen data: ', snapshot.val());
        });
    }, [])
    

    const showDatePicker = () => {
        setDatePickerVisibility(true);
       // console.log("show")
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };

    const handleConfirm = (date) => {
        const ndate = new Date(date).toDateString().slice(0,10)
        
        //console.log("A date has been picked: ", ndate);
        hideDatePicker();
    };
    //console.log(rating)
    return (
        <View style={{ flex: 1 }} >
            <View style={{
                backgroundColor: "#2D033B",
                width: "100%",
                height: 250,
                borderBottomRightRadius: 35,
                borderBottomLeftRadius: 35,

            }} />
            <View style={{ flex: 1, }} >

                <View style={{ flex: 3, bottom: 55 }} >
                    <BikeCard route={route.name} val={data} />
                </View>
                <View style={{ flex: 4 }} >
                    <View style={{ justifyContent: "space-between" }} >
                        <View style={{ justifyContent: "space-between" }} >

                            <AirbnbRating
                                onFinishRating={(e) => setRating(e)}
                                defaultRating={4}
                                size={20}
                                starContainerStyle={{
                                    marginBottom: 20,

                                }}
                                showRating={false}
                            />
                        </View>
                        <View>

                            <TouchableOpacity style={{
                                width: "80%",
                                backgroundColor: "#222222",
                                alignSelf: "center",
                                padding: 15
                            }} activeOpacity={0.7} onPress={()=>showDatePicker()} ><Text style={{ fontSize: 16, color: "white", textAlign: "center" }} >Reserve</Text></TouchableOpacity  >
                        </View>
                    </View>
                </View>
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    )
}

export default DetailScreen