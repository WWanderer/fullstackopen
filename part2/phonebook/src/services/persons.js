import axios from 'axios'
const servUrl = '/api/persons'

const getAll = () => {
    const req = axios.get(servUrl)
    return req.then(rsp => rsp.data)
}

const create = (person) => {
    const req = axios.post(servUrl, person)
    return req.then(rsp => rsp.data)
}

const update = (person) => {
    const req = axios.put(`${servUrl}/${person.id}`, person)
    return req.then(rsp => rsp.data)
}

const del = (person) => {
    const req = axios.delete(`${servUrl}/${person.id}`)
    return req.then(rsp => rsp.data)
}

export default { getAll, update, create, del }
