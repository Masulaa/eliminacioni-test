import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productActions } from "../store/Store";

import "./items.css";

const ProductItem = (props) => {
  let navigate = useNavigate();

  const prod = props.item;
  const dispatch = useDispatch();

  const deleteHandler = () => {
    fetch(`https://dummyjson.com/products/${prod.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(prod.id);
        dispatch(productActions.deleteProduct(prod.id));
      })
      .catch((error) => {
        console.log("Došlo je do greške:", error);
      });
  };

  return (
    <Fragment>
      <div className="block">
        <img src={prod.thumbnail} alt="slika" className={"slika"} />
        <div className={"1"}>
          <p className={"mb2"}>{prod.title}</p>
          <p className={"mb3"}>{prod.category}</p>
          <p className={"mb4"}>${prod.price}</p>
        </div>
        <section className={"col-4"}>
          <div className={"kartica"}>
            <button
              className={"detail"}
              onClick={() => {
                navigate(`/product/${prod.id}`);
              }}
            >
              Pogledaj detalje
            </button>
            <button
              className={"edit"}
              onClick={() => {
                navigate(`/izmjeni/${prod.id}`);
              }}
            >
              Izmjeni
            </button>
            <button className={"delete"} onClick={deleteHandler}>
              Obriši
            </button>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default ProductItem;
