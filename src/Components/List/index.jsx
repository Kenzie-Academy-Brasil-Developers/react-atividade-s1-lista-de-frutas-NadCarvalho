const FruitList = ({items}) => {
return(
    <ul className="list-group">
    {
        items.map(item => {
            return (
                <li className="list-group-item">{item.name}</li>
            )
        })
    }
    </ul>
        
)
}

export default FruitList;