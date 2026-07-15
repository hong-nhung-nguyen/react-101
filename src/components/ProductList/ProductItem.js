function ProductItem(props) {
    const { item } = props;
    return (
        // IN React, FOR EVERY ELEMENTS INSIDE A NodeIterator, EACH SHOULD
        // HAVE A UNIQUE KEY: INDEX / ID / ...
        <>
            <div className="product__item">
                <img className="product__image" src={item.image} alt="" style={{width:"100px"}} />
                <div className="product__name">{item.name}</div>
                <div className="product__price">Price: {item.price}</div>
            </div>
        </>
    )
};

export default ProductItem;