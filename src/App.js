import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Container } from "./components/index.jsx";
import { Header, Footer } from "./sections/index.jsx";
import { Home, Profile, Streams } from "./Pages/index";



function App() {


  return (

    <>
      <Router>
        <Header name="Lakhdar" familyName="Hafsi" />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/Streams' element={<Streams />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>

  );
}

export default App;
