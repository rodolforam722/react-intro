import logo from "./logo.svg";
import "./App.css";
import Fofo from "./fofo";

const patients = [
  {
    name: "fofo",
    age: 19,
    isMale: true,
  },
  {
    name: "jon",
    age: 39,
    isMale: true,
  },
  {
    name: "nana",
    age: 99,
    isMale: false,
  },
  {
    name: "marisabel",
    age: 33,
    isMale: false,
  },
];

function App() {
  return (
    <div className="App">
      {patients.map((patient) => (
        <Fofo
          content={patient.name}
          age={patient.age}
          isMale={patient.isMale}
        ></Fofo>
      ))}
      <hr />
      <Fofo content="hola" color="red"></Fofo>
      <Fofo content="mundo" color="green"></Fofo>
    </div>
  );
}

export default App;
