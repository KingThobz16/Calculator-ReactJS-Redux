import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  display: '0',
  currentOperand: null,
  previousOperand: null,
  currentOperator: null
};


export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    getDisplay: (state) => {
      return state.display;
    },
    enterDigit: (state, action) => {
      if(state.display != '0'){
        [...state.display].concat(action.payload);     
      } else { 
        state.display = action.payload;
      }
      state.currentOperand = parseFloat(state.display);
    },
    enterDecimal: (state) => {
      if(state.display.includes('.') == false){
        [...state.display].concat('.');
      }
      state.currentOperand = state.display;
    },
    
    add: (state) => {
      if(state.currentOperand != null && state.previousOperand == null){
        state.previousOperand = state.currentOperand;
        state.currentOperand = 0;
        state.display = '0';
      } else if (state.previousOperand != null){
        state.display = (state.previousOperand + state.currentOperand).toString();
        state.currentOperand = state.previousOperand;
        state.display = parseFloat(state.display);
      } else { state.previousOperand = 0 }
      state.currentOperator = '+'; 
    },
    subtract: (state) => {
      if(state.currentOperand != null && state.previousOperand == null){
        state.previousOperand = state.currentOperand;
        state.currentOperand = 0;
        state.display = '0';
      } else if (state.previousOperand != null){
        state.display = (state.previousOperand - state.currentOperand).toString();
        state.currentOperand = state.previousOperand;
        state.display = parseFloat(state.display);
      } else { state.previousOperand = 0 }
      state.currentOperator = '-'; 
    },
    multiply: (state) => {
      if(state.currentOperand != null && state.previousOperand == null){
        state.previousOperand = state.currentOperand;
        state.currentOperand = 0;
        state.display = '0';
      } else if (state.previousOperand != null){
        state.display = (state.previousOperand * state.currentOperand).toString();
        state.currentOperand = state.previousOperand;
        state.display = parseFloat(state.display);
      } else { state.previousOperand = 0 }
      state.currentOperator = '*'; 
    },
    divide: (state) => {
      if(state.currentOperand != null && state.previousOperand == null){
        state.previousOperand = state.currentOperand;
        state.currentOperand = 0;
        state.display = '0';
      } else if (state.previousOperand != null){
        state.display = (state.previousOperand / state.currentOperand).toString();
        state.currentOperand = state.previousOperand;
        state.display = parseFloat(state.display);
      } else { state.previousOperand = 0 }
      state.currentOperator = '/'; 
    },
    equals: (state) => {
      if(state.currentOperand != null && state.previousOperand != null){
        switch(state.currentOperator){
          case '+': state.display = (state.previousOperand + state.currentOperand).toString();
            state.currentOperand = parseFloat(state.display);
            state.previousOperand = null;
            break;
          case '-': state.display = (state.previousOperand - state.currentOperand).toString();
            state.currentOperand = parseFloat(state.display);
            state.previousOperand = null;
            break;
          case '*': state.display = (state.previousOperand * state.currentOperand).toString();
            state.currentOperand = parseFloat(state.display);
            state.previousOperand = null;
            break;
          case '/': state.display = (state.previousOperand / state.currentOperand).toString();
            state.currentOperand = parseFloat(state.display);
            state.previousOperand = null;
            break;
          default: state.display = state.currentOperand.toString();
        }
      } else if (state.currentOperator != null && state.previousOperand == null){
        state.display = state.currentOperand.toString();
      } else { state.display = '0' }
      state.currentOperator = null;
    },
    clear: (state) => {
      state.display = '0';
      state.currentOperand = null;
      state.previousOperand = null;
      state.currentOperator = null;
    }
  }
});

export const { getDisplay, enterDigit, enterDecimal, add, subtract, multiply, divide, equals, clear } = calculatorSlice.actions;
export const selectDisplay = (state) => state.display;


export default calculatorSlice.reducer;