import './App.css';

function App() {
  return (
    <div className="App">

        {Array.apply(0, Array(10)).map(function (x, i) {
          return <p>{i}</p>;
        })}
    </div>
  );
}

export default App;
