import React from "react";
import './ProductCard.css'
const ProductCard = ({product}) => {
	return (
		<div className="product-card">
			<div className="product-card-imgConainer"><img className="product-card-img" src={product.img}/></div>
			<div className="product-card-infoContainer">
				<div className="product-card-info-container">
					<p className="product-card-info">{product.name}</p>
					<p>{product.type}</p>
				</div>
				<div className="product-card-price">
					<p>{product.price}</p>
				</div>
			</div>
		</div>
	)
}

export default ProductCard;