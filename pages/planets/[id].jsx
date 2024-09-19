import Head from 'next/head'
import { getPlanet } from '@/pages/api/getPlanet'
import Heading from '@/cmp/Heading'
import styles from '@/styles/Planet.module.css'

export const getServerSideProps = async (context) => {
    const { id } = context.params
    const planet = await getPlanet(id)
    return {
        props: { planet }
    }
}

const Planet = ({ planet }) => {
    return (
        <div className={styles.planet}>
            <Head>
                <title>{planet.name}</title>
            </Head>
            <Heading text={planet.name} />
            <hr />
            <Heading text='Planet info' tag='h3' />
            <p>Rotation period:<b></b> {planet.rotation_period}</p>
            <p>Orbital period:<b></b> {planet.orbital_period}</p>
            <p>Diameter:<b></b> {planet.diameter}{planet.diameter ? 'm' : ''}</p>
            <p>Climate:<b></b> {planet.climate}</p>
            <p>Gravity:<b></b> {planet.gravity}</p>
            <p>Terrain:<b></b> {planet.terrain}</p>
            <p>Surface water:<b></b> {planet.surface_water}</p>
            <p>Population:<b></b> {planet.population}</p>
        </div>
    )
}

export default Planet