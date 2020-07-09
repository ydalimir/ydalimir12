import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { lregistroStyles, mainStyles , styles} from '@styles/styles'



export default class HomeScreen extends Component {

    render() {

        return (

            <View   style={ styles.container}>


                <Text style={[mainStyles.titleText2, ]}>Hogar</Text>

                
            </View>
        )
    }
}
