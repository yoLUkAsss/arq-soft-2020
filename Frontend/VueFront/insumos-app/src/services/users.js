import client from '../client'

const subUrl = '/users'

const Users = {
  getAll (params) {
    return client().get(subUrl)
  },
  getById (id) {
    return client().get(subUrl + '/' + id)
  },
  create (body) {
    return client().post(subUrl, body)
  },
  update (id, body) {
    return client().put(subUrl + '/' + id, body)
  },
  delete (id) {
    return client().delete(subUrl + '/' + id)
  }
}

export default Users
