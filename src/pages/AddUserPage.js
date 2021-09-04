import { connect } from 'react-redux';
import AddUserForm from '../components/AddUserForm';
import { createUser } from '../actions';

const AddUserPage = ({ createUser, loading }) => {
  return (
    <div>
      <h2>Add User Page</h2>
      <AddUserForm onSubmit={createUser} loading={loading} />
    </div>
  );
}

const mapStateToProps = state => ({
    loading: state.users.loading,
});

const mapDispatchToProps = {
  createUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserPage);;
