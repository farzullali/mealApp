import { combineReducers } from "redux";

// Slices
import favoritesSlice from './features/favorite/favoriteSlice';
import basketSlice from "./features/basket/basketSlice";

export const rootReducer = combineReducers({
    favoriteMeals: favoritesSlice,
    basketMeals: basketSlice
});
