export const CarDetail = props =>{
    return(
        <div style={{textAlign: 'center'}}>
            {/* получаем имя магшины из строки адреса */}
            <h2>{props.match.params.name}</h2>
        </div>
    )
}