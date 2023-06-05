import { useContext } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux'

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen'
import FavoritesScreen from './screens/FavoritesScreen';
import FavoritesContextProvider from './store/context/favorites-context';
import BasketScreen from './screens/BasketScreen';
import BasketContextProvider from './store/context/basket-context';
import { BasketContext } from './store/context/basket-context';
import { store } from './store/redux/root/store'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const basketMealCtx = useContext(BasketContext);

  const titleOfBasket = `Basket       -      ${basketMealCtx.basket.length}`

  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#351401' },
    headerTintColor: 'white',
    sceneContainerStyle: { backgroundColor: '#3f2f25' },
    drawerContentStyle: { backgroundColor: '#351401' },
    drawerInactiveTintColor: 'white',
    drawerActiveBackgroundColor: '#e4baa1',
    drawerActiveTintColor: '#351401'
  }}>
    <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
      title: 'All Categories',
      drawerIcon: ({ color, size }) => (<Ionicons name='list' color={color} size={size} />)
    }} />
    <Drawer.Screen name="Favorites" component={FavoritesScreen}
      options={{
        drawerIcon: ({ color, size }) => (<Ionicons name='star' color={color} size={size} />)
      }} />
    <Drawer.Screen name='Basket' component={BasketScreen} options={{
      title: titleOfBasket,
      drawerIcon: ({ color, size }) => (<Ionicons name='basket' color={color} size={size} />),

    }} />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='dark' />

      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <BasketContextProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName='MealsCategories'
              screenOptions={{
                headerStyle: { backgroundColor: '#351401' },
                headerTintColor: 'white',
                contentStyle: { backgroundColor: '#3f2f25' }
              }}>

              <Stack.Screen name='Drawer' component={DrawerNavigator}
                options={{
                  title: 'All Categories',
                  headerShown: false,

                }}
              />
              <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}
              // first way to pass option data dynamically

              // options={({route, navigation}) => {
              //   const catId = route.params.categoryId;
              //   return {title: catId}
              // }} 
              />
              <Stack.Screen name='MealDetail' component={MealDetailScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </BasketContextProvider>
      {/* </FavoritesContextProvider> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
