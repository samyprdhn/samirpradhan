import logo from './logo.svg';
import github from './github.svg';
import instagram from './instagram.svg';
import linkedin from './linkedin.svg';
import './App.css';

function App() {
  return (


    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>  💎 🙌  </code>
            <code> </code>
          <code> Samir Pradhan</code>
          <code>Engineering | Finance </code>
        </p>
      </header>

      <footer className="App-footer">
          <a href={"https://www.linkedin.com/in/-samir-pradhan-/"}><img src={linkedin}/></a>
          <a href={"https://github.com/samyprdhn"}><img src={github}/></a>
          <a href={"https://www.instagram.com/samirpradhan.eth/"}><img src={instagram}/></a>
      </footer>

    </div>
  );
}

export default App;
