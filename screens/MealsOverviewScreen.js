import { useLayoutEffect } from 'react';
import { useRoute } from '@react-navigation/native';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';

function MealsOverviewScreen({ navigation }) {
    //same way with checkpoint 1
    const routeData = useRoute();
    const catId = routeData.params.categoryId;
    //checkpoint 1
    // const catId = route.params.categoryId;

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle,
        });

    }), [catId, navigation]

    const mealItemData = MEALS.filter((item) => {
        return item.categoryIds.indexOf(catId) >= 0;
    })


    return <MealsList items={mealItemData}/>
}

export default MealsOverviewScreen;

