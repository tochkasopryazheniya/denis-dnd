import './assets/style/style.scss';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import {Route, Routes} from "react-router-dom";
import StartPage from "./pages/StartPage";
import Adventures from "./pages/Adventures";
import Heroes from "./pages/Heroes";
import Players from "./pages/Players";
import Worlds from "./pages/Worlds";
import About from "./pages/About";
import OneHero from "./pages/OneHero";
import OnePlayer from "./pages/OnePlayer";
import OneAdventure from "./pages/OneAdventure";

function App() {
  return (
    <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/adventures' element={<Adventures/>}/>
        <Route path='/heroes' element={<Heroes/>}/>
        <Route path='/players' element={<Players/>}/>
        <Route path='/worlds' element={<Worlds/>}/>
        <Route path='/aboutme' element={<About/>}/>
        <Route path='/heroes/:id' element={<OneHero/>}/>
        <Route path='/players/:id' element={<OnePlayer/>}/>
        <Route path='/adventures/:id' element={<OneAdventure/>}/>
    </Routes>
  );
}

export default App;
