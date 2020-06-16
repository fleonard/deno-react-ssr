import { React } from "./deps.ts";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      button: any;
      div: any;
      h2: any;
      p: any;
    }
  }
}

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="pure-g pure-u">
      <h2>My DenoReact App</h2>
      <button className="pure-button" onClick={() => setCount(count + 1)}>Add a 🦕 in your garden!</button>
      <p>You have {count} 🦕 in your garden, how cool is that?</p>
    </div>
  );
};

export default App;
