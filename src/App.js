import './App.css';

function App() {
  let name = "nhung";
  const css = {
    color: "red",
    backgroundColor: "blue"
  };

  return (
    <>
      <div className="test" style={css}>
        Xin chao {name}!
      </div>
      <div className="test" style={css}>
        Xin chao {name}!
      </div>
    </>
    
    
  );
}

export default App;
