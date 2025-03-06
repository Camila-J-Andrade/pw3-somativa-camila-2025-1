import Button from './Button'

import styles from './BookCard.module.css'

const BookCard = ({titulo, autor, imagem}) => {
    return(
    <div className={styles.bookCard}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <p className={styles.author}>{autor}</p>
        <img src= {imagem} alt = "Imagem da capa: Solitarie"/>
        <Button label='DETALHE'/>
    </div>
    )
}

export default BookCard