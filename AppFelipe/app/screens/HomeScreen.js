import React , {Component} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar, ScrollView} from 'react-native'



import MyTextInput from '../components/MyTextinput2'
import {checkBox , SocialIcon , Button} from 'react-native-elements'




import color from '../styles/colors'





export default class HomeScreen extends Component{
   

    goToScreen( routeName) {
        this.props.navigation.navigate(routeName)
    }

    render(){
        
        return(
            <ScrollView style={Loginscreen.container} >
               

               <TouchableOpacity style={Loginscreen.btnPirncipal} onPress={() => this.goToScreen('Servicios')}>
               <Image style={{marginLeft:25  , marginTop:150}} source={require('../recursos/img/Anunciate.png')} />
                
               <TouchableOpacity style={Loginscreen.loginBtn} onPress={() => this.goToScreen('Servicios')}>
                    <Text style={{ fontSize: 20, color: color.WHITE }}>¡Anunciate!</Text>
                </TouchableOpacity>


                </TouchableOpacity>


                <TouchableOpacity style={Loginscreen.btnPirncipal} onPress={() => this.goToScreen('Trabajos')}>
               <Image style={{marginLeft:25  , marginTop:150}} source={require('../recursos/img/Trabajos.png')} />
                
               <TouchableOpacity style={Loginscreen.loginBtn} onPress={() => this.goToScreen('Trabajos')}>
                    <Text style={{ fontSize: 20, color: color.WHITE }}>¡Trabajemos!</Text>
                </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={Loginscreen.btnPirncipal} onPress={() => this.goToScreen('Productos')}>
               <Image style={{marginLeft:25  , marginTop:150}} source={require('../recursos/img/ventas.png')} />
                
               <TouchableOpacity style={Loginscreen.loginBtn} onPress={() => this.goToScreen('Productos')}>
                    <Text style={{ fontSize: 20, color: color.WHITE }}>¡Compremos!</Text>
                </TouchableOpacity>
                </TouchableOpacity>


                
               

           </ScrollView>
        )
     }
}
const Loginscreen = StyleSheet.create({
    contraseña:{
        width: 350,
        height:60,
        borderRadius:9,
     
        
      marginTop:9,
        
        marginBottom: 15,
       backgroundColor:'#b2b5ba'

    },
    texto:{
       marginTop:3,
        marginLeft: 15,
        color:'#2F6FA8'
    },
    imagen:{
        marginTop:60

      },
      
      boton:{
          width: 350,
          height: 50,
          
      },
        loginBtn: {


        backgroundColor: '#2F6FA8',

        marginLeft:50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 18,
        marginBottom: 10,
        width: 250,
        height: 65 ,
            borderRadius: 7,
           
        
    },
    checkBox: {
        marginLeft: 0,
        marginRight: 0,
        borderWidth: 0,
     
        backgroundColor: '#282828',
       

    },
    container: {

       
        backgroundColor: 'black',
       
    },
    btnPirncipal:{
        backgroundColor:'black'
    }
    

})