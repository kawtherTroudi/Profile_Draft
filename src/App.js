import './App.css';
import MyPhoto from "./Components/Profile/ProfilPhoto";
import MyName from "./Components/Profile/FullName";
import MyAddress from "./Components/Profile/Address";

function App() {
  return (
    <div className="App">
      <MyPhoto/>
      <MyName/>
      <MyAddress/>
    </div>
  );
}

export default App;
