function App() {
  const handleSend = () => {
    window.parent.postMessage("hello sabri", " http://localhost:5173/");
  };

  return (
    <>
      <button onClick={() => handleSend()}>send message</button>
    </>
  );
}

export default App;
