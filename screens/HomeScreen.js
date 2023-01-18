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
    const [date, setdate] = useState(null)

    const [data, setdata] = useState([])

    // console.log("location",location)
    // console.log("model",model)
    // console.log("color",color)
    // console.log("rating",rating)

    const deneme = data.filter(x=>x.rating === rating)

    console.log("deneme",deneme)

   
    // let filter = {
    //     brand:model,
    //     color:color,
    //     location:location,
    //     reserved:false,
    //     rating:rating
    //   };
    useEffect(() => {
        database()
            .ref('/')
            .once('value')
            .then(snapshot => {
                setdata(snapshot.val())
                //console.log('User data: ', snapshot.val());
            });
    }, [location,model,color,rating,date])

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
              location={location} 
             setdate={setdate}
              date={date} />
            <View  >
                <ScrollView>
                  
                {rating === null && model === null && color === null && date === null &&  location === "All" && data.map((val,index)=>(
                        <BikeCard key={index} id={index} val={val}  navigation={navigation} />
                    ))}  
                  { data.filter(x=>x.location === location ).map((val,index)=>(
                        <BikeCard key={index} id={index} val={val}  navigation={navigation} />
                    ))}
                  { data.filter(x=>x.date === date ).map((val,index)=>(
                        <BikeCard key={index} id={index} val={val}  navigation={navigation} />
                    ))}
                  { data.filter(x=>x.brand === model ).map((val,index)=>(
                        <BikeCard key={index} id={index} val={val}  navigation={navigation} />
                    ))}
                  { data.filter(x=>x.color === color ).map((val,index)=>(
                        <BikeCard key={index} id={index} val={val}  navigation={navigation} />
                    ))}
                  { data.filter(x=>x.rating === rating ).map((val,index)=>(
                        <BikeCard key={index} id={index} val={val}  navigation={navigation} />
                    ))}
                    
                   
            
                    
                </ScrollView>
            </View>

        </View>
    )
}

export default HomeScreen

