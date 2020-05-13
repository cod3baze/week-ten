import React from 'react'
import {
   View,
   Text,
   StyleSheet
} from 'react-native'
import { WebView } from 'react-native-webview'

function Profile({ navigation }) {
   const user = navigation.getParam('github_username')

   return (
      <WebView style={styles.container} source={{uri:`https://github.com/${user}`}} />
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   }
})


export default Profile
