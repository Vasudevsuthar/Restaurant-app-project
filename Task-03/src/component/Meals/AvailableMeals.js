import Card from "../UI/Card";
import MealItem from "./MealItem";
import classes from "./AvailableMeals.module.css";

const Dummy_Meals = [
  {
    id: "m1",
    name: "Ghevar",
    description: "A Rajasthan specialty",
    price: 250.0,
  },
  {
    id: "m2",
    name: "Rasgulla",
    description: "A West Bengal specialty",
    price: 350.0,
  },
  {
    id: "m3",
    name: "Paneer Tikka masala",
    description: "A Indian specialty",
    price: 200.0,
  },
  {
    id: "m4",
    name: "Dal Tadka",
    description: "Indian lentil dish",
    price: 150.0,
  },
];

const AvailableMeals = () => {
  const mealsList = Dummy_Meals.map((meals) => (
    <MealItem
      key={meals.id}
      name={meals.name}
      description={meals.description}
      price={meals.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
