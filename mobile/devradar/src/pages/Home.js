import React, { useEffect, useState } from 'react'
import {
   View,
   Text,
   TextInput,
   TouchableOpacity,
   Image,
   StyleSheet
} from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import { MaterialIcons } from '@expo/vector-icons'

import api from '../services/api'

function Home({ navigation }) {
   const [tech, setTech] = useState('')
   const [devs, setDevs] = useState([])
   const [currentRegion, setCurrentRegion] = useState(null)

   useEffect(() => {
      async function loadInitialPosition() {
         const { granted } = await requestPermissionsAsync()

         if(granted) {
            const { coords } = await getCurrentPositionAsync({
               enableHighAccuracy: true,
            })

            const { latitude , longitude } = coords

            setCurrentRegion({
               latitude,
               longitude,
               latitudeDelta: 0.08,
               longitudeDelta: 0.08,
            })
         }
      }

      loadInitialPosition()
   }, [])

   async function loadDevs() {
      const { latitude, longitude } = currentRegion
      const techs = tech


      const res = await api.get('/search', {
         params: {
            latitude,
            longitude,
            techs,
         }
      })

      setDevs(res.data)
   }

   function handleRegionChange(region){
      setCurrentRegion(region)
   }

   if(!currentRegion) {
      return null
   }

   return (
      <>
         <MapView 
               onRegionChangeComplete={handleRegionChange}
               loadingBackgroundColor="#555" 
               loadingIndicatorColor="#fff"
               initialRegion={currentRegion} 
               style={styles.container}
            >
            {devs.map(dev => (
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
               ))
            }
         </MapView>

         <View style={styles.searchForm}>
            <TextInput
               value={tech}
               onChangeText={setTech}
               style={styles.searchInput}
               placeholder="Buscar devs por techs"
               placeholderTextColor="#999"
               autoCapitalize="words"
               autoCorrect={false}
            />

            <TouchableOpacity onPress={() => {
               loadDevs(tech)
            }} style={styles.loadButton}>
               <MaterialIcons name="my-location" size={20} color="#fff" />
            </TouchableOpacity>
         </View>
      </>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },

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

   searchForm: {
      position: 'absolute',
      top: 40,
      left: 5,
      zIndex: 5,
      flexDirection: 'row',
      padding: 10,
   },

   searchInput: {
      flex: 1,
      height: 45,
      backgroundColor: '#FFF',
      color: '#333',
      borderRadius: 25,
      paddingHorizontal: 20,
      fontSize: 16,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: {
         width: 7,
         height: 7,
      },
      elevation: 2,
   },

   loadButton:{
      width: 50,
      height: 45,
      backgroundColor: '#8E4DFF',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 5,
   },

})


export default Home
