import { getId } from '@/helpers/getIdFromUrl'

export const getPeople = (id) => {
    return new Promise((resolve, reject) => {
        let people
        fetch(`http://swapi.dev/api/people/${id}`)
            .then(res => res.json())
            .then(data => {
                people = data
                return fetch(data.homeworld)
            })
            .then(res => res.json())
            .then(data => {
                people.homeworld = {
                    name: data.name,
                    id: getId(data.url, 'planets')
                }
                resolve(people)
            })
            .catch(reject)
    })
}