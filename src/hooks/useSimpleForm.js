import { useState, useCallback } from 'react';


// кастомный  хук, предоставляет объект со свойствами и методами формы
export const useSimpleForm = () => {

 

    const [values, setValues] = useState({});
    // метод очистки формы
    const resetForm = () => {
        setValues({})
    }
    //метод устанавливает значение в поле ввода
    const setFieldValue = useCallback(
        (name, value) => {
            setValues({
                ...values,
                [name]:value,
            })
        },
        [values]
    );
    // метод получает значение поля ввода
    const getFieldValue = useCallback(
        (name) => 
        values[name] || '',
        [values]
    );



    // возвращаем объект со свойствами и методами
    return {
        values,
        setFieldValue,
        getFieldValue,
        resetForm
    }
}