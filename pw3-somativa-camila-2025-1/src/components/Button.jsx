import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button=({label, router, cod_livro}) => {
    return(
        <div className={styles.buttonContainer}>

            <Link to={`${router}${cod_livro}`}>
                <button>{label}</button>
            </Link>

        </div>
    )
}

export default Button