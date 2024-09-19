import styles from '@/styles/Films.module.css'
import Head from 'next/head'
import Link from "next/link"
import { getFilms } from '@/pages/api/getFilms'

export const getStaticProps = async () => {
    const data = await getFilms()
    return {
        props: { films: data.results }
    }
}

const Films = ({ films }) => {
    return (
        <div className={styles.films}>
            <Head>
                <title>Films</title>
            </Head>
            <ul className={styles.list}>
                {
                    films && films
                        .sort((a, b) => a.episode_id - b.episode_id)
                        .map(({ episode_id, title }) => (
                            <li key={episode_id}>
                                <Link href={`/films/${episode_id}`}>{`Episode ${episode_id} - ${title}`}</Link>
                            </li>
                        ))
                }
            </ul>
        </div>
    )
}

export default Films