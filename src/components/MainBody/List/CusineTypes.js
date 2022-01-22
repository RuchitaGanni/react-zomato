

const CusineTypes = (props) => {
    let renderMeal = '';
    if (props.cusines) {
        renderMeal = props.cusines.map((i) => {
            return <span className="label label-info" id="cuisineLabel" key={i.cuisine_id} >{i.cuisine_name}</span>
        })


    }

    return (<>
        {renderMeal}
    </>)

}

export default CusineTypes;