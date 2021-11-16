import PropTypes from "prop-types";

export const ColorForm = (props)=> {

    // объявление переменных ддя рефов
    let _title ='';
    let _color ='';

    // отправка данных через вызов получаемой через пропс  sendColor
    const submit = (e) => {
        e.preventDefault();
        props.sendColor(_title.value, _color.value)
        _title.value = '';
        _color.value = '#000000';
        _title.focus();
    }

    return(

        <form  style={{width:'40%', display:'flex', flexDirection: 'column'}} onSubmit={
        submit}>
            <input ref={input=>_title=input} style={{marginBottom: '30px'}} type="text" placeholder="color title" required/>
            <input style={{marginBottom: '30px'}} ref={input=> _color=input} type="color" required/>
            <button>ADD</button>
        </form>
    )
}

// это нужно для отработки ошибок
//проптип для передаваемой функции
ColorForm.propTypes = {
    sendColor: PropTypes.func
}
// значение по умолчанию
ColorForm.defaultProps = {
    sendColor: f=>f
}