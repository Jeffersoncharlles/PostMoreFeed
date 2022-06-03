import { formatWithMonth } from '../../utils/format';
import { Comment } from '../Comment';
import { Avatar } from '../Helpers/Avatar';
import styles from './styles.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { useState } from 'react';


// const comments = [1, 2]


export const Post = ({ author, content, publishedAt }) => {
    const [comments, setComments] = useState(['Caraca ficou topDasGalaxy 👾'])
    const [newComment, setNewComment] = useState('')



    const publishedFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBr
    })

    const publishedFormattedDateToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true
    })

    const handleCreateSubmit = (e) => {
        e.preventDefault()

        setComments(state => [newComment, ...state])
        setNewComment('')
    }

    return (
        <section className={styles.container}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedFormatted} dateTime={publishedAt.toISOString()}>
                    Publicado {publishedFormattedDateToNow}
                </time>
            </header>
            <article className={styles.content}>
                {content.map((c, index) => {
                    if (c.type === 'paragraph') {
                        return <p key={index}>{c.content}</p>
                    } else if (c.type === 'link') {
                        return <p key={index}><a href="#">{c.content}</a></p>
                    }
                }
                )}
            </article>

            <form
                onSubmit={handleCreateSubmit}
                className={styles.commentForm}
            >
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe seu feedback'
                    value={newComment}
                    onChange={e => setNewComment(e.target.value)}
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map((comment, index) => {
                    return <Comment key={index} comment={comment} />
                })}
            </div>
        </section>
    );
}