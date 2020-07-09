import { StyleSheet, ImageComponent } from 'react-native'
import color from './colors'



const Registroscreen = StyleSheet.create({
    contraseña:{
        width: 350,
        height:60,
        borderRadius:9,
     
        
      marginTop:0,
        
        marginBottom: 15,
       backgroundColor:color.TERCERO

    },
    texto:{
       marginTop:3,
        marginLeft: 15,
        color:color.QUINTO
    },
    imagen:{
        marginBottom:0

      },
      
      boton:{
          width: 350,
          height: 50,
          
      },
        loginBtn: {


        backgroundColor: color.CUARTO,

        
        alignItems: "center",
        justifyContent: "center",
        marginTop: 18,
        marginBottom: 10,
        width: 350,
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

        flex: 1,
        backgroundColor: '#282828',
        alignItems: 'center',
        justifyContent: 'center',
    },
    

})
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

        
        alignItems: "center",
        justifyContent: "center",
        marginTop: 18,
        marginBottom: 10,
        width: 350,
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

        flex: 1,
        backgroundColor: '#fefefe',
        alignItems: 'center',
        justifyContent: 'center',
    },
    

})
const Recuperarcreen = StyleSheet.create({
    contraseña: {
        width: 350,
        height: 60,
        borderRadius: 9,


        justifyContent: "center",

        marginBottom: 10,
        backgroundColor: '#b2b5ba'

    },
    texto: {
        marginLeft: 15,
        color: '#2F6FA8'
    },
    imagen: {
        marginBottom: 50

    },
    boton: {
        width: 350,
        height: 50,

    },
    loginBtn: {


        backgroundColor:'#2F6FA8',


        alignItems: "center",
        justifyContent: "center",
        marginTop: 18,
        marginBottom: 180,
        width: 350,
        height: 65,
        borderRadius: 7,


    },
    checkBox: {
        marginLeft: 0,
        marginRight: 0,
        borderWidth: 0,
        backgroundColor: '#282828',
        marginBottom: 100

    },
    container: {

        flex: 1,
        backgroundColor: '#fefefe',
        alignItems: 'center',
        justifyContent: 'center',
    },

    

})

//Estilos para SplashScreen
const imageBackgroundStyle = StyleSheet.create({
    image: {
        flex:1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282828'
        ,
      
       
    },
    
})

//Estilos para LoginScreen
const loginStyles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
    },

    logo: {
        paddingTop: 50,
        alignItems: 'center',
    },

    btnMain: {
        width: 280,
        marginTop:40,
        marginBottom: 20,
        backgroundColor: color.BLUE,
        borderRadius: 60
    },

    btnTransparent: {
        backgroundColor: 'rgba(52, 52, 52, 0)',
        borderColor: color.BLUE,
        width: 280,
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 60
    },

    btntxt: {
        textAlign: 'center',
        fontSize: 17,
        color: color.WHITE,
        paddingVertical: 15,
     //   fontFamily: 'Poppins-Bold',
    },

    txtTransparent: {
        color: color.LIGHTPRIMARYCOLOR,
        fontSize: 14,
      //  fontFamily: 'Poppins-Light',
    }
})

const styles = StyleSheet.create({
    Lobotamaño:{
        height: 10,
        width: "10%",
        

    },
    BackRecuperar:{
        height: 80,
        width: "10%",
        
        

    },

    CORREOVARRA:{
        marginBottom: 60,

    },
    CORREOVARRA: {
        marginBottom: 100,

    },
    
    lobop: {
      
        width: 50, 
        height: 60,
        marginTop:60,
        marginBottom:2,
        borderRadius:120
       


    },
    ImgRegistro:{
        width: 50,
        height: 60,
        marginTop: 60,
         borderRadius: 120


    },
    lobop2: {

        width: 50,
        height: 60,
        marginTop:"60%",
        borderRadius: 120



    },
    container: {

        flex: 1,
        backgroundColor: '#282828',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
       
        fontWeight: "bold",
        fontSize: 30,
        color: "#ff471a",
        marginBottom: 70,
       
    },
    logo3: {

        fontWeight: "bold",
        fontSize: 30,
        color: "#ff471a",
        marginBottom: 0
    },
    logoRecuperar: {

        fontWeight: "bold",
        fontSize: 30,
        color: "#ff471a",
        marginBottom:20,
       
        
    },
    inputView: {
        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 50,
        marginBottom: 80,
        justifyContent: "center",
        padding: 20,
        marginTop: 10,
    },
    inputText: {

        height: 50,
        color: "white"
    },
    forgot: {
        color: "white",
        fontSize: 16,
        
    },
    forgotRecuperar: {
        color: '#FFF',
        fontSize: 16,
        marginTop:50,
     
        
        
    },
    loginBtn: {

        width: "60%",
        backgroundColor: "#ff471a",
        borderRadius: 25,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 18,
        marginBottom: 10
    },
  
    loginText: {
        color: "white",
        fontSize: 16,
       
    },
    loginText2: {
        color: "white",
        fontSize: 16,
        
    },
    SegunBtn: {
        width: "60%",
        backgroundColor: "#ffa64d",
        borderRadius: 25,
        height: 40,
        alignItems: "center",
        justifyContent: "center",

        marginBottom: 0,
        

    },
    SegunBtn2: {
        width: "60%",
        backgroundColor: "#ffa64d",
        borderRadius: 25,
        height: 40,
        alignItems: "center",
        justifyContent: "center",

        marginBottom: 230

    }
    
    
    


})

//Estilos para RegistroScreen
const registroStyles = StyleSheet.create({

    checkBox: {
        marginLeft: 0,
        marginRight: 0,
        borderWidth: 0,
        backgroundColor: '#282828',
        marginBottom:100
        
    },

    containerSocial: {
        paddingTop: 30,
        alignItems: 'center',
        marginBottom: 10,
    },

    buttonSocialIcon: {
        marginBottom: 10,
        width: 250,
        height: 50,
        alignItems: 'center',
        borderRadius: 60,
    },
})
const mainStyles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: color.WHITE
    },

    containerCenter: {
        paddingTop: 10,
        alignItems: 'center',
        marginBottom: 25,
    },

    titleText: {
        fontSize: 28,
        marginTop: 20,
        fontWeight: "bold",
        
        color: "#ff471a",
        
       
        
    },
    titleText2: {
       
        fontSize: 28,
        fontWeight: "bold",
         marginBottom:10,
        color: "#ff471a",
     


    },

    btnMain: {
        width: 280,
        marginTop: 40,
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: color.BLUE,
        borderRadius: 60
    },

    btnTransparent: {
        backgroundColor: 'rgba(52, 52, 52, 0)',
        borderColor: color.BLUE,
        width: 280,
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 60
    },

    btntxt: {
        textAlign: 'center',
        fontSize: 17,
        color: color.WHITE,
        paddingVertical: 15,
       
    },

    txtTransparent: {
        color: color.LIGHTPRIMARYCOLOR,
        fontSize: 14,
        
    }

})






export { loginStyles, imageBackgroundStyle, styles, registroStyles, mainStyles, Registroscreen, Loginscreen, Recuperarcreen} 