import { useContext, useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import IconButton from '../components/IconButton';
import { useDispatch, useSelector } from 'react-redux';


import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import BasketAddButton from '../components/BasketAddButton';
import { MEALS } from '../data/dummy-data';
// import { FavoritesContext } from '../store/context/favorites-context';
import { BasketContext } from '../store/context/basket-context';
import { addFavorite, removeFavorite } from '../store/redux/root/features/favorite/favoriteSlice'
import { addBasket, addQuantity } from '../store/redux/root/features/basket/basketSlice';

function MealDetailScreen({ route, navigation }) {
    // const favoriteMealsCtx = useContext(FavoritesContext);
    const basketMealCtx = useContext(BasketContext);

    //redux state
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    //dispatch functions of state. on the import(lane: 13) addFavorite - removeFavorite
    const dispatch = useDispatch();

    const basketMeals = useSelector((state) => state.basketMeals.objects);



    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    //context Api
    // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
    //redux
    const mealIsFavorite = favoriteMealIds.includes(mealId);

    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) {
            //context api
            // favoriteMealsCtx.removeFavorite(mealId);

            // dispatch(someAction(payload))
            dispatch(removeFavorite({ id: mealId }));

        } else {
            // context api
            // favoriteMealsCtx.addFavorite(mealId);

            //dispatch(someAction(payload))
            dispatch(addFavorite({ id: mealId }));
        }
    }


    function addBasketMealHandler() {
        const { id, title, quantity, price } = selectedMeal;
        // // console.log('addbasketMealHandler', mealId);
        // // console.log('selectedMeal: ', selectedMeal);
        const mealObjectInBasket = {
            id,
            title,
            quantity: quantity + 1,
            price
        }
        // basketMealCtx.addBasket(mealObjectIrnBasket);

        const doesExistMealInBasket = basketMeals.find((meal) => meal.id === mealObjectInBasket.id)

        if (doesExistMealInBasket) {
            const index = basketMeals.findIndex((meal) => meal.id === doesExistMealInBasket.id);
            dispatch(addQuantity(index));
        } else {
            dispatch(addBasket(mealObjectInBasket));
        }
    }

    useLayoutEffect(() => {

        //kncok, knock... 
        //What is the perfect time to wake up?

        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={mealIsFavorite ? 'star' : 'star-outline'}
                    color={'white'}
                    onPress={changeFavoriteStatusHandler} />
            }
        })
    }, [navigation, changeFavoriteStatusHandler]);



    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />

            <BasketAddButton onPress={addBasketMealHandler} />

            <Text style={styles.title}>{selectedMeal.title}</Text>

            <MealDetails textStyle={styles.white} complexity={selectedMeal.complexity} duration={selectedMeal.duration} affordability={selectedMeal.affordability} />

            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredient</Subtitle>
                    <List data={selectedMeal.ingredients} />

                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />

                </View>
            </View>


        </ScrollView>
    )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    white: {
        color: 'white'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }
})