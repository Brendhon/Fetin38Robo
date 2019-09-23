import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icons from 'react-native-vector-icons/FontAwesome5'
import Voice from 'react-native-voice'
import {
  Alert,
  TouchableOpacity,
  View,
  ImageBackground,
  StyleSheet,
  Dimensions
} from 'react-native'
import Input from './components/Input'
import backgroundImage from '../../../assets/imgs/10.png'
import Selection from './components/modal'
import Remove from '../../functions'
import axios from 'axios'

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      results: [], //Array que ira armazenar o resultado do comando de voz
      noRecording: true, //Variavel de controle para o icone de microfone
      command: '', //Variavel para armazenar os comandos escritos
      showSelection: false //Variavel de controle do modal
    }
    //Iniciar um novo results a cada iniciação do app
    Voice.onSpeechResults = this.onSpeechResults.bind(this)
  }

  //Salvar resultados da gravação
  async onSpeechResults(e) {
    await this.setState({
      results: e.value
    })
    this.send((this.state.results[0] + ''))
  }

  //iniciar a gravação no idioma 'pt_BR'
  onSpeechStart() {
    Voice.start('pt_BR')
  }

  //Parar a gravação
  onSpeechEnd() {
    Voice.stop()
  }

  /**
   * Enviando os dados no Banco command
   * @param {String} text [Variavel que será editada e salva no Banco]
   */
  send = text => {

    //Declarando o objeto
    command = {
      execute: Remove(text),
    }

    //Enviando dados via post
    axios.post('/command.json', command)
      .then(res => Alert.alert("Sucesso"))
      .catch(err => Alert.alert("Erro"))
  }

  /**
   * Enviando os dados no Banco car
   * @param {int} number [Variavel que será enviada para o banco]
   */
  sendMove = number => {

    //Declarando o objeto
    command = {
      move: number,
    }

    //Enviando dados via post
    axios.post('/car.json', command)
  }

  render() {

    return (
      <ImageBackground source={backgroundImage}
        style={styles.background}>

        {/* Info e Modal */}
        <View style={styles.firstContainer}>

          <Selection navigation={this.props.navigation} isVisible={this.state.showSelection}
            onCancel={() => this.setState({ showSelection: false })}></Selection>

          {/* Tela de Contato e Aprendizado */}
          <View>
            <TouchableOpacity onPress={() => this.setState({ showSelection: true })}>
              <Icons name='chalkboard-teacher' size={30} color="rgb(82,84,93)"> </Icons>
            </TouchableOpacity>
          </View>

          {/* Tela de Informações */}
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Page1')}>
              <Icons name='info-circle' size={30} color="rgb(82,84,93)"> </Icons>
            </TouchableOpacity>
          </View>

        </View>

        {/* Comandos */}
        <View style={styles.secondContainer}>

          {/* Área de entrada de audio */}
          <View style={{ marginVertical: 2 }}>
            {this.state.noRecording ?
              <TouchableOpacity onPress={() => this.setState({ noRecording: false })}
                onPressIn={this.onSpeechStart.bind()}>
                <Icon name='microphone' size={70} color="rgb(82,84,93)"></Icon>
              </TouchableOpacity> :
              <TouchableOpacity onPress={() => this.setState({ noRecording: true })}
                onPressIn={this.onSpeechEnd.bind()}>
                <Icon name='microphone-slash' size={70} color="rgb(82,84,93)"></Icon>
              </TouchableOpacity>}
          </View>

          {/* Área de Entrada de comandos */}
          <View style={{ width: '80%', alignItems: 'center' }}>
            <Input placeholder='Entre com o comando'
              placeholderTextColor='white'
              value={this.state.command}
              onChangeText={command => this.setState({ command })}
              send={() => this.send(this.state.command)}
              clear={() => this.setState({ command: '' })}></Input>
          </View>

        </View>


        {/* Controle */}
        <View style={styles.thirdContainer}>

          <View style={styles.control}>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

              {/* Cima/Esquerda */}
              <View style={styles.up}>
                <TouchableOpacity onPressIn={() => this.sendMove(7)}
                  onPressOut={() => this.sendMove(0)}>
                  <Icon name='caret-square-o-up' size={50} style={styles.upLeft} ></Icon>
                </TouchableOpacity>
              </View>

              {/* Cima */}
              <View style={styles.up}>
                <TouchableOpacity onPressIn={() => this.sendMove(8)}
                  onPressOut={() => this.sendMove(0)}>
                  <Icon name='caret-square-o-up' size={65} style={styles.icon} ></Icon>
                </TouchableOpacity>
              </View>

              {/* Cima/Direita */}
              <View style={styles.up}>
                <TouchableOpacity onPressIn={() => this.sendMove(9)}
                  onPressOut={() => this.sendMove(0)}>
                  <Icon name='caret-square-o-up' size={50} style={styles.upRight} ></Icon>
                </TouchableOpacity>
              </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>

              {/* Esquerda */}
              <TouchableOpacity style={styles.left} onPressIn={() => this.sendMove(4)}
                onPressOut={() => this.sendMove(0)}>
                <Icon name='caret-square-o-left' size={65} style={styles.icon}></Icon>
              </TouchableOpacity>

              {/* Parar */}
              <View style={styles.stop}>
                <Icon name='stop-circle' size={75} style={styles.icon}></Icon>
              </View>

              {/* Direita */}
              <TouchableOpacity style={styles.right} onPressIn={() => this.sendMove(6)} 
                onPressOut={() => this.sendMove(0)}>
                <Icon name='caret-square-o-right' size={65} style={styles.icon}></Icon>
              </TouchableOpacity>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>

              {/* Baixo/Esquerda */}
              <View style={styles.down}>
                <TouchableOpacity onPressIn={() => this.sendMove(1)}
                  onPressOut={() => this.sendMove(0)}>
                  <Icon name='caret-square-o-down' size={50} style={styles.downLeft}></Icon>
                </TouchableOpacity>
              </View>

              {/* Baixo */}
              <View style={styles.down}>
                <TouchableOpacity onPressIn={() => this.sendMove(2)}
                  onPressOut={() => this.sendMove(0)}>
                  <Icon name='caret-square-o-down' size={65} style={styles.icon}></Icon>
                </TouchableOpacity>
              </View>

              {/* Baixo/Direita */}
              <View style={styles.down}>
                <TouchableOpacity onPressIn={() => this.sendMove(3)}
                  onPressOut={() => this.sendMove(3)}>
                  <Icon name='caret-square-o-down' size={50} style={styles.downRight}></Icon>
                </TouchableOpacity>
              </View>

            </View>

          </View>

        </View>

      </ImageBackground>

    )
  }
}

const styles = StyleSheet.create({
  background: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  firstContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  secondContainer: {
    flex: 2.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: 15
  },
  thirdContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
  },
  control: {
    backgroundColor: 'rgb(36,37,82)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 70,
    padding: 20,
    paddingHorizontal: 30,
    margin: 16,
  },
  left: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  down: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  up: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  right: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  stop: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  upRight: {
    marginLeft: 20,
    color: 'white',
    transform: [{ rotate: '45deg' }]
  },
  upLeft: {
    marginRight: 20,
    color: 'white',
    transform: [{ rotate: '315deg' }]
  },
  downRight: {
    marginLeft: 20,
    color: 'white',
    transform: [{ rotate: '315deg' }]
  },
  downLeft: {
    marginRight: 20,
    color: 'white',
    transform: [{ rotate: '45deg' }]
  },
});

App.navigationOptions = {
  header: null
}