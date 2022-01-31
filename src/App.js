import './App.css';
import {Route} from "react-router"
import Header from "./components/Header/Header"
import MainPage from './pages/MainPage/MainPage';
import Services from './pages/services/Services';

function App() {
  return (
    <div className="App">
      <div className="app_wrapper">
        <Header/>
       
      </div>
      <div className="app_content">
        <MainPage/>
        <Services/>
       </div>
    </div>
  );
}

export default App;
