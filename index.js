import { AppRegistry } from 'react-native'
import Routes from './src/Routes'
import { name as appName } from './app.json'
import axios from 'axios'

axios.defaults.baseURL = 'https://flucy-3397e.firebaseio.com/'

AppRegistry.registerComponent(appName, () => Routes)
