import imagen from './imagen/image-qr-code.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={imagen} alt='QR Code'></img>
        <div className='text'>
          <h2>Improve your front-end skills by building projects</h2>
          <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>

      </div>
    </div>
  );
}

export default App;
