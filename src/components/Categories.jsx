import React from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            key={i}
            onClick={() => setActiveIndex(i)}
            className={activeIndex === i ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
{
  /* <li
onClick={() => onClickCategory(0)}
className={activeIndex === 0 ? "active" : ""}
>
Все
</li>
<li
onClick={() => onClickCategory(1)}
className={activeIndex === 1 ? "active" : ""}
>
Мясные
</li>
<li
onClick={() => onClickCategory(2)}
className={activeIndex === 2 ? "active" : ""}
>
Вегетарианская
</li>
<li
onClick={() => onClickCategory(3)}
className={activeIndex === 3 ? "active" : ""}
>
Гриль
</li>
<li
onClick={() => onClickCategory(4)}
className={activeIndex === 4 ? "active" : ""}
>
Острые
</li>
<li
onClick={() => onClickCategory(5)}
className={activeIndex === 5 ? "active" : ""}
>
Закрытые
</li> */
}
export default Categories;
