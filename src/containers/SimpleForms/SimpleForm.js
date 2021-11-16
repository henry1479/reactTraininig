import react from 'react';
import { useSimpleForm } from '../../hooks/useSimpleForm';
import { SimpleFormContext } from './context';

// компонент поля ввода формы
export const SimpleForm = props => {
    // иницииализируем хук useSimpleForm
    const state = useSimpleForm();
    
    // отрисовываем функции путем вызова props.children и props.render с проверекой их наличия и типа
    return (
        <div>
            <header>
                <h1>
                    Simple Form
                </h1>
            </header>
            {/* оборачиваем render в Context.Provider для того чтобы забрать стейт */}
            <SimpleFormContext.Provider value={state}>
                {props.render && typeof props.render === 'function' && props.render(state)}
                {props.children && typeof props.children === 'function' && props.children(state)}
            </SimpleFormContext.Provider>
        </div>
    )
}