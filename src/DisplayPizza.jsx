import IngredientsList from "./IngredientsList"
const DisplayPizza = ({ displayedPizza }) => {
  return (
    <div className="display">
      {displayedPizza ?
        <div>
          <h3 className="displayed-name">{displayedPizza.name}</h3>
          <ul className="ingredients-list">
            <IngredientsList
              ingredients={displayedPizza.ingredients}
            />
          </ul>
        </div>: <h2 className="hover-message">Hover over a pizza for details!</h2>
      }
    </div>
  )
}

export default DisplayPizza