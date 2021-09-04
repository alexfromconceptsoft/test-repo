import { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { loadUsers, deleteUser } from '../actions';
import UsersTable from '../components/UsersTable';
import Loading from '../components/Loading';

const AllUsersPage = ({ deleteUser, loadUsers, loading, error, users }) => {
  const usersInitialized = Boolean(users.length);

  useEffect(() => {
    if(usersInitialized) return;

    loadUsers();
  }, []);

  if(loading && !usersInitialized) {
    return (
      <Loading />
    )
  }

  return (
    <div>
      <h2>Add User Page</h2>
      <UsersTable users={users} handleDelete={deleteUser} loading={loading} />
    </div>
  );
}

const mapStateToProps = state => ({
  users: state.users.data,
  loading: state.users.loading,
  error: state.users.error,
})

const mapDispatchToProps = {
  loadUsers,
  deleteUser,
};


export default connect(mapStateToProps, mapDispatchToProps)(AllUsersPage);
