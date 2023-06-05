import { Image, Pressable, StyleSheet, Text, View, Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import MealDetails from '../MealDetails';

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();

    function selectMealItemHandler() {

        navigation.navigate('MealDetail', {
            mealId: id
        })
    }

    return (
        <View style={styles.outerContainer}>
            <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => pressed ? styles.pressed : null} onPress={selectMealItemHandler}>
                <View>
                    <View>
                        {/* <View style={styles.imageContainer}> */}
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        {/* </View> */}
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails complexity={complexity} affordability={affordability} duration={duration} />
                </View>
            </Pressable>
        </View>)
}

export default MealItem;

const styles = StyleSheet.create({
    outerContainer: {
        margin: 16,
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    imageContainer: {
        // overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 8,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 8,
    },
    pressed: {
        opacity: 0.5
    }
})