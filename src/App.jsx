import"./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Destinations from "./components/Destinations/Destinations";
import Exemple from"./components/Exemple/Exemple";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="app">
    <Header/>
    <main>
      <Destinations/>
      <Login/>
    </main>
    <Exemple/>
    <Footer/>
    
    </div>
  );
}

export default App;
