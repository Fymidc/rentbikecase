import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import * as Yup from "yup"
import auth from "@react-native-firebase/auth"

const Login = ({navigation}) => {
  const login = (values,{setsubmitting,resetForm}) => {
    try {
       auth().signInWithEmailAndPassword(values.email,values.password).then(() => {
        resetForm({})
        
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert("That email address is already in use!")
        }
        if (error.code === 'auth/weak-password') {
          alert("password is too short.")
        }
        if (error.code === 'auth/user-not-found') {
          alert("user not found.")
          setsubmitting(false)
        }
    
        if (error.code === 'auth/invalid-email') {
          alert("That email address is invalid!")
          setsubmitting(false)
        }
    
      })
    } catch (error) {
     
      setsubmitting(false)
    }    
 
  }
  return (
    <View style={style.container} >
      <View style={style.header} >
        <Text style={{fontSize:30,fontWeight:"700",textAlign:"center",color:"white"}} >Lets Ride</Text>
      </View>
      <Formik

        initialValues={{
          email: "",
          password: ""
        }}
        onSubmit={login}
        validationSchema={
          Yup.object().shape({
            email: Yup.string().email("Not a valid email").required("You must enter an email"),
            password: Yup.string().required("You must enter a Password")
          })
        }
      >
        {({ values, handleSubmit, errors, handleChange,isValid,isSubmitting }) => (
          <View style={{width:"100%",paddingHorizontal:30,justifyContent:"center"}} >
            <View style={style.inputContainer}  >
              <TextInput
              style={style.input}
                placeholder='email'
                autoCapitalize='none'
                value={values.email}
                onChangeText={handleChange("email")}

              />
              {(errors.email) && <Text style={style.error} >{errors.email}</Text>}
            </View>
            <View style={style.inputContainer}  >
              <TextInput
              style={style.input}
                placeholder='password'
                secureTextEntry={true}
                autoCapitalize='none'
                value={values.password}
                onChangeText={handleChange("password")}

              />
              {(errors.password) && <Text style={style.error} >{errors.password}</Text>}
            </View>
            <View style={style.inputContainer} >
              <TouchableOpacity 
              style={style.button}
              activeOpacity={0.7}
              disabled={!isValid || isSubmitting}
              onPress={handleSubmit} > 

                <Text style={{fontSize:18,fontWeight:"700",color:"black"}} >Log in</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity  onPress={()=>navigation.navigate("Register")} activeOpacity={0.7} >
                <Text style={{textAlign:"center"}} >Register here..</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  )
}

export default Login

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#DA3124",
    justifyContent:"center",
    alignItems:"center"
  },
  inputContainer: {
    marginBottom:20
  },
  input:{
    padding:15,
    borderRadius:10,
    backgroundColor:"white"
  },
  header:{
    marginBottom:30
  },
  button:{
    paddingHorizontal:10,
    paddingVertical:15,
    backgroundColor:"white",
    width:"100%",
    justifyContent:"center",
    alignItems:"center"
  },
  error:{
    color:"red"
  }
})


//formik doesnt show up 