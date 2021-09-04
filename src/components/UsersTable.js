import { Link } from "react-router-dom";

// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

const UsersTable = ({ users, loading, handleDelete }) => {
  return (
    <table border="1">
      <tr>
        <th>Edit</th>
        <th>Name</th>
        <th>Email Address</th>
        <th>Status</th>
        <th>Sex</th>
        <th>Delete</th>
      </tr>

      {users.map(user => {
        const { id, name, email, gender, status } = user;
        return (
          <tr key={id}>
            <td>
              <Link to={`/edit?id=${id}`}>Edit</Link>
            </td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{gender}</td>
            <td>{status}</td>
            <td>
              <button onClick={() => handleDelete(id)} disabled={loading}>
                Delete
              </button>
            </td>
          </tr>
        )
      })}
    </table>
  )
}

export default UsersTable;
