import { React, Fragment } from "react"
import {useParams, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { productActions } from '../../store/Store'

import './IzmjeniProduct.css';

const IzmjeniProduct = (props) =>{
const dispatch = useDispatch();
let params = useParams();
const id = params.id;

const navigate = useNavigate();

const product = useSelector(
    (state) =>
      state.products.filter((products) => products.id === parseInt(id))[0]
  );

  const pic = product.thumbnail
const updateHandler = () =>{
  fetch('https://dummyjson.com/products/id', {
  method: 'PUT', 
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'iPhone Galaxy +1'
  })
})
.then(res => res.json())
.then((data)  => {
    console.log(product.id);
        dispatch(productActions.updateHandler(product.id));
}).catch((error) => {
    console.log("Došlo je do greške:", error);
    navigate(`/`);
  });

}
return (
    <Fragment>
        <div>
            <img className="slika2" src={pic} alt="slika"/>
        </div>
        <form>
            <div className="container">
            <input type="text" name='title' placeholder='Naslov' className="inputi"/>
            <input type="text" name='description' placeholder='Opis' className="inputi" />
            <input type="text" name='price' placeholder='Cijena' className="inputi"  />
            </div>
            <div className="dugmad">
            <button type="Submit" className="potvrdi" onClick={updateHandler }>Potvrdi</button>
            <button type="Reset"className="reset">Resetuj</button></div>
        </form>
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

}

export default IzmjeniProduct;