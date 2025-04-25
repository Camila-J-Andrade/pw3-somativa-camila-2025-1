import Button from './Button'

import styles from './BookCard.module.css'

const BookCard = ({cod_livro, nome_livro, autor_livro, imagem}) => {
    return(
    <div className={styles.bookCard}>
        <h3 className={styles.titulo}>{nome_livro}</h3>
        <p className={styles.author}>{autor_livro}</p>
        <img src= {imagem} alt = "Imagem da capa"/>
        <Button label='DETALHE'/>
    </div>
    )
}

export default BookCard;