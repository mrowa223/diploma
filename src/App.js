import React from "react";
import "./App.css";
import "./scss/app.scss";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

import Skeleton from "./components/PizzaBlock/Skeleton";

function App() {
  let [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // https://62d2bc7981cb1ecafa64e72d.mockapi.io/items
  // React.useEffect(() => {
  //   fetch("https://62d2bc7981cb1ecafa64e72d.mockapi.io/items")
  //     .then((res) => res.json())
  //     .then((arr) => {
  //       setItems(arr);
  //       setIsLoading(false);
  //     });
  // }, [items]);

  fetch("https://62d2bc7981cb1ecafa64e72d.mockapi.io/items")
    .then((res) => {
      return res.json();
    })
    .then((arr) => {
      console.log("Массив пицц", arr);
      setItems(arr);
    });
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
            {/* {isLoading
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
