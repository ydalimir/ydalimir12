import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../screens/LoginScreen'
import RegistroScreen from '../screens/RegistroScreen'
import RecuperarPassword from '../screens/RecuperarPassword'
import HomeScreen from '../screens/HomeScreen'
import Trabajos from '../screens/Trabajos'
import Servicios from '../screens/Servicios'
import Productos from '../screens/Productos'




//NAVEGACION ENTRE PANTALLAS PRINCIPAL
const AppNavigation = createStackNavigator({
   
    Login: {
        screen: LoginScreen,
        
       
    },
    Registrar: {
        screen: RegistroScreen,

    },
    Recuperar:{
        screen:RecuperarPassword
    },
    Home:{
        screen:HomeScreen,
        
    },
    Trabajos:{
        screen:Trabajos
  
    },
    Servicios:{
        screen:Servicios

    },
    Productos:{
        screen:Productos

    }



    
})

 
export default createAppContainer(AppNavigation)