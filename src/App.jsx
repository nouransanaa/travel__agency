import Destinations from "./components/Destinations/Destinations";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function app(){
return(
  <div className="app">
    <Header/>
    <main>
      <Destinations/>
    </main>
    <Footer/>
  </div>
)

}
export default app;