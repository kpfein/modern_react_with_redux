function App() {
    const inputType = 'number';
    const minValue = 5;
    const message = 'Enter your age'
  
    return <input style={{border: '3px solid red'}} type={inputType} min={minValue} placeholder={message} autoFocus={true} />;
  }

  export default App;