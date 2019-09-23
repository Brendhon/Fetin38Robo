import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  ImageBackground,
  Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icons from 'react-native-vector-icons/MaterialIcons'
import backgroundImage from '../../../assets/imgs/neve.png'
import Remove from '../../functions'
import axios from 'axios'

export default class App extends Component {

  state = {
    ifIsay: '', //Variavel onde será salva 'se eu disser'
    contact: '', //Variavel para salvar o contato de Floquinho
  }

  /**
   * Enviando os dados no Banco contact
   */
  send = () => {

    //Declarando o objeto
    command = {
      read: Remove(this.state.ifIsay),
      username: this.state.contact
    }

    //Enviando dados via post
    axios.post('/contact.json', command)
      .then(res => Alert.alert("Sucesso"))
      .catch(err => Alert.alert("Erro"))
  }

  /**
   * Alert que irá avisar que os campos não foram preenchidos
   */
  warning = () => Alert.alert('Erro', 'Por favor, preencha os campos!')

  render() {

    return (

      <ImageBackground source={backgroundImage}
        style={styles.background}>

        <View style={{ marginVertical: 40 }}>

          {/* Entrada de dados do contato do Discord */}
          <View style={{ justifyContent: 'center' }}>

            <View style={styles.container} >

              <View style={styles.iconContainer}>
                <Icon name='discord' size={55} color='rgb(36,37,82)' />
              </View>

              <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                  placeholder='DiscordTag do usuário'
                  placeholderTextColor='white'
                  value={this.state.contact}
                  onChangeText={contact => this.setState({ contact })} />
              </View>

            </View>

          </View>

          {/* Entrada de dados do 'se vc disser' */}
          <View style={{ justifyContent: 'flex-start' }}>

            <View style={styles.container} >

              <View style={styles.iconContainer}>
                <Icons name='contact-phone' size={53} color='rgb(36,37,82)' />
              </View>

              <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                  placeholder='Associe o contato a uma palavra'
                  placeholderTextColor='white'
                  value={this.state.description}
                  onChangeText={ifIsay => this.setState({ ifIsay })} />
              </View>

            </View>

          </View>

        </View>

        {/* Verificação para conferir que os campos não estão vazios */}
        {this.state.contact && this.state.ifIsay ?

          <TouchableOpacity style={styles.buttonContainer} onPress={this.send}
            onPressOut={() => this.props.navigation.navigate('Home')}>
            <View style={styles.sendButton}>
              <Text style={styles.button}>ADICIONAR CONTATO</Text>
            </View>
          </TouchableOpacity> :

          <TouchableOpacity style={styles.buttonContainer} onPress={this.warning}>
            <View style={styles.warningButton}>
              <Text style={[styles.button, { color: 'rgba(36,37,82, 0.8)' }]}>ADICIONAR CONTATO</Text>
            </View>
          </TouchableOpacity>

        }

      </ImageBackground>
    );
  }
}

//Estilos
const styles = StyleSheet.create({
  background: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    marginVertical: 20
  },
  input: {
    backgroundColor: 'rgba(36,37,82, 0.8)',
    fontFamily: 'Comic Sans MS',
    justifyContent: 'flex-start',
    color: 'white',
    width: '100%',
    borderRadius: 5
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%'
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 40,
    margin: 10,
  },
  warningButton: {
    borderColor: 'rgba(36,37,82, 0.8)',
    borderWidth: 4,
    padding: 10,
    borderRadius: 20
  },
  sendButton: {
    backgroundColor: 'rgba(36,37,82, 0.8)',
    padding: 10,
    borderRadius: 20
  },
  button: {
    fontWeight: '400',
    fontSize: 15,
    fontFamily: 'Comic Sans MS',
    color: 'white'
  }

});

App.navigationOptions = {
  header: null,
}