import { useState } from "react";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { List } from "./components/list";
import "./App.css";

function App() {
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <main>
      <Header filter={setFilter}/>
      <div className="flex">
        <Sidebar catSelection={setCategory}/>
        <List category={category} filter={filter}/>
      </div>
    </main>
  );
}

export default App;
