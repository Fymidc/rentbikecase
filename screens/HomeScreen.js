import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import BikeCard from '../components/BikeCard'
import Header from '../components/Header'
import database from '@react-native-firebase/database';


const HomeScreen = ({ navigation }) => {

    const [location, setlocation] = useState(null)
    const [model, setmodel] = useState(null)
    const [color, setcolor] = useState(null)
    const [rating, setrating] = useState(null)

    const [data, setdata] = useState([])

    // console.log("location",location)
    // console.log("model",model)
    // console.log("color",color)
    // console.log("rating",rating)

    const deneme = data.filter(x=>x.location === location | x.color === color | x.brand === model | x.rating === rating)

    console.log("deneme",deneme)

   
    let filter = {
        brand:model,
        color:color,
        location:location,
        reserved:false,
        rating:rating
      };
    useEffect(() => {
        database()
            .ref('/')
            .once('value')
            .then(snapshot => {
                setdata(snapshot.val())
                //console.log('User data: ', snapshot.val());
            });
    }, [location,model,color,rating])

 console.log(location)

    return (
        <View style={{ flex: 1 }} >
            <Header 
            setrating={setrating}
            rating={rating}
            setcolor={setcolor}
            color={color}
            setmodel={setmodel}
            model={model}
             setlocation={setlocation}
              location={location} />
            <Text style={{ marginVertical: 20, fontSize: 18, paddingHorizontal: 20 }} >{data.length} Results</Text>
            <View  >
                <ScrollView>
                    { location | color | model | rating === null ? data.map((val,index)=>(
                        <BikeCard key={index} id={index} val={val}  navigation={navigation} />
                    )) : 
                    data.filter(x=>x.location === location | x.color === color | x.brand === model | x.rating === rating).map((val,index)=>(
                        <BikeCard key={index} id={index} val={val}  navigation={navigation} />
                    ))
                     }
            
                    
                </ScrollView>
            </View>

        </View>
    )
}

export default HomeScreen

//create login and register screen
//connetct firebase and try log in and log out
//bike will those : model,color,location,rating,and vheckbox for available or not

//see a list of bikes for available dates
//rate the bikes
//filter bikes
//reserve a bike
//cancel reserve