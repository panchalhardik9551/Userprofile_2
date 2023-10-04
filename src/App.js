
import './App.css';
import Userprofile from './components/Userprofile';
function App() {
  return (
    <Userprofile Name="Name : Hardik Panchal" image="hardik img.jpg" bio={[<p> ✔️ I am Master of Commerce <br />✔️ I am Working Tuvoc Technologies Pvt Ltd <br />✔️ I am React Js Developer  </p>]} />

  );
}

export default App;
