import { View, Pressable, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

function BasketAddButton({ onPress }) {
    return (
        <View style={styles.root}>
            <Pressable style={(({ pressed }) => pressed && styles.pressed)} onPress={onPress}>
                <View style={styles.container}>
                    <Ionicons style={styles.icon} name='add' color='white' size={24} />
                    <Text style={styles.text}>Add to Basket</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default BasketAddButton;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        marginTop: 10,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontWeight: 'bold'
    },
    text: {
        color: 'white'
    },
    pressed: {
        opacity: 0.75
    }
})