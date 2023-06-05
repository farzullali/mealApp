import {View, FlatList, StyleSheet} from 'react-native';

import MealItem from './MealItem';

function MealsList({items}) {
    function renderMealItems(itemData) {
        const item = itemData.item;


        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            complexity: item.complexity,
            duration: item.duration,
            affordability: item.affordability,
            id: item.id
        }
        return <MealItem {...mealItemProps} />
    }

    return (
        <View style={styles.container}>

            <FlatList
                data={items}
                renderItem={renderMealItems}
            />
        </View>
    )
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});