import React , {Component} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar, ScrollView} from 'react-native'
import { loginStyles, Loginscreen } from '../styles/styles'
import { styles } from '../styles/styles'



import color from '../styles/colors'



export default class Productos  extends Component{

    

   
  
    render(){
        
        return(
            <View style={[Loginscreen.container, { padding: 50  , color:color.WHITE}]}>
                
               
             <Text>Aqui irian todos los productos disponibles </Text>
           </View>
        )
     }
}