import styles from './styles.module.css'
import { PencilLine } from 'phosphor-react'

export const Sidebar = () => {

    return (
        <aside className={styles.container}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
            />
            <div className={styles.profile}>
                <img src="https://github.com/jeffersoncharlles.png" alt="Jefferson Charlles" />
                <strong>Jefferson Charlles</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}