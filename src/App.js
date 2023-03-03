import logo from './assets/movies-rating-logo.png';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo-wrapper">
          <img src={logo} alt="Movies Rating logo" className='logo' />
          <h1>Movies Rating</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
