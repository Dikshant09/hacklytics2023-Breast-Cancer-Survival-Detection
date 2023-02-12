import GetResult from './GetResult';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<GetResult/>}/>
    </Routes>
    <ToastContainer />
    </Router>
  );
}

export default App;