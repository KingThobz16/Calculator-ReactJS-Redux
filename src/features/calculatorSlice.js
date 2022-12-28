import { createSlice } from "@reduxjs/toolkit";


const initialState =  {
    currentValue: '',
    previousValue: '',
    results: '',
    operator: null,
}

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        setCurrentValue: (state, { payload }) => {
            state.results = 0;
            state.currentValue = state.currentValue + `${payload}`;
        },
        setOperator: (state, { payload }) => {
            if (!state.currentValue) {
                return
            }
            state.operator = payload;
            state.previousValue = state.currentValue;
            state.currentValue = "";
        },
        deleteValue: (state) => {
            state.currentValue = state.currentValue.slice(0, - 1);
        },
        addDecimal: (state) => {
            if (state.currentValue !== "" && !state.currentValue.includes('.')) {
                state.currentValue = `${state.currentValue}.`;
            }
        },
        percentageOperator: (state, {payload}) => {
            state.operator = payload;
            state.currentValue = state.currentValue;
            state.previousValue = state.currentValue;
            state.currentValue = "";
        },
        calculateResults: (state) => {
            switch(state.operator) {

                case '/':
                    state.results = Number(state.previousValue) / Number(state.currentValue)
                    state.currentValue = '';
                    state.previousValue = '';
                  break;

                case '*':
                    state.results = Number(state.previousValue) * Number(state.currentValue)
                    state.currentValue = '';
                    state.previousValue = '';
                  break;

                case '+':
                    state.results = Number(state.previousValue) + Number(state.currentValue)
                    state.currentValue = '';
                    state.previousValue = '';
                  break;

                case '-':
                    state.results = Number(state.previousValue) - Number(state.currentValue)
                    state.currentValue = '';
                    state.previousValue = '';
                  break;

                case '%':
                    state.results = Number(state.previousValue) * Number(state.currentValue) / 100;
                    state.currentValue = '';
                    state.previousValue = '';
                  break;

                default:
                  state.results = "Error"
                }
            },
            resetAll: (state) => {
                state.operator = null;
                state.previousValue = '';
                state.currentValue = '';
                state.results = '';
            },
    }

})

const { actions, reducer } = calculatorSlice;

export const { setOperator, setCurrentValue, calculateResults, resetAll, deleteValue, addDecimal, percentageOperator } = actions;

export default reducer;