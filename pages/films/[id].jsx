import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import Heading from "@/cmp/Heading"
import { getFilm, getFilms } from "@/pages/api/getFilms"
import { getId } from "@/helpers/getIdFromUrl"
import styles from '@/styles/Film.module.css'

export const getStaticPaths = async () => {
    const data = await getFilms()
    const paths = data.results.map(({ episode_id }) => ({ params: { id: episode_id.toString() } }))
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async (context) => {
    const { id } = context.params
    const film = await getFilm(id)
    if (!film) return {
        notFound: true
    }
    return {
        props: { film }
    }
}
const Film = ({ film }) => {
    const [isOpenCharacters, setIsOpenCharacters] = useState(false)
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
            <hr />
            <Heading
                tag='h3'
                text={`${isOpenCharacters ? '-' : '+'} Characters`}
                onClick={_ => setIsOpenCharacters(prev => !prev)}
                style={{cursor: 'pointer'}}
            />
            <ul style={{ display: isOpenCharacters ? '' : 'none' }}>
                {film.characters.map(el =>
                    <li key={el.url}>
                        <Link href={`/people/${getId(el.url, 'people')}`}>
                            {el.name}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Film