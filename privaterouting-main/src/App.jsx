
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './Components/Dasboard';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { Navbar } from './Components/Navbar';
import { PrivateRoute } from './Components/PrivateRoute';
import { Settings } from './Components/Settings';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
        <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>}></Route>
        

      </Routes>
     
    </div>
  );
}

export default App;
