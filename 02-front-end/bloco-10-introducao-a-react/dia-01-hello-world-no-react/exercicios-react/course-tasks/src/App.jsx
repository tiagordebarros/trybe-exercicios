import './App.css';

const appointments = ["Estudar React", "Implementar nova função", "Organizar a matéria"];

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      { appointments.map((appointment) => Task(appointment)) }
    </div>
  );
}

export default App;
