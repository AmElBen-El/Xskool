import { SafeAreaView, StyleSheet, Text, ScrollView, TouchableOpacity, Image, View, Platform, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faBook, faDownload, faBookOpen, faFilm,
    faPeopleGroup, faComment, faFunnelDollar,
    faBarsProgress, faContactCard
} from '@fortawesome/free-solid-svg-icons';
import { Theme } from '../Components/Theme';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile } from './Profile';
import Carousel from 'react-native-reanimated-carousel';
import { useContext } from 'react';
import { AppContext } from '../../global/globalVariables';


export function Courses({navigation}) {
    const { userUId, setUserUID, setCourses, courses, setUserInfo, userInfo, setPreloader } = useContext(AppContext)

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Text style={{ fontFamily: Theme.fonts.text600, fontSize: 20, paddingTop: 15, margin: 15 }}>AVAILABLE COURSES</Text>
                    <Text style={styles.welcomeText}>Learn, Grow, Explore!</Text>
                </View>

                <View style={styles.gridContainer}>
                    {courses.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.gridItem}
                            onPress={()=>{
                                navigation.navigate("CourseDetails", {item: item})
                            }}
                            activeOpacity={0.8}                    
                        >
                            <View style={styles.gridItemContent}>
                                {/* <FontAwesomeIcon icon={item.icon} size={30} color='#4A90E2'/> */}
                                <Image
                                    source={{uri: item.image}}
                                    style={{width: "100%", height: 120, borderRadius: 10}}                                
                                />
                                <Text style={styles.gridItemText}>{item.title}</Text>
                                <Text style={{color:"gray", fontFamily: Theme.fonts.text600}}>{item.code}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 20,
    },
    headerContainer: {
        flexDirection: "row",
        gap: 5,
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    welcomeText: {
        fontSize: 30,
        color: Theme.colors.gray,
        fontFamily: Theme.fonts.text600,
        margin: 15,
        paddingTop: -70,
    },
    gridContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f4f4f4',
    },
    gridItem: {
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 8,
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    gridItemContent: {
        flex: 1,
        // flexDirection: 'row',
        // alignItems: 'center',
        padding: 10,
        color: '#4A90E2',
        gap:10
    },
    gridItemText: {
        fontSize: 16,       
        fontFamily: Theme.fonts.text600,       
    },
});