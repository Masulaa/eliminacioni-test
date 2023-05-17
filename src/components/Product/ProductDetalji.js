import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fragment } from "react";

import "./ProductDetalji.css";

const ProductSingle = () => {
  let navigate = useNavigate();
  let params = useParams();
  const id = params.id;

  const product = useSelector(
    (state) =>
      state.products.filter((products) => products.id === parseInt(id))[0]
  );

  const minusValue = Math.round(
    (product.discountPercentage / 100) * product.price
  );
  const newValue = product.price - minusValue;

  const pic = product.thumbnail;

  return (
    <Fragment>
      <section className="minecraft">
        <div>
          <img className="slika2" src={pic} alt="" />
        </div>
        <div className="tekst">
          <h1>{product.title}</h1>
          <h4>{product.description}</h4>
          <p>Kategorija: {product.category}</p>
          <p>Preostalo: {product.stock}</p>
          <p>
            Stara cijena: <div className="stara">{product.price}€</div>
          </p>
          <p>
            Nova cijena: <div className="nova">{newValue}€ </div>(popust:{" "}
            <div className="popust">{product.discountPercentage}%</div>)
          </p>
        </div>
      </section>
      <button
        className="back"
        onClick={() => {
          navigate(`/`);
        }}
      >
        Nazad
      </button>
    </Fragment>
  );
};

export default ProductSingle;
