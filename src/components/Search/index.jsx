import React from "react";
import { SearchContext } from "../../App";
import debounce from "lodash.debounce";

import styles from "./Search.module.scss";
export const Search = () => {
  // поиск
  const { setSearchValue } = React.useContext(SearchContext);

  // быстрое отображение данных
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef();
  // useRef возвращает изменяемый ref-объект, свойство .current которого инициализируется переданным аргументом (initialValue). Возвращённый объект будет сохраняться в течение всего времени жизни компонента. works like jquery to get an element

  //React.useCallback works like useEffect
  // const testDobounce = React.useCallback(
  //   debounce(() => {
  //     console.log("Hello");
  //   }, 1000),
  //   []
  // );

  const onClickClear = () => {
    // локальная чистка и чистка контекста
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  //debounce -> отложенный фильтр
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title />
        <g data-name="Layer 2" id="Layer_2">
          <path d="M18,10a8,8,0,1,0-3.1,6.31l6.4,6.4,1.41-1.41-6.4-6.4A8,8,0,0,0,18,10Zm-8,6a6,6,0,1,1,6-6A6,6,0,0,1,10,16Z" />
        </g>
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {value && (
        <svg onClick={onClickClear} className={styles.clearIcon}>
          <g>
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
          </g>
        </svg>
      )}
    </div>
  );
};

export default Search;
