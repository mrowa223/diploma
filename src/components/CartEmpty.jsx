import React from "react";
import { Link } from "react-router-dom";
import cartEmptyImg from "../assets/img/empty-cart.png";
import styles from "../scss/components/CartEmpty.module.scss";
export const CartEmpty = () => {
  return (
    <div className={styles.root}>
      <div class="cart cart--empty">
        <h2>
          Корзина пустая <icon>😕</icon>
        </h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <Link to="/" class="back button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;
