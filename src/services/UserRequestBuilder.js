import axios from 'axios';

const token = '5336d9f8d87dea49f7bacb41762fe2cd0dcf0fd02d8001259fc9a2a9585c8136'

class UserRequestBuilder {
  static config = {
    headers: { Authorization: `Bearer ${token}` }
  }

  static host = 'https://gorest.co.in/';

  static createUser(user) {
    return axios.post(
      this.host + 'public/v1/users',
      user,
      this.config,
    );
  }

  static allUsers() {
    return axios.get(this.host + 'public/v1/users');
  }

  static updateUser(user) {
    return axios.put(
      this.host + 'public/v1/users/' + user.id,
      user,
      this.config,
    );
  }

  static deleteUser(id) {
    return axios.delete(
      this.host + 'public/v1/users/' + id,
      this.config,
    )
  }
}


export default UserRequestBuilder;
