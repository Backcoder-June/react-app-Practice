import logo from './logo.svg';
import './App.css';

import Greetings from './components/Greetings'
import FoodList from './components/FoodList'; 
import Hello from './components/Hello';
import ItemMain from './components/item/ItemMain';
import TodoTemplate from './components/todo/TodoTemplate';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
// 최상위인 App.js 에서 import 해서 받아서 사용 
import 'bootstrap/dist/css/bootstrap.min.css';
import Join from './components/user/Join';

function App() {
  return (
<>

<Header />

{/* <TodoTemplate /> */}
<Join />

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
