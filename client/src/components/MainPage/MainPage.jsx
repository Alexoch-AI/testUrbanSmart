import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { authUser, getUserThunk } from "../../redux/action/action";
import style from "./mainPage.module.scss";

function MainPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errLogin, setErrLogin] = useState(true);
  const [errPassword, setErrPassword] = useState(true);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);

  const loginHandler = (e) => {
    setLogin(e.target.value);
    if (e.target.value === user.login) {
      setErrLogin(false);
    } else {
      setErrLogin(true);
    }
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (String(e.target.value) === user.password) {
      setErrPassword(false);
    } else {
      setErrPassword(true);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(authUser(true));
    history.push("/profile");
  };

  return (
    <div className={style.list}>
      <div className={style.list__up}>
        <div className={style.list__up__title}>
          <p>Войти</p>
        </div>
      </div>
      <form
        onSubmit={(e) => submitHandler(e)}
        className={style.list__inputs__form}
      >
        <label htmlFor="login">Логин</label>
        <input
          value={login}
          onChange={(e) => loginHandler(e)}
          name="login"
          id="login"
          type="text"
        />
        <label htmlFor="password">Пароль</label>
        <input
          value={password}
          onChange={(e) => passwordHandler(e)}
          name="password"
          id="password"
          type="password"
        />
        <div className={style.list__inputs__button}>
          <button
            disabled={errLogin || errPassword ? true : false}
            className={style.list__inputs__button}
          >
            Войти
          </button>
        </div>
      </form>
    </div>
  );
}

export default MainPage;
