import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';

export default function HomeHeader() {
    const [loaded] = useFonts({
        MadimiOne: require('../assets/fonts/MadimiOne.ttf'),
        HelveticaBold: require('../assets/fonts/HelveticaBold.ttf')
    });

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.name}>Whatsapp</Text>

                <View style={styles.imgContainer}>
                    <Image style={styles.image} source={require('../assets/camera.png')} />
                    <Image style={styles.image} source={require('../assets/search.png')} />
                    <Image style={styles.image} source={require('../assets/dots-3.png')} />
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
        display: 'flex',
        padding: 15,
        paddingTop: 50,
        gap: 2
    },
    topContainer: {
        flexDirection: 'row',
        gap: 120,
    },
    imgContainer: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        gap: 6
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 11
    },
    name: {
        // backgroundColor: 'red',
        color: 'white',
        fontSize: 23,
        fontFamily: "HelveticaBold",
    },

});