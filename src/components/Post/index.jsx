import styles from './styles.module.css'

export const Post = () => {

    return (
        <section className={styles.container}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <img src="https://i.pravatar.cc/150?img=24" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Keith Weber</strong>
                        <span>Dev Front-end</span>
                    </div>
                </div>
                <time title='2 de Junho a 09:31h' dateTime='2022-06-02 09:41:40'>Publicado há 1h</time>
            </header>
            <article className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p> 👉{' '}<a href="">keith.design/doctorcare</a></p>

                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </article>
        </section>
    );
}