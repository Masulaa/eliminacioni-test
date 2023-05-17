import { Fragment } from "react";
import {Link, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { productActions } from "../Store";

import './items.css'
const ProductItem = (props) => {

    let navigate = useNavigate();

    const prod = props.item;
    const dispatch = useDispatch();

    const deleteHandler = () =>{
        dispatch(productActions.deleteProduct());
    }
    const editHandler = () =>{
        dispatch(productActions.updateProduct());
    }

    return (
        <Fragment>
            <div  className="block">
            <img src={prod.thumbnail} className={'slika'}/>
                <div className={'1'}>
                    <p className={'mb2'}> {prod.title}</p>
                    <p className={'mb3'}>{prod.category}</p>
                    <p className={'mb4'}>${prod.price}</p>
                </div>
                <section  className={'col-4'}>
                    <div className={'kartica'}>
                        <button className={'detail'} onClick={() => {navigate(`/product/${prod.id}`)}}>Pogledaj detalje</button>
                        <button className={'edit'} onClick={() => {navigate('/')}} >Izmjeni</button>
                        <button className={'delete'} onClick={deleteHandler}>Obriši</button>
                    </div>
                    </section>
                    </div>
            </Fragment>
    );
}

export default ProductItem;