import logo from './logo.svg';
import './App.css';
import BasicModal from './mui components/modal';
import SignUp from './pages/signup';
import SignIn from './pages/login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

<Routes>
<Route path="/signin" element={<SignIn />} />
<Route path="/" element={<SignUp />} />
<Route path="/modal" element={<BasicModal />} />

</Routes>

    </div>
  );
}

export default App;
