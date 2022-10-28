import img from './img.png';
import shareButton from './share button.png'
import './App.css';
import Profile from './components/profile'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="div1">
      <img src={img} className="App-logo" alt="logo" id='profile__img'></img>
            <p id="twitter" title='ayo'>0x_founder</p>
            <p id="slack">nonfungibleayo.eth</p>
        </div>
        <div className="div2">
          <img src={shareButton} className="share_btn"></img>
        </div>
      </header>
      <Profile />
    </div>
  );
}

export default App;
