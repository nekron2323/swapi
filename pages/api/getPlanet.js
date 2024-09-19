export const getPlanet = (id) => {
    return new Promise((resolve, reject) => {
        fetch(`http://swapi.dev/api/planets/${id}`)
        .then(res => res.json())
        .then(resolve)
        .catch(reject)
    })
}