import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ProductItem from "./components/ProductItem";
import Loading from "./components/Loading/Loading";
import  './Home.css';

const Home = (props) => {
  const products = useSelector((state) => state.products);
  const length = products.length;

  const [visible, setVisible] = useState(9);
  const [showLoading, setShowLoading] = useState(true);

  const loadMore = () => {
    setVisible((prevState) => {
      if (prevState + 9 <= length) {
        return prevState + 9;
      } else {
        return length;
      }
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);

    var title = "Products";

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <main>
        <header>
        {showLoading || length === 0 ? (
              <div></div> 
            ) : (
          <h1>Products</h1>)}
        </header>

        <section>
          <div>
            {showLoading || length === 0 ? (
              <Loading/>
            ) : (
              products.slice(0, visible).map((product) => (
                <ProductItem key={product.id} item={product} />
              ))
            )}
          </div>
        </section>
        <div>
          {showLoading || length === 0 && visible >= length ? null : (
            <div className={'Od-do'}>
            <hr/>
            <button onClick={loadMore}>Load more</button>
            </div>
          )}
          <div></div>
        </div>
      </main>
    </>
  );
};

export default Home;