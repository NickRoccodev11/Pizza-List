
const AddForm = ({ setPizzaName, setIngredient1, setIngredient2, setIngredient3, pizzaName, ingredient1, ingredient2, ingredient3, handleSubmit }) => {
  return (
    <>
      <form
        action=""
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2>Add a new Pizza!</h2>
        <label> name: </label><br />
        <input
          type="text"
          value={pizzaName}
          onChange={(e) => setPizzaName(e.target.value)}
        />
        <br />
        <label> ingredient 1: </label><br />
        <input
          type="text"
          value={ingredient1}
          onChange={(e) => setIngredient1(e.target.value)}
        />
        <br />
        <label> ingredient 2: </label><br />
        <input
          type="text"
          value={ingredient2}
          onChange={(e) => setIngredient2(e.target.value)}
        />
        <br />
        <label> ingredient 3: </label><br />
        <input
          type="text"
          value={ingredient3}
          onChange={(e) => setIngredient3(e.target.value)}
        /><br />
        <button>submit new pizza</button>
      </form>

    </>
  )
}

export default AddForm