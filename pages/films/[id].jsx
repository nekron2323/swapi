import Heading from "@/cmp/Heading"
import Head from "next/head"
import styles from '@/styles/Film.module.css'

export const getStaticPaths = async () => {
    const res = await fetch('https://swapi.dev/api/films')
    const data = await res.json()
    const paths = data.results.map(({ episode_id }) => ({ params: { id: episode_id.toString() } }))
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async (context) => {
    const { id } = context.params

    const res = await fetch(`https://swapi.dev/api/films/${id}`)
    const film = await res.json()
    if (!film) return {
        notFound: true
    }
    return {
        props: { film }
    }
}
const Film = ({ film }) => {
    console.log(film);
    
    return (
        <div className={styles.film}>
            <Head>
                <title>{film.title}</title>
            </Head>
            <Heading text={film.title} />
            <hr />
            <Heading text='Film description' tag='h3' />
            <p>{film.opening_crawl}</p>
            <hr />
            <Heading text='Film info' tag='h3' />
            <p><b>Director:</b> {film.director}</p>
            <p><b>Producer:</b> {film.producer}</p>
            <p><b>Release date:</b> {new Date(film.release_date).toLocaleDateString()}</p>
        </div>
    )
}

export default Film

function dateFormat(date) {
    return new Date(date).toLocaleDateString()
}