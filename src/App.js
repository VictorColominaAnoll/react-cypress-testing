import './App.css';
import Patata from "./Patata"

function App() {
  return (
    <div className="App">
      Hola que tal

      <Patata />

      <Form></Form>
    </div>
  );
}

export default App;

function Form() {
  return (
    <div className="form">
      <input placeholder="name" id="name"></input>
      <input placeholder="surname" id="surname"></input>
    </div>
  )
}