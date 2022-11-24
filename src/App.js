import './App.scss';
import Header from './components/Header';
import MainPage from './components/MainPage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import MenuFull from './components/menu/MenuFull';
import GroceryList from './components/GroceryList';
import PopUp from './components/PopUp';
import LoggedIn from './components/LoggedIn';
import Settings from './components/Settings';

function App() {
	
  return (
    <>
      <Header />
      <MainPage />
      <SignUp />
      <SignIn />
      <LoggedIn />
      <MenuFull />
      <GroceryList />
      <PopUp />
      <Settings />
    </>
  );
}


export default App;


