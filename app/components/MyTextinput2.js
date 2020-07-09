import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'

import { Icon, Input,leftIcon} from 'react-native-elements'
import color from '../styles/colors'
import { NavigationEvents } from 'react-navigation'

export default class MyTextInput extends Component {

    render() {
        let { props } = this
        return (
            <Input
            
             
            
                  
                style={{ alignItems: 'center', borderBottomWidth: 0 }}
                containerStyle={{ marginBottom: 5 }}
                inputStyle={{
                    fontSize: 18, paddingVertical: 10,
                    paddingHorizontal: 8, 
                    color: color.WHITE,
                }}
                
                
                placeholderTextColor={color.TERCERO}
                placeholder={props.placeholder}yda
                leftIconContainerStyle={{ marginLeft: 0 }}
                leftIcon={<Icon size={24} color={color.WHITE}
                    type={'font-awesome'} name={props.image} />}
                rightIcon={props.bolGone ?
                    <TouchableOpacity activeOpacity={0.8} style={styles.btnVisibility} onPress={() => { props.onPress(); this.forceUpdate() }}>
                        <Image style={styles.btnImage} tintColor={color.WHITE}
                            source={(props.secureTextEntry) ? require('../recursos/img/ver.png') : require('../recursos/img/nover.png')} />
                    </TouchableOpacity> :
                    <Icon size={24} color={color.TERCERO}
                        type={'font-awesome'} name={props.imageRight} />}
                errorStyle={{ color: color.TERCERO }}
                errorMessage={(props.bolError) ? props.strError : ''}
                editable={props.editable}
                secureTextEntry={props.secureTextEntry}
                keyboardType={props.keyboardType}
                onChangeText={props.onChangeText}
                value={props.value} />

        )
    }
}
const styles = StyleSheet.create({

    btnVisibility:
    {
        height: 40,
        width: 35,
        paddingTop: 8,
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 15
    },

    btnImage:
    {
        resizeMode: 'contain',
        height: '100%',
        width: '100%'
    },
})


