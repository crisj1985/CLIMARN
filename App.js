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

  const  {pais,ciudad} = busqueda
  useEffect( () => {
    consultarClima = async () => {
      if(consultar){
        const appId = '4a9d7a9154d193db95e02c0d0755e74c'
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
        console.log(url);

        try {    
          const resultado = await fetch(url)
          const respuesta = await resultado.json()
          setResultado(respuesta)
          setConsultar(false)
          
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



  return (
    <>
      <TouchableWithoutFeedback onPress={() => ocultaTeclado()}>
        <View style={styles.app}>
          <View style={styles.contenido}>
            <Clima resultado = {resultado}/>
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
    backgroundColor:"rgb(71,149,212)",
    justifyContent: 'center'

  },
  contenido:{
    marginHorizontal:"2.5%"
  }
});

export default App;
