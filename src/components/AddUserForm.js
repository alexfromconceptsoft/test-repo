import { reduxForm } from 'redux-form'
import BaseForm from './BaseForm';
import { validate } from '../helpers';

const AddUserForm = (props) => {
  return <BaseForm {...props} labelSubmitButton='Submit'/>;
}

export default reduxForm({
  form: 'addUser',
  validate,
})(AddUserForm);
