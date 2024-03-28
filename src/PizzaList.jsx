const PizzaList = ({ pizzas, setDisplayedPizza }) => {
  return (
    <>

      <ul className="pizza-list">
        <h3 className="list-title">My Pizza List</h3>
        {
          pizzas.map(pizza => {
            return (
              <li
                key={pizza.id}
                onMouseEnter={() => { setDisplayedPizza(pizza) }}
              >{pizza.name}</li>
            )
          })
        }
      </ul>
    </>
  )
}

export default PizzaList