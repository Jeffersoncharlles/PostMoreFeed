import styles from './styles.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'

export const Comment = () => {

    return (
        <div className={styles.container}>
            <img src="https://i.pravatar.cc/150?img=42" alt="Elizabeth Terry" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Elizabeth Terry</strong>
                            <time title='2 de Junho a 09:31h' dateTime='2022-06-02 10:21:40'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}