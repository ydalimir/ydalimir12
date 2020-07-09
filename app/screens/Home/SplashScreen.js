import React, { Component } from 'react'
import { View, StatusBar, Image, StyleSheet ,Text, } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { imageBackgroundStyle } from '@styles/styles'
import colors from '../styles/colors'


export default class SplashScreen extends Component {

    goToScreen(routeName) {
        this.props.navigation.navigate(routeName)
    }

    componentDidMount() {

        setTimeout(() => {
            this.goToScreen('Registrar')
        }, 3000, this)
    }

    render() {
        return (
            





                <View style={imageBackgroundStyle.image}>
                <Text style={{ marginBottom:300 }}></Text>
                    <StatusBar translucent backgroundColor='rgba(0,0,0,0.2)' />
                    <Animatable.Image
                        animation="zoomIn"
                        easing="ease-out"

                        style={{


                        }}
                        source={require('../recursos/img/FaceDogorange.png')}
                    />
                    <Image style={{ marginTop: 20 }} source={require('../recursos/img/LETRASCERBERUS.png')} />

                <Text style={{ marginTop: 300, color:'#9B9B9B'}}>© CERBERUS 2020. Todos los derechos de reservados </Text>


                </View>







          
            
        )
    }
}
