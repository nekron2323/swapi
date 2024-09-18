export const getStaticProps = async () => {
    const res = await fetch('https://swapi.dev/api/films')
    const data = await res.json()
    return {
        props: { films: data.results }
    }
}

const Films = ({ films }) => {
    return (
        <>
            <h1>Films</h1>
            <ul>
                {films && films.map(({ id, title }) => <li key={id}>{title}</li>)}
            </ul>
        </>
    )
}

export default Films