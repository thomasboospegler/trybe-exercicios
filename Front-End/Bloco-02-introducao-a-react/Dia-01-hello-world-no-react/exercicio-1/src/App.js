import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const toDos = ['Arrumar quarto', 'Cozinhar', 'Visitar a namorada', 'Fazer os exercicios do dia']
  return <div>
    <h1>To do list:</h1>
    <ol>
      { toDos.map((toDo) => Task(toDo)) }
    </ol>
  </div>
}

export default App;
