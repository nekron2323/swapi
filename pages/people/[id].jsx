import Head from 'next/head'
import Link from 'next/link'
import Heading from '@/cmp/Heading'
import { getPeople } from '@/pages/api/getPeople'
import styles from '@/styles/People.module.css'

export const getServerSideProps = async (context) => {
    const { id } = context.params
    const people = await getPeople(id)
    return {
        props: { people }
    }
}

const People = ({ people }) => {
    return (
        <div className={styles.people}>
            <Head>
                <title>{people.name}</title>
            </Head>
            <Heading text={people.name} />
            <hr />
            <Heading text='Character info' tag='h3' />
            <p>Height:<b></b> {people.height}</p>
            <p>Mass:<b></b> {people.mass}</p>
            <p>Hair color:<b></b> {people.hair_color}</p>
            <p>Skin color:<b></b> {people.skin_color}</p>
            <p>Eye color:<b></b> {people.eye_color}</p>
            <p>Birth year:<b></b> {people.birth_year}</p>
            <Link href={`/planets/${people.homeworld.id}`}>
                <p>Homeworld:<b></b> {people.homeworld.name}</p>
            </Link>
        </div>
    )
}

export default People