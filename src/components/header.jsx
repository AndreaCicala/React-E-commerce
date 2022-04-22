import { useState, useEffect } from "react";
import { List } from "./product";

export const Header = () => {
  const [search, setSearch] = useState("");

  const changing = (event) => {
    setSearch(event.target.value);
  };



  return (
    <header>
      <img src="" alt="react ecommerce"></img>
      <form>
        <input
          value={search}
          onChange={changing}
          type="text"
          placeholder="Search..."
        ></input>
      </form>
    </header>
  );
};
