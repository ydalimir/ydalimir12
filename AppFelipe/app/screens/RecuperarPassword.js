import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native'
import { lregistroStyles, mainStyles  } from '../styles/styles'
import { styles, registroStyles, Recuperarcreen} from '../styles/styles'
import MyTextInput from '../components/MyTextinput2'
import color from '../styles/colors'







export default class RecuperarPassword extends Component {

    goToScreen( routeName) {
        this.props.navigation.navigate(routeName)
    }




    render() {
        let props = this.props
        return (
            <View style={[Recuperarcreen.container, { padding: 50 }]}>
            <Image style={{width:80, height: 80, marginBottom:40}} source={require('../recursos/img/vendon.png')} />
               
      
                <View style={Recuperarcreen.contraseña}>

                    <Text style={[Recuperarcreen.texto,{marginTop:43,marginBottom:-10}]}>E-mail/Telefono</Text>
                    <MyTextInput keyboardType={null}
                       
                       onPress={() => this.setHidePassword()}

                       keyboardType={null}

                   />   
                   

                   
                </View>


                
                <TouchableOpacity style={Recuperarcreen.loginBtn} onPress={() => this.goToScreen('Login')} >
                    <Text style={{ fontSize: 20, color: color.WHITE }}>ENVIAR</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.goToScreen('Login')}>
                    <Text style={{ color: color.SEGUNDO, fontSize: 20, textDecorationLine: 'underline' }}>VOLVER</Text>

                </TouchableOpacity>

                


                








            </View>






        )
    }
}
