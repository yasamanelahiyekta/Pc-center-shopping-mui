import './App.css';
import "./tailwind/tailwind.css"
import Footer from "./components/Footer/Footer"
import Router from './components/Router/Router';
function App() {

  return (
    <div className="App">
      <Router />
      <Footer />
    </div>
  );
}

export default App;
