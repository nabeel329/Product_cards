import "./App.css";
import Card from "./Components/Card/Card";
import { Data } from "./Data";

const App = () => {
  return (
    <div className="appContainer">
      {Data.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          description={item.description}
          category={item.category}
          rating={item.rating}
        />
      ))}
    </div>
  );
};

export default App;
