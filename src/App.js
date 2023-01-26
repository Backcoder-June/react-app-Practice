import logo from './logo.svg';
import './App.css';

import Greetings from './components/Greetings'
import FoodList from './components/FoodList'; 
import Hello from './components/Hello';
import ItemMain from './components/item/ItemMain';
import TodoTemplate from './components/todo/TodoTemplate';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
<>

<Header />

<TodoTemplate />

<Footer />

{/* <ItemMain /> */}
{/* <Header /> 
<SideBar />
<Footer />  */}

{/* <Hello/>

<Greetings/>
<FoodList/> */}

</>

  );
}

export default App;
