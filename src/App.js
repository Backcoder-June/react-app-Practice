import logo from './logo.svg';
import './App.css';

import Greetings from './components/Greetings'
import FoodList from './components/FoodList'; 
import Hello from './components/Hello';

function App() {
  return (
<>

{/* <Header /> 
<SideBar />
<Footer />  */}

<Hello/>

<Greetings/>
<FoodList/>

</>

  );
}

export default App;
