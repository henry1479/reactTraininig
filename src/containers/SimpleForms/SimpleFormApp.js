import react from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAddUserAction, createRemoveUserAction } from './redux/user';
import { SimpleForm } from './SimpleForm';
import { SimpleFormField } from './simpleFormField';

// создание фейкового пользователя
const createUser = () => ({
    id: Date.now(),
    name: `user_${Date.now()}`
})

// компонент-оболочка для SimpleForm
export const SimpleFormApp = () => {
    // получение стейта пользователей
    const users  = useSelector(state => state.userReducer.list);
    const dispatch = useDispatch();
    // диспатч экшн-креэйтора вызвовом функции фейкового пользователя
    const addUser = () => dispatch(createAddUserAction(createUser()));
    // диспатч экшен-креэйтора удаления пользователя с параметром id
    const removeUser = (id) => dispatch(createRemoveUserAction(id))

    // передаем в компонент SimpleForm функцию render вместе с props, которые они получат из своего state, который определен кастомным хуком
    return (
        
        <div className="SimpleFormApp">
            {/* props.render */}
            <SimpleForm
                render = {(props)=>{
                    return(
                        <>
                            <SimpleFormField
                                name='username'
                                type='text'
                                placeholder="username"
                                render={(props)=> <input {...props}/>}
                            />
                            <SimpleFormField
                                name='email'
                                type='email'
                                placeholder="enter email"
                                render={(props)=> <input {...props}/>}
                            />
                            <button 
                                type="button" 
                                onClick={props.resetForm}>
                                Reset
                            </button>
                        </>
                    )
                }}
            />
            <br/>
            {/* props.children */}
            <SimpleForm>
                {
                    
                    (props)=>{
                        // console.log(props);
                        return(
                        <div>
                             <input 
                                type="text"
                                name='foo1'
                                value={props.getFieldValue('foo1')}
                                onChange={(event)=>{props.setFieldValue('foo1', event.target.value)}}
                            />
                            <button 
                                type="button" 
                                onClick={props.resetForm}>
                                Reset
                            </button>
                        </div>
                    )}

                }
            </SimpleForm>
            <SimpleForm render = {props=>(
                <>
                <button onClick={addUser}>Add user</button>
                {users.map((user,index)=>(
                    <div key={index}>
                        <p>{user.name}</p>
                        <button onClick={()=>{removeUser(user.id)}}>Remove User</button>
                    </div>
                ))}
                </>
            )}
            />
        </div>
    )
}