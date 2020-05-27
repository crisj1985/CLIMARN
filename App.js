import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Formulario from './Components/Formulario';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {

  const ocultaTeclado = ()=>{
    Keyboard.dismiss();
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={()=> ocultaTeclado()}>
        <View style={styles.app}>
          <View style={styles.contenido}>
            <Formulario />
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
