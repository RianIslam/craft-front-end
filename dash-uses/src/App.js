
import './App.css';
import BootStrapNav from './components/Bootstrap/BootStrapNav';
import Card from './components/Card/Card';
import HexagonCard from './components/Card/HexagonCard';
import ProfileCard from './components/Card/ProfileCard';
import Coffee from './components/Coffee/Coffee';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div>
      <BootStrapNav/>
     <Card/>
     {/* <HexagonCard/> */}
     <ProfileCard/>
     <Coffee/>
    </div>
  );
}

export default App;
