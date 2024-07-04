import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Quiz from './Components/Quiz';
// import Quiz from './Components/Quiz';

function App() {
  return (
    
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Quiz/>}/>
       </Routes>
      </BrowserRouter>
    
  );
}

export default App;
