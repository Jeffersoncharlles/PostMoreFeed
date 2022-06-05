import { formatWithMonth } from '../../utils/format';
import { Comment } from '../Comment';
import { Avatar } from '../Helpers/Avatar';
import styles from './styles.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { useState } from 'react';


export const Post = ({ author, content, publishedAt }) => {
    const [comments, setComments] = useState(['Caraca ficou topDasGalaxy 👾'])
    const [newComment, setNewComment] = useState('')


    //////////////////////////////////////////////////////////////////////////////
    const publishedFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBr
    })

    const publishedFormattedDateToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true
    })
    //////////////////////////////////////////////////////////////////////////////
    const handleCreateSubmit = (e) => {
        e.preventDefault()

        setComments(state => [newComment, ...state])
        setNewComment('')
    }

    const handleNewCommentChange = (e) => {
        e.target.setCustomValidity("")
        setNewComment(e.target.value)
    }

    const handleDeleteComment = (comment) => {
        const commentsWithoutDeleteOne = comments.filter(comments => {
            return comments != comment
        })
        setComments(commentsWithoutDeleteOne)
    }
    //////////////////////////////////////////////////////////////////////////////
    const handleNewCommentInvalid = (e) => {
        e.target.setCustomValidity("Esse Campo é obrigatório")
    }

    const isNewCommentEmpty = newComment.length === 0

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
                        return <p key={c.content}>{c.content}</p>
                    } else if (c.type === 'link') {
                        return <p key={c.content}><a href="#">{c.content}</a></p>
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
                    onInvalid={handleNewCommentInvalid}
                    required
                    placeholder='Deixe seu feedback'
                    value={newComment}
                    onChange={handleNewCommentChange}
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                {comments.map((comment, index) => {
                    return (
                        <Comment
                            key={comment}
                            comment={comment}
                            onDeleteComment={handleDeleteComment}
                        />
                    )
                })}
            </div>
        </section>
    );
}

/*
pq nao colocar o index do array mesmo sendo único como key

post = [1,2,3,4]
        //index 0,1,2,3
pq o index nao muda de lugar mesmo array mudando 
então se o terceiro item mudar para primeiro ex
post = [1,4,3,2]
        // index ainda e o mesmo nao muda
ai ele cria tudo do zero pq ele nao identifica que mudou so o lugar dele 


*/