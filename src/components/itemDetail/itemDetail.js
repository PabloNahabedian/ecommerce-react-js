const itemDetail = (props) => {
    const {title, price, description, stock} = props.item;
    return (
        <div className="flex bg-danger">
            <h3>Item Detail</h3>
            <h3>{tittle}</h3>
            <h2>{price}</h2>
            <p>{description}</p>
            <p>{stock}</p>
        </div>
    );
};

export default itemDetail;