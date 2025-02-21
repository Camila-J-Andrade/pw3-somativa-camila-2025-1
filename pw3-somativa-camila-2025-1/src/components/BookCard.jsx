import Button from './Button'

import style from './BookCard.module.css'

const BookCard = ({titulo, autor, imagem}) => {
    return(
    <div className={style.bookCard}>
        <h3 className={style.titulo}>{titulo}</h3>
        <p className={style.author}>{autor}</p>
        <img src= {imagem} alt = "Imagem da capa: Solitarie"/>
        <Button label='DETALHE'/>
    </div>
    )
}

export default BookCard