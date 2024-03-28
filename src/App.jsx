//hooks
import { useState, useEffect } from 'react';
//data
import startingPizzas from './startingPizzas';
//components
import PizzaList from './PizzaList';
import DisplayPizza from './DisplayPizza';
import AddForm from './AddForm';

function App() {
  const [pizzas, setPizzas] = useState([])
  const [displayedPizza, setDisplayedPizza] = useState(null)
  const [pizzaName, setPizzaName] = useState("")
  const [ingredient1, setIngredient1] = useState("")
  const [ingredient2, setIngredient2] = useState("")
  const [ingredient3, setIngredient3] = useState("")
 
  //load initial pizza list
  useEffect(() => {
    setPizzas(startingPizzas)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const ingredientsArray = [ingredient1, ingredient2, ingredient3]
    const newPizza = {
      id: pizzas[pizzas.length - 1].id + 1,
      name: pizzaName,
      ingredients: ingredientsArray,
    }
    setPizzas([...pizzas, newPizza])
    setPizzaName("")
    setIngredient1("")
    setIngredient2("")
    setIngredient3("")

  }
  return (
    <div id="app-container">

      <h1>My Pizzas</h1>
      <div id="form-list-container">
        <AddForm
          setPizzaName={setPizzaName}
          setIngredient1={setIngredient1}
          setIngredient2={setIngredient2}
          setIngredient3={setIngredient3}
          pizzaName={pizzaName}
          ingredient1={ingredient1}
          ingredient2={ingredient2}
          ingredient3={ingredient3}
          handleSubmit={handleSubmit}
        />
        <PizzaList
          pizzas={pizzas}
          setDisplayedPizza={setDisplayedPizza}
        />
      </div>
      <DisplayPizza displayedPizza={displayedPizza} />
    </div>
  )
}

export default App
