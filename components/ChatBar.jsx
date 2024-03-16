import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';

export default function ChatBar() {
    const [loaded] = useFonts({
        MadimiOne : require('../assets/fonts/MadimiOne.ttf'),
        HelveticaBold : require('../assets/fonts/HelveticaBold.ttf')
    });

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/profile.png')} />
            <View>
                <Text style={styles.name}>Chat Name</Text>
                <Text style={styles.desc}>chat description</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'aliceblue',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        fontFamily: "HelveticaBold",
        padding: 8
    },
    image: {
        width: 55,
        height: 55,
        marginRight: 11,
    },
    name: {
        color: 'blue',
        fontSize: 17,
        fontFamily: "HelveticaBold",
    }

});