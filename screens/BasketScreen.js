import { useContext, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import BasketMealItem from '../components/BasketMealItem';
import { useDispatch, useSelector } from 'react-redux';

import IconButton from '../components/IconButton';
import { MEALS } from '../data/dummy-data';
import { BasketContext } from '../store/context/basket-context';


function BasketScreen() {
    // const basketMealCtx = useContext(BasketContext);
    // const mealObjectInBasket = basketMealCtx.basket;
    const basketMeals = useSelector((state) => state.basketMeals.objects);

    function totalSummaryInBasket() {
        // return basketMealCtx.basket.reduce((prev, current) => prev + (current.price * current.quantity), 0);
    }

    function renderListOfBasketMeals(itemData) {
        const item = itemData.item;
        return <BasketMealItem item={item} keyId={item.id}/>
    }



    return <View style={styles.root}>
        <View style={styles.screenHeader}>
            <Text style={styles.textHeader}>Meal Name</Text>
            <Text style={styles.textHeader}>Quantity</Text>
            <Text style={styles.textHeader}>Price</Text>
        </View>


        <FlatList data={basketMeals} renderItem={renderListOfBasketMeals} />

        <View style={styles.totalContainer}>
            <Text style={styles.textTotal}>Total: <Text style={{color: 'red'}}>{totalSummaryInBasket()} </Text>$</Text>
        </View>
    </View>
}

export default BasketScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    screenHeader: {
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#351401',
    },
    textHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#e2b497'
    },
    totalContainer: {
        flexDirection: 'column-reverse',
        flex: 0.1,
        padding: 20,
        backgroundColor: '#e2b497',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTotal: {
        color: '#351401',
        fontSize: 10,
        fontWeight: 'bold',
        fontSize: 24
    },
    
})