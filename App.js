import React,{useState, useEffect} from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Formulario from './Components/Formulario'
import Clima from './Components/Clima'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {

  const [busqueda,setBusqueda] = useState({
    pais:'',
    ciudad:''
  })

  const [consultar, setConsultar] = useState(false)
  const [resultado,setResultado] = useState({})
  const [bgcolor,setBgcolor] = useState('rgb(71,149,212)')

  const  {pais,ciudad} = busqueda
  useEffect( () => {
    consultarClima = async () => {
      if(consultar){
        const appId = '4a9d7a9154d193db95e02c0d0755e74c'
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
        console.log(url);

        try {    
          const result = await fetch(url)
          const respuesta = await result.json()
          setResultado(respuesta)
          setConsultar(false)
          const kelvin = 273.15
          const { main } = resultado
          const actual =  main.temp - kelvin 
          console.log(actual)
          
          if(actual < 10){
            setBgcolor('rgb(105,108,149)')
          }else if (actual > 10 && actual < 25){
            setBgcolor('rgb(71,149,212)')
          }else{
            setBgcolor('rgb(178,28,61)')
          }
          
        } catch (error) {
          mostrarAlerta()
        }
      
      }
      
    }
    consultarClima()
  },[consultar])

  const mostrarAlerta = () => {
    Alert.alert('Error...', 'No hay resultado, intenta con otro ciudad o pais', [{ text: 'Entendido' }])
  }

  const ocultaTeclado = ()=>{
    Keyboard.dismiss()
  }

  const bgcolorApp = {
    backgroundColor: bgcolor,
  }


  return (
    <>
      <TouchableWithoutFeedback onPress={() => ocultaTeclado()}>
        <View style={[styles.app, bgcolorApp]}>
          <View style={styles.contenido}>
            <Clima resultado={resultado} />
            <Formulario busqueda={busqueda} setBusqueda={setBusqueda} setConsultar={setConsultar} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  )
};

const styles = StyleSheet.create({
  app:{
    flex:1,
    justifyContent: 'center'

  },
  contenido:{
    marginHorizontal:"2.5%"
  }
});

export default App;
