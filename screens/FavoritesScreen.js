import { useContext } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from "react-redux";

import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
// import { FavoritesContext } from "../store/context/favorites-context";


function FavoritesScreen() {
    //context Api
    // const favoriteMealsCtx = useContext(FavoritesContext)
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

    // const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id));

    const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));

    if (favoriteMeals.length === 0) {
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You have not favorite meals yet</Text>
        </View>
    }

    return <MealsList items={favoriteMeals} />
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        color: 'white'
    }
})