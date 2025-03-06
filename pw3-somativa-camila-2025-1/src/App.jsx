import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Container from './components/layout/container';

/* IMPORTS DOS COMPONENTS DE PÁGINAS */
import Home from './components/Pages/Home';
import CreateBook from './components/Pages/CreateBook';
import ListBook from './components/Pages/ListBook';

/* IMPORTAÇÃO DO NAVBAR */
import NavBar from './components/layout/NavBar';

function App() {

  return (
    <>
      <div>

        <BrowserRouter>

          <Container>

            <Routes>

              <Route path='/' element={<NavBar />}>

                <Route path='/' element={<Home />} />
                
                <Route path='/newBook' element={<CreateBook />} />
                
                <Route path='/listBook' element={<ListBook />} />
                
              </Route>

            </Routes>
            
            {/* <CreateBook />
            <ListBook />
            <Home /> */}

          </Container>

        </BrowserRouter>

      </div>
    </>
  )
}

export default App;
