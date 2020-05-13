import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from './pages/Home'
import Profile from './pages/Profile'

const Routes = createAppContainer(
   createStackNavigator({
      Main: {
         screen: Home,
         navigationOptions: {
            title: 'DevRadar',
         },
      },
      Perfil: {
         screen: Profile,
         navigationOptions: {
            title: 'Perfil no Github',
         },
      },
   }, {
      defaultNavigationOptions: {
         headerBackTitleVisible: false,
         headerStyle: {
            backgroundColor: '#7D40E7',
         },
         headerTintColor: '#FFF'
      }
   })
)


export default Routes