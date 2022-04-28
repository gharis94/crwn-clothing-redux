import {createSelector} from 'reselect';

const selectCategoriesReducer = (state)=> {
    return state.category
};

export const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice)=>{
        return categoriesSlice.categories}
);

export const categoriesSelector =createSelector(
    [selectCategories],
    (categories)=>categories.reduce((acc,category)=>{
        const {title,items}=category;
        acc[title.toLowerCase()]= items;
        return acc;
    },{})
);

export const isLoadingSelector = createSelector(
    [selectCategoriesReducer],
    (categoriesSice)=>categoriesSice.isLoading
)

/*export const categoriesSelector =(state)=>state.category.categories.reduce((acc,category)=>{
    const {title,items}=category;
    acc[title.toLowerCase()]=items;
    return acc;
},{})*/