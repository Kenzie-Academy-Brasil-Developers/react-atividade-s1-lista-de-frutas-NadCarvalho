import "./App.css";
import {useState} from "react";
import Button from "./Components/Button"
import List from "./Components/List"
import Price from "./Components/Price"

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
   ]);

   const totalPrice = fruits.reduce((acc,cur) => acc + cur.price, 0);

   const filterRedFruits = () => {
    const red = fruits.filter(f => f.color === "red");
    setFruits(red)
   }

  return (
  <div className="App">
    <Price price={totalPrice}/>
    <List items={fruits}/>
    <Button showRed={filterRedFruits}/>
  </div>
  );
}

export default App;
