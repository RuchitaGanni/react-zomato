

const Mealtype = (props) => {
    let renderMeal = '';
    if (props.mealType) {
        renderMeal = props.mealType.map((i) => {
            return < span className="label label-primary" id="mealTypeLabel" key={i.mealtype_id} >{i.mealtype_name}</span>
        })


    }

    return (<>
        {renderMeal}
    </>)

}

export default Mealtype;