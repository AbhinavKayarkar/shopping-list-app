import { Route, Routes } from 'react-router-dom';
import './App.css';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ShoppingList />}></Route>
      </Routes>
    </div>
  );
}

export default App;