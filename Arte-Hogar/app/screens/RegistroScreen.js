import React , {Component} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar, ScrollView} from 'react-native'
import { loginStyles, Loginscreen } from '../styles/styles'
import { styles } from '../styles/styles'
import MyTextInput from '../components/MyTextinput2'



import color from '../styles/colors'



export default class RegistroScreen  extends Component{

    

   
  //  const [hidePassword, setHidePassword] = useState(false)
    
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
            <View style={[Loginscreen.container, { padding: 50  , color:color.WHITE}]}>
                
                <Image style={{width:100, height: 100,marginTop:30}} source={require('../recursos/img/logo2.jpg')} />
            

                <View style={Loginscreen.contraseña}>

                    <Text style={Loginscreen.texto}> Nombre completo</Text>
                    <MyTextInput keyboardType={null}
                       
                       onPress={() => this.setHidePassword()}

                       keyboardType={null}

                   />  
                    

                   
                </View>
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
                
                
                <Text style={{ marginBottom: 100, color: color.QUINTO, fontWeight: "bold", textDecorationLine: 'underline'}}>
                 los términos y condiciones</Text>

                







                
                <TouchableOpacity style={Loginscreen.loginBtn} onPress={() => this.goToScreen('Login')}>
                    <Text style={{ fontSize: 20, color: color.WHITE }}>REGISTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.goToScreen('Login')}>
                    <Text style={{ color: color.SEGUNDO, marginTop: 6,marginBottom:103, fontSize: 20, textDecorationLine: 'underline' }}>VOLVER</Text>

                </TouchableOpacity>

               



               
             
           </View>
        )
     }
}


