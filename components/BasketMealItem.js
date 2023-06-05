// import { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeQuantity, addQuantity } from '../store/redux/root/features/basket/basketSlice';
// import { BasketContext } from '../store/context/basket-context';

import IconButton from './IconButton';

function BasketMealItem({ item, keyId }) {
    // const basketMealCtx = useContext(BasketContext);
    // const mealObjectInBasket = basketMealCtx.basket;
    const basketMeals = useSelector((state) => state.basketMeals.objects);
    const dispatch = useDispatch();

    const selectedMealInBasket = basketMeals.find((item) => item.id === keyId);
    // const itemMeal = basketMeals.find((meal) => meal.id === keyId);

    function removeQuantity() {
        //with keyId minus from basketMealCtx
        // const index = mealObjectInBasket.indexOf(selectedMealInBasket);
        // if (mealObjectInBasket[index].quantity > 1) {
        //     basketMealCtx.removeQuantity(index);
        // }
        const { id, title, quantity, price } = selectedMealInBasket;

        let changeMealQuantity = selectedMealInBasket;
        changeMealQuantity = {
            id,
            title,
            quantity: quantity - 1,
            price
        }
        dispatch(removeQuantity(changeMealQuantity.id));
    }

    function deleteBasketItem() {
        // basketMealCtx.deleteMealFromBasket(keyId);

    }


    function addQuantity() {
        // const index = mealObjectInBasket.indexOf(selectedMealInBasket);
        // basketMealCtx.addQuantity(index);
        // const index = basketMeals.findIndex((meal) => meal.id === selectedMealInBasket.id);
        dispatch(addQuantity(index));
    }

    return <View style={styles.container} >
        <Text style={{ width: '40%' }}>{item.title}</Text>
        <View style={styles.quantityContainer}>
            {item.quantity > 1 ?
                <IconButton icon={'remove-circle-outline'} onPress={removeQuantity} style={{ opacity: 0 }} /> :
                <IconButton icon={'remove-circle-outline'} onPress={removeQuantity} style={{ opacity: 0 }} color={'#ccc'} />}
            <Text>{item.quantity}</Text>
            <IconButton icon={'add-circle-outline'} onPress={addQuantity} />
            <Text style={styles.priceText}>{parseFloat(item.quantity) * parseFloat(item.price)} $</Text>
        </View>
        <IconButton icon={'trash'} onPress={deleteBasketItem} color={'red'} />
    </View>
}

export default BasketMealItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 8,
        padding: 10,
        backgroundColor: '#e2b497',
        borderRadius: 8

    },

    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    priceText: {
        marginLeft: 17,
        fontSize: 20
    }
})