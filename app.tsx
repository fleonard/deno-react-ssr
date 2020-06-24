import { React } from "./deps.ts";

const App = () => {
  const [count, setCount] = React.useState(0);

  const garden = {
    backgroundColor: 'green',
    height: 'auto',
    fontSize: '30px',
    maxWidth: '400px',
    padding: '20px 5px',
    width: '100%'
  };

  return (
    <div className="pure-g pure-u">
      <h2>My DenoReact App</h2>
      <button className="pure-button" onClick={() => setCount(count + 1)}>Add a 🦕 in your garden!</button>
      <p style={garden}>
      { Array(count).fill(<span>🦕</span>) }
      </p>
    </div>
  );
};

export default App;
