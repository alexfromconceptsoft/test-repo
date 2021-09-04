const hasNumber = (username) => {
  return /\d/.test(username);
}

export const validate = (values) => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  } else if(values.name.length < 3) {
    errors.name = 'Cant be so short';
  } else if (hasNumber(values.name)) {
    errors.name = 'Doesnt have to contain numbers';
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}
