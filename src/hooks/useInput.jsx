import {useState} from "react";

export function useInput(defaultValue,validateFn)
{
    const[enteredValues, SetEnteredValues]=useState(defaultValue);
    const[didEdit, setDidEdit]=useState(false);
    const valueIsValid=validateFn(enteredValues);
    function handleInputChange(event)
    {
        SetEnteredValues(event.target.value);
        setDidEdit(false);
    }
    function handleInputBlur() 
    {
    setDidEdit(true);
    }

    return {
    value: enteredValues,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid
    };
}