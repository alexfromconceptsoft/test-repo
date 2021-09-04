import { Field } from 'redux-form'
import ValidationEnhance from './ValidationEnhance';
import Loading from './Loading';

const BaseForm = ({ handleSubmit, pristine, reset, submitting, labelSubmitButton, loading }) => (
  <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="name"
            component={ValidationEnhance}
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>

      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component={ValidationEnhance}
            type="email"
            placeholder="Email"
          />
        </div>
      </div>

      <div>
        <label>Gender</label>
        <div>
          <label>
            <Field name="gender" component="input" type="radio" value="male" />{' '}
            Male
          </label>
          <label>
            <Field name="gender" component="input" type="radio" value="female" />{' '}
            Female
          </label>
        </div>
      </div>

      <div>
        <label>Status</label>
        <div>
          <Field name="status" component="select">
            <option />
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </Field>
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={pristine || submitting || loading}
        >
          {labelSubmitButton}
        </button>
        <button
          type="button"
          disabled={pristine || submitting || loading}
          onClick={reset}
        >
          Cancel
        </button>
        {loading && <Loading />}
      </div>
    </form>
)

export default BaseForm;
