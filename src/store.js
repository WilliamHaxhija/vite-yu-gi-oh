import { reactive } from "vue";

export const store = reactive({
    cardsList: [],
    isLoading: true,
    cardsArchetype:[],
    searchedArchetype: ''
});