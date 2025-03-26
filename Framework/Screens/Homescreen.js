import { useCallback, useEffect, useState } from 'react';
import { Text, SafeAreaView, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Montserrat_400Regular,Montserrat_500Medium, } from '@expo-google-fonts/montserrat';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';


export function Homescreen() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
      
        await Font.loadAsync(Entypo.font);
       
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      
      SplashScreen.hide();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView       style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onLayout={onLayoutRootView}>

    <View contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to XSkool</Text>
      <Text style={styles.subtitle}>Your progress, courses, and more — all in one place.</Text>
      <TouchableOpacity style={{flex: 1, borderColor: "#ebb382", padding:10, borderRadius: 50, marginTop: 10, borderWidth:1}} >
          <FontAwesomeIcon icon={faGoogle} size= {25} color="#ebb382" style={{alignSelf:"center"}} />
      </TouchableOpacity>
               
      
      <Button title="View Courses" onPress={() => navigation.navigate('Courses')} />
      <Button title="Track Progress" onPress={() => navigation.navigate('Progress')} />
      <Button title="About Us" onPress={() => navigation.navigate('AboutUs')} />
    </View>
      <Entypo name="rocket" size={30} />
     </SafeAreaView>
  );
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 18,
      color: '#665',
      marginBottom: 20,
      textAlign: 'center',
    },
    content: {
      fontSize: 16,
      color: '#444',
      textAlign: 'center',
      marginTop: 10,
    },
  });
 



