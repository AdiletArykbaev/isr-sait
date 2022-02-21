import './App.css';
import {Route} from "react-router"
import Header from "./components/Header/Header"
import MainPage from './pages/MainPage/MainPage';
import Services from './pages/services/Services';
import Solution from './pages/Solutions/Solution';
import cardImage from "./images/cardImage-1.png";
import Cases from './pages/Cases/Cases';
import AboutYouForm from './pages/AboutYouForm/AboutYouForm';
function App() {
  
  const services = [
    "КОНСАЛТИНГ",
    "ИССЛЕДОВАНИЯ",
    "МАРКЕТИНГ И ДИЗАЙН",
    "PR И РЕКЛАМА",
    "Обучение",
  ];
  const images = [cardImage,cardImage,cardImage,cardImage]
  return (
    <div className="App">
      <div className="app_wrapper">
        <Header/>
       
      </div>
      <div className="app_content">
        <MainPage/>
        <div>
        <div className="app_wrapper">
          <Solution images={images}/>

        </div>
          <Services services={services} subtitle={"solution"} textBtn={"Подробнее об услугах"}/>
          <Cases/>
        </div>
        <div className="app_wrapper">
            <div></div>
        </div>

       </div>
    </div>
  );
}

export default App;
