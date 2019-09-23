import Home from './screens/Home/App'
import Contact from './screens/Contact/Contact'
import Learning from './screens/Learning/Learning'
import Page1 from './screens/Info/Page1'
import Page2 from './screens/Info/Page2'
import Page3 from './screens/Info/Page3'
import Page4 from './screens/Info/Page4'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

export default Routes = createAppContainer(
  createStackNavigator({
    Home,
    Contact,
    Page1,
    Page2,
    Page3,
    Page4,
    Learning,
  })
);