
const IngredientsList = ({ ingredients }) => {
  return (
    <>
    <h4>Ingredients:</h4>
      {
        ingredients.map(ingredient => {
          return (
            <li>{ingredient}</li>
          )
        })
      }
    </>
  )
}

export default IngredientsList