import styles from './styles.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Helpers/Avatar'
import { useState } from 'react'

export const Comment = ({ comment, onDeleteComment }) => {
    const [likeCount, setLikeCount] = useState(0)


    const handleLikeComment = () => {
        // setLikeCount(likeCount + 1)
        setLikeCount((state) => state + 1)
        //sempre que for atualizar uma informação e ela depende do valor anteriormente ideia e usar assim
    }

    return (
        <div className={styles.container}>
            <Avatar src="https://i.pravatar.cc/150?img=42" alt="Elizabeth Terry" hasBorder={false} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Elizabeth Terry</strong>
                            <time title='2 de Junho a 09:31h' dateTime='2022-06-02 10:21:40'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={() => onDeleteComment(comment)} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{comment}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment} >
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}