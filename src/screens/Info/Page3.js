import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

export default Info = props => (

  <View style={styles.container}>

    <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Page4')}>

      <View style={{flex: 1, justifyContent: "center", alignItems: 'center' }}>

        <Text style={styles.title}>Comandos</Text>

        <Image style={styles.image}
          source={require('../../../assets/imgs/Palavras-Chaves.png')}
        />

      </View>

    </TouchableWithoutFeedback>

  </View>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Comic Sans MS',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    margin: 10,
    color: '#53555e'
  },
  image: {
    width: 400,
    height: 400,
    justifyContent: 'center'
  },
});

Info.navigationOptions = {
  header: null
}