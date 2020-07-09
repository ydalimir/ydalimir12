import React , {Component} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar, ScrollView} from 'react-native'
import { loginStyles, Loginscreen } from '../styles/styles'
import { styles } from '../styles/styles'


import MyTextInput from '../components/MyTextinput2'
import {checkBox , SocialIcon , Button} from 'react-native-elements'




import color from '../styles/colors'





export default class LoginScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            hidePassword:false
        }
    }
  //  const [hidePassword, setHidePassword] = useState(false)
    setHidePassword = (value)=>{
        this.state.hidePassword= !this.state.hidePassword
        this.forceUpdate()

    }
    goToScreen( routeName) {
        this.props.navigation.navigate(routeName)
    }


    render(){
        
        return(
            <View style={[Loginscreen.container, { padding: 50  , }]}>
                
                <Image style={{width:160,marginBottom:40,marginTop:110, height: 160,}} source={require('../recursos/img/logo2.jpg')} />
               

                <View style={Loginscreen.contraseña}>

                    <Text style={Loginscreen.texto}>E-mail/Telefono</Text>
                    <MyTextInput keyboardType={null}
                       
                        onPress={() => this.setHidePassword()}

                        keyboardType={null}

                    />     
                   

                </View>



                <View style={Loginscreen.contraseña}>

                    <Text style={Loginscreen.texto}> Contraseña</Text>
                
                    
               
                    <MyTextInput keyboardType={null}   
                     
                    
                        onPress={() => this.setHidePassword()}

                        keyboardType={null}
                        bolGone={true} secureTextEntry={this.state.hidePassword}
                    />

                   
                </View>





                <TouchableOpacity onPress={() => this.goToScreen('Recuperar')}>
                <Text style={{ marginLeft: 110, fontSize: 13, color: color.SEGUNDO,marginBottom:85, marginTop: 15, textDecorationLine: 'underline' }} onPress={() => this.goToScreen('Recuperar')}>
                        ¿Olvidaste tu contraseña?
                    </Text>
                </TouchableOpacity>

                

                <TouchableOpacity style={Loginscreen.loginBtn} onPress={() => this.goToScreen('Principio')}>
                    <Text style={{ fontSize: 20, color: color.WHITE }}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.goToScreen('Registrar')}>
                    <Text style={{ color: color.SEGUNDO, marginTop: 6,marginBottom:103, fontSize: 20, textDecorationLine: 'underline' }}>Registrar</Text>

                </TouchableOpacity>

               



               
             
           </View>
        )
     }
}


