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
            <Image style={{width:150, height: 150,}} source={require('../recursos/img/logo2.jpg')} />
               
                <Text style={{fontSize:20, color:color.WHITE , marginBottom:10}}>¿Olvidaste tu contraseña?</Text>
                <Text style={{ fontSize: 15, color: color.WHITE, marginBottom: 10}}>Por favor ingresa tu e-mail para recibir nueva contraseña</Text>

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
                    <Text style={{ color: color.SEGUNDO, marginTop:-160, fontSize: 20, textDecorationLine: 'underline' }}>VOLVER</Text>

                </TouchableOpacity>

                


                








            </View>






        )
    }
}
