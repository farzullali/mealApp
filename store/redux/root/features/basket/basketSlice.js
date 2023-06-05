import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        objects: [],
    },
    reducers: {
        addBasket: (state, action) => {
            state.objects.push(action.payload);
        },
        addQuantity: (state, action) =>{
            state.objects[action.payload].quantity += 1;
        },
        removeQuantity: (state, action) => {
            state.objects[action.payload].quantity -= 1;
        }
    }
});


export const { addBasket, addQuantity, removeQuantity } = basketSlice.actions;
// export const addFavorite = favoriteSlice.actions.addFavorite;
// export const removeFavorite = favoriteSlice.actions.removeFavorite;
// reducer ?????
export default basketSlice.reducer;