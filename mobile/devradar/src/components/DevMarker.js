import React from 'react'
import { withNavigation } from 'react-navigation'
import { View, StyleSheet } from 'react-native'
import { Marker, Callout } from 'react-native-maps'

function DevMarker({ navigation }) {

   return (
      <>
         <Marker 
               key={dev._id}
               coordinate={{  
                  longitude: dev.location.coordinates[0], 
                  latitude: dev.location.coordinates[1],
               }} 
            >

            <Image 
               style={styles.avatar} 
               source={{uri: dev.avatar_url }} 
            />

            <Callout onPress={() => { 
               navigation.navigate('Perfil', {
                  github_username: dev.github_username
               })}
               }>

               <View style={styles.callout}>
                  <Text style={styles.devName}> { dev.name } </Text>                  
                  <Text style={styles.devBio}>{ dev.bio }</Text>                  
                  <Text style={styles.devTechs}>{ dev.techs.join(',  ') }</Text>                  
               </View>
            </Callout>
         </Marker>
      </>
   )
}

const styles = StyleSheet.create({
   avatar: {
      width: 50,
      height: 50,
      borderRadius: 4,
      borderColor: '#FFF',
   },

   callout: {
      width: 260,
      padding: 5,
   },

   devName: {
      fontWeight: 'bold',
      fontSize: 16,
   },

   devBio: {
      color: '#666',
      marginTop: 5,
   },

   devTechs: {
      marginTop: 5,
   },
})


export default withNavigation(DevMarker)