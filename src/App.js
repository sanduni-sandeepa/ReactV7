import { render } from "react-dom";
import Pet from "./Pet";

const App = () =>{
  return(
    <div>
      <h1>Pet </h1>
      <Pet name = "Luna" animal="dog" breed="havanese"/>
      <Pet name = "B" animal="Bird" breed="cock"/>
      <Pet name = "Luna" animal="dog" breed="havanese"/>
    </div>
  );
};

render(<App/>,document.getElementById("root")) ;

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
//   ]);
// };

// render(React.createElement(App), document.getElementById("root"));