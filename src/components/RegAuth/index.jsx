import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./RegPage.module.scss";
const RegPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Емейл не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);
  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный емейл");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError("Пароль должен быть длинее 3 и меньше 8");
      if (!e.target.value) {
        setPasswordError("Пароль не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const buttonOnClick = () => {
    const registrationPerson = {
      email
    };
    console.log(registrationPerson);

    // let peopleEmail = JSON.parse(localStorage.getItem('people')) || []


    // for (let i = 0; i < people.length; i++) {
    //   if (registrationPerson.email !== people[i]) {
    //     people.push(registrationPerson);
    //     localStorage.setItem("people", JSON.stringify(people));
    //   } else {
    //     alert("Аккаунт уже существует");
    //   }
    // }
  };
  return (
    <div>
      {/* <h2>Reg Page</h2>
      <div className={styles.InputForms}>
        <span> Login: </span>
        <input type={"text"} value={reg} onChange={(e)=> OnchangeReg(e)} />
        {reg}
        <span> Password: </span>
        <input type={"password"} />
        <span> Email: </span>
        <input type={"email"} />

        <button> Submit</button>
      </div> */}

      <form>
        <h2>Регистрация</h2>
        {emailDirty && emailError && (
          <div style={{ color: "red" }}>{emailError}</div>
        )}
        <input
          onChange={(e) => emailHandler(e)}
          value={email}
          onBlur={(e) => blurHandler(e)}
          name="email"
          type="text"
          placeholder="Enter your email..."
        />
        {passwordError && passwordDirty && (
          <div style={{ color: "red" }}>{passwordError}</div>
        )}
        <input
          onChange={(e) => passwordHandler(e)}
          value={password}
          onBlur={(e) => blurHandler(e)}
          name="password"
          type="password"
          placeholder="Enter your password..."
        />
        <button
          disabled={!formValid}
          type={"button"}
          onClick={() => buttonOnClick()}
        >
          Registration
        </button>
      </form>
    </div>
  );
};

export default RegPage;
