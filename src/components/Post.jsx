import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/51975928?v=4" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Nílton Silva Ferreira</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="02 de Abril de 2023, as 18:52h" dateTime="2023-04-02 06:52:00">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href='https://github.com/NiltonSilva'>👉 {" "}github.com/NiltonSilva</a></p>

                <p>
                    <a href="">#novoprojeto</a> {" "}
                    <a href="">#nlw</a> {" "}
                    <a href="">#rocketseat</a>     
                </p>
            </div>

            <form className={styles.commentForm} action="">
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentário"></textarea>

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}