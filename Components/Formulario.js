import React,{useState} from 'react'
import { Text, View, StyleSheet, TextInput, Animated, TouchableWithoutFeedback } from 'react-native'
import {Picker} from '@react-native-community/picker'

const Formulario = () => {
  const [animacionBoton] = useState(new Animated.Value(1)) 
  const animacionEntrada = () => {
    Animated.spring(animacionBoton,{
      toValue: 0.8,
      useNativeDriver:true
    }).start()
  }
  const animacionSalida = () => {
    Animated.spring(animacionBoton, {
      toValue: 1,
      useNativeDriver: true,
    }).start()
  }

  const estiloAnimacion = {
    transform:[{scale:animacionBoton}]
  }

  return (
    <View style={styles.formulario}>
      <View>
        <TextInput style={styles.input} placeholder="Ciudad" placeholderTextColor="#666" />
      </View>
      <View>
        <Picker itemStyle={{ backgroundColor: '#fff', height: 120 }}>
          <Picker.item label="-- Seleccion un pais --" value="" />
          <Picker.item label="Estados Unidos" value="US" />
          <Picker.item label="Mexico" value="MX" />
          <Picker.item label="Ecuador" value="EC" />
          <Picker.item label="Argentina" value="AR" />
          <Picker.item label="Colombia" value="CO" />
          <Picker.item label="Costa Rica" value="CR" />
          <Picker.item label="Espana" value="ES" />
        </Picker>
      </View>
      <TouchableWithoutFeedback onPressIn={() => animacionEntrada()} onPressOut={() => animacionSalida()}>
        <Animated.View  style={[styles.btnBuscar, estiloAnimacion]}>
          <Text style={styles.txtBuscar}>Buscar Clima</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  formulario: {
    marginTop: 10,
  },
  input: {
    padding: 10,
    height: 50,
    backgroundColor: '#fff',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  btnBuscar: {
    marginTop: 50,
    backgroundColor: '#000',
    padding: 10,
    justifyContent: 'center',
  },
  txtBuscar: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign:'center',
    fontSize:18
  },
})

export default Formulario