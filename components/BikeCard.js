import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons'
import { AirbnbRating } from '@rneui/themed';

const BikeCard = (props) => {
//console.log(props.val)
const [rating, setRating] = useState("")
const navdetail =()=>{
    if(props.route !== "Detail"){

        props.navigation.navigate("Detail",{brand:props.val?.brand,key:props.id})
    }
}

    return (
        <TouchableOpacity onPress={()=>navdetail()} activeOpacity={0.8} style={{
            backgroundColor:"white",
            elevation:4,
            height: 200,
            width: "80%",
            alignSelf: "center",
            borderRadius: 25,
            marginBottom:15
        }} >
            <View style={{flex:1 ,padding:10 }} >

                <View style={{flex:3,alignItems:"center"}} >
                    <MaterialIcons name='pedal-bike' size={135} color={props.val?.color} />
                   
                </View>
                <View style={{flex:1}} >

                    <Text style={{fontSize:18,fontWeight:"800",color:"black",paddingHorizontal:15}} >{props.val?.brand}</Text>
                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:15}} >
                    <Text style={{textAlign:"center",paddingBottom:20}} >{props.val?.reserved === true ? "Reserved" : "Available"}</Text>
                    <AirbnbRating
                                onFinishRating={(e) => setRating(e)}
                                defaultRating={props.val?.rating}
                                size={14}
                                starContainerStyle={{
                                    marginBottom: 20,

                                }}
                                isDisabled={true}
                                showRating={false}
                            />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default BikeCard