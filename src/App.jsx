import Hello from "./components/Hello";

function App() {
  const person = {
    name: "Warren",
    message: "Hi there!",
    emoji: "Im",
    seatNumbers: [1, 4, 7],
  };
  return (
    <div className="App">
      <Hello person={person} />
    </div>
  );
}

export default App;
