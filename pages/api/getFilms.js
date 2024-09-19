export const getFilms = () => {
    return new Promise((resolve, reject) => {
        fetch('http://swapi.dev/api/films')
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(reject)
    })
}

export const getFilm = (id) => {
    return new Promise((resolve, reject) => {
        let film
        fetch(`https://swapi.dev/api/films/${id}`)
            .then(res => res.json())
            .then(data => {
                film = data
                return Promise.all(data.characters.map(el => fetch(el)))
            })
            .then(chrs => Promise.all(chrs.map(el => el.json())))
            .then(chrs => {
                film.characters = chrs
                resolve(film)
            })
            .catch(reject)        
    })
}