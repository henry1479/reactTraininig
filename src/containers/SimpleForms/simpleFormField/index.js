import react, { useContext } from 'react';
import { SimpleFormContext } from '../context';


// компонент получает значение объекта формы по ключам и передает вниз объект в виде функции
// props.render
export const SimpleFormField = props => {
    // методы из кастомного хука, полученные из контекста
    const { setFieldValue, getFieldValue} = useContext(SimpleFormContext)
    console.log('props', props)
    return (
       <>
            {/* передаем методы и props в simpleFormApp с готовыми данными */}
           {
                typeof props.render === 'function' && props.render({
                    value: getFieldValue(props.name),
                    onChange: (event) => {
                        setFieldValue(props.name, event.target.value)
                    },
                    ...props
                })   
           }
       </>
    )
}