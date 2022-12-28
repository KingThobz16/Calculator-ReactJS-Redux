import React from 'react'
import './Calculator.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setOperator, setCurrentValue, calculateResults, resetAll, deleteValue, addDecimal, percentageOperator } from '../../features/calculatorSlice';

const Calculator = () => {
  const dispatch = useDispatch();
  const currentValue = useSelector((state) => state.currentValue);
  // const previousValue = useSelector((state) => state.previousValue);
  const results = useSelector((state) => state.results)

  return (
    <div className='calculator'>
        <div className="calculator__display">
            <h1 className="calculator__display__text">{ results ? results : currentValue ? currentValue : '0'}</h1>
        </div>
        <div className="calculator__buttons">
            <button onClick={() => dispatch(resetAll())} className="clear operator" id="clear-btn">C</button>
            <button onClick={() => dispatch(setOperator('()'))} className="operator" value="()">()</button>
            <button onClick={() => dispatch(percentageOperator('%'))} className="operator" value="%">%</button>
            <button onClick={() => dispatch(setOperator('/'))} className="operator" value="/">÷</button>
            <button onClick={() => dispatch(setCurrentValue(7))} value="7">7</button>
            <button onClick={() => dispatch(setCurrentValue(8))} value="8">8</button>
            <button onClick={() => dispatch(setCurrentValue(9))} value="9">9</button> 
            <button onClick={() => dispatch(setOperator('*'))} className="operator" value="*">×</button>
            <button onClick={() => dispatch(setCurrentValue(4))} value="4">4</button>
            <button onClick={() => dispatch(setCurrentValue(5))} value="5">5</button>
            <button onClick={() => dispatch(setCurrentValue(6))} value="6">6</button>
            <button onClick={() => dispatch(setOperator('-'))} className="operator" value="-">-</button>
            <button onClick={() => dispatch(setCurrentValue(1))} value="1">1</button>
            <button onClick={() => dispatch(setCurrentValue(2))} value="2">2</button>
            <button onClick={() => dispatch(setCurrentValue(3))} value="3">3</button>
            <button onClick={() => dispatch(setOperator('+'))} className="operator" value="+">+</button>
            <button onClick={() => dispatch(deleteValue())} className="backspace operator" value="del">del</button>
            <button onClick={() => dispatch(setCurrentValue(0))} value="0">0</button>
            <button onClick={() => dispatch(addDecimal())} className="decimal" value=".">.</button>
            <button onClick={() => dispatch(calculateResults())} className="equal-sign operator" value="=">=</button>
        </div>
    </div>
  )
}

export default Calculator