import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';

export default Info = props => (

  <View style={styles.container}>

    <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Page2')}>

      <View style={{ flex: 1, justifyContent: "center" }}>

        <View style={{ alignItems: 'flex-end' }}>
          <Image style={styles.compass}
            source={require('../../../assets/imgs/orientação.png')}
          />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Text style={styles.title}>Teclas Direcionais</Text>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image style={styles.image}
            source={require('../../../assets/imgs/Setas.png')}
          />
        </View>


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
    width: 350,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center'
  },
  compass: {
    width: 200,
    height: 200,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
});

Info.navigationOptions = {
  header: null
}