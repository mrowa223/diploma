import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Window.module.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
function Window({ totalPrice, totalCount }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const notify = () => toast("Вы успешно оформили заказ. Ваш заказ будет готов через 15 минут.");
  return (
    <div className={styles.root}>
      <div class="button  pay-btn" variant="success" onClick={handleShow}>
        <span>Оплатить</span>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Перейти к оплате</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <b> Вы совершаете заказ {totalCount} {totalCount = 1 ?  "пиццы" : "пицц"}. <b>На </b> общую сумму{" "}
          {totalPrice} KZT{" "} </b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={notify}>
          <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
            {/* <Link to="payment"> Перейти к оплате</Link> */}
            Перейти к оплате
          </Button>
        </Modal.Footer>
      </Modal>
      <div />
    </div>
  );
}

export default Window;
