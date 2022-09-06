import './App.css';
import ListRender from './ListRender';

function App() {

  const x = 6
  return (
    <div className="App">
      <div className={ x%2?"red": "blue"}>{ x%2?"the numbersr is odd":"the number is even"}</div>
      <br />
      <div>
        <ListRender/>
      </div>
    </div>
  );
}

export default App;
