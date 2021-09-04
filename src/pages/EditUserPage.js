import { connect } from 'react-redux';
import EditUserForm from '../components/EditUserForm';
import { updateUser } from '../actions'

const EditUserPage = ({ user, loading, updateUser }) => {
  return (
    <div>
      <h2>Edit User Page</h2>
      <EditUserForm
        loading={loading}
        initialValues={user}
        onSubmit={updateUser}
      />
    </div>
  );
}

const mapStateToProps = state => {
  const query = new URLSearchParams(window.location.search);
  const user = state.users.data.find((user) => user.id === Number(query.get('id')));

  return {
    user,
    loading: state.users.loading,
  }
};

const mapDispatchToProps = {
  updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUserPage);;
