import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, ScrollView, TouchableOpacity, Image, View } from 'react-native';
import Homescreen from './Framework/Screens/Homescreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFilePdf, faBarsProgress, faBook, faDownload, faBookOpen, faFilm, faPeopleGroup, faComment, faFunnelDollar, faFeed,  } from '@fortawesome/free-solid-svg-icons';
import { Fascinate_400Regular } from '@expo-google-fonts/fascinate';
import { faFreeCodeCamp, faSuperpowers } from '@fortawesome/free-brands-svg-icons';
import { faContactBook } from '@fortawesome/free-regular-svg-icons/faContactBook';
import { faContactCard } from '@fortawesome/free-regular-svg-icons/faContactCard';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require("./assets/Xskool-v-gold.png")} style={{height:225, width:225, alignSelf:"center", backgroundColor:"#fffffff2", borderRadius:45, marginTop:20}}/>
        <Text style={styles.content}>Welcome Home to XSkool, where you learn something Extra to what you know before now to have an edge in the modern world.</Text>
        <Text style={{alignSelf:"center", fontFamily:Fascinate_400Regular, fontWeight:"900", color:"white",marginTop:10,fontStyle:'italic', fontSize: 27}}>Explore</Text>
        {/* <Homescreen/> */}
        {/* <StatusBar style="auto" /> */}
      </View>
      <View style={styles.gridContainer } contentContainerStyle={{justifyContent: 'space-between'}} >
      <TouchableOpacity style={styles.gridItem} >
          <FontAwesomeIcon icon={faBook} size= {25} color="white" style={{alignSelf:"center"}}/>
          <Text style={styles.ftitle}>Courses</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={styles.gridItem} >
          <FontAwesomeIcon icon={faDownload} size= {25} color="white" style={{alignSelf:"center"}}/>
          <Text style={styles.ftitle}>Downloads</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={styles.gridItem} >
          <FontAwesomeIcon icon={faBookOpen} size= {25} color="white" style={{alignSelf:"center"}}/>
          <Text style={styles.ftitle}>Lectures</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={styles.gridItem} >
          <FontAwesomeIcon icon={faFilm} size= {25} color="white" style={{alignSelf:"center"}}/>
          <Text style={styles.ftitle}>Videos</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={styles.gridItem} >
          <FontAwesomeIcon icon={faPeopleGroup} size= {25} color="white" style={{alignSelf:"center"}}/>
          <Text style={styles.ftitle}>Communities</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={styles.gridItem} >
          <FontAwesomeIcon icon={faBarsProgress} size= {25} color="white" style={{alignSelf:"center"}}/>
          <Text style={styles.ftitle}>Progress</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={styles.gridItem} >
          <FontAwesomeIcon icon={faComment} size= {25} color="white" style={{alignSelf:"center"}}/>
          <Text style={styles.ftitle}>Testimonials</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={styles.gridItem} >
          <FontAwesomeIcon icon={faFunnelDollar} size= {25} color="white" style={{alignSelf:"center"}}/>
          <Text style={styles.ftitle}>Sponsorship</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={styles.gridItem} >
          <FontAwesomeIcon icon={faContactCard} size= {25} color="white" style={{alignSelf:"center"}}/>
          <Text style={styles.ftitle}>Support</Text>
      </TouchableOpacity> 
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#080062ea',
      },
      ftitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
         fontFamily:Fascinate_400Regular,
         alignSelf:"center"
      },
      subtitle: {
        fontSize: 18,
        color: '#665',
        marginBottom: 20,
        textAlign: 'center',
      },
      content: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'justify',
        marginTop: 15,
        },
      gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 15,
        gap: 3,
        borderRadius:18,
        backgroundColor:"#080062cc",
      },
      gridItem: {
        width: '30%',
        borderColor: 'gold',
        padding: 6,
        borderRadius: 18,
        borderWidth: 1,
        alignItems: 'center',
      },
    });
  
//design home screen and about page
