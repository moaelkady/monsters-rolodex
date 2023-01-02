import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [title, setTitle] = useState("Monster Rolodex");

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setMonsters(data));
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setInputVal(e.target.value);
    console.log("rendered handle change");
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
    console.log("title changed");
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox handleChange={handleChange} placeHolder = "Search Monster"/>
      <br />
      <SearchBox handleChange={handleTitle} placeHolder = "Edit title"/>
      <CardList monsters={monsters} inputVal={inputVal} />
    </div>
  );
}

export default App;
