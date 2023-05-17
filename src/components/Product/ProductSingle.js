import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fragment, useState } from "react";

const ProductSingle = () => {
  let params = useParams();
  const id = params.id;

  const product = useSelector(
    (state) =>
      state.products.filter((products) => products.id === parseInt(id))[0]
  );

 

    const minusValue = Math.round((product.discountPercentage / 100) * product.price);
    const newValue = product.price - minusValue;
    
 

  const pic = product.thumbnail

  return (
    <Fragment>
        <section>
                <div>
                  <img src={pic} alt="" />
                </div>
            <div>
              <p>{product.title}</p>
              <p>{product.description}</p>
              <p>{product.category}</p>
              <p>Preostalo:{product.stock}</p>
              <p>Stara cijena {product.price}€</p>
              <p>Nova cijena {newValue}€ (popust: {product.discountPercentage}%)</p>
            </div>
        </section>
    </Fragment>
  );
};

export default ProductSingle;
