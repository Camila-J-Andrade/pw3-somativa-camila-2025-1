import './App.css'

import BookCard from './components/BookCard'

import capa_livro from './assets/CAPA-SOLITAIRE.jpg'

function App() {

  return (
    <>
      <div>
        <h1>PW3 - WEBAPP - LIVRARIA</h1>
        
        <BookCard 
          titulo ='Solitaire' 
          autor = 'Alice Oseman'
          imagem = {capa_livro}/>
        
        {/* <BookCard 
          titulo ='Heartstopper' 
          autor = 'Alice Oseman'
          imagem ='Uma imagem vai aparecer aqui'/>

        <BookCard 
          titulo ='Radio silence'
          autor = 'Alice Oseman'
          imagem ='Uma imagem vai aparecer aqui'/>

        <BookCard 
          titulo ='I was born for this' 
          autor = 'Alice Oseman'
          imagem ='Uma imagem vai aparecer aqui'/> */}
        
      </div>
    </>
  )
}

export default App
