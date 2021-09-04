import { reduxForm } from 'redux-form'
import BaseForm from './BaseForm';
import { validate } from '../helpers';

const EditUserForm = (props) => {
  return <BaseForm {...props} labelSubmitButton='Edit' />
}

export default reduxForm({
  form: 'editUser',
  validate,
})(EditUserForm);
