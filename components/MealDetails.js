import { View, StyleSheet, Text } from 'react-native';

function MealDetails({ duration, complexity, affordability, style, textStyle }) {
    return <View style={[styles.infoContainer, style]}>
        <Text style={[styles.info, textStyle]}>{duration} m.</Text>
        <Text style={[styles.info, textStyle]}>{complexity.toUpperCase()}</Text>
        <Text style={[styles.info, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
}

export default MealDetails;

const styles = StyleSheet.create({
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 8
    },
    info: {
        marginHorizontal: 8
    },
})