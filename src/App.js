import React from "react";
import "./App.css";
import "./scss/app.scss";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { render } from "react-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { Routes, Route } from "react-router-dom";
import { decrement, increment } from "./redux/slices/filterSlice";
// Exporting component.obj to createContext
export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="wrapper">
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      {/* provider is a obj / works like a routes (for destroying props drilling // to get all logic in the Search at the glance) */}
      {/* <SearchContext.Provider value={{ searchValue, setSearchValue }}>
         <Header />
         <div className="content">
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/cart" element={<Cart />} />
             <Route path="*" element={<NotFound />} />
           </Routes> */}
      {/* <NotFound /> */}
      {/* </div>
       </SearchContext.Provider> */}
    </div>
  );
}

export default App;
