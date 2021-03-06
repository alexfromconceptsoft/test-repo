const ValidationEnhance = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
    <div>
      <label>
        {label}
      </label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched &&
          (error &&
            <span>
              {error}
            </span>)}
      </div>
    </div>
)


export default ValidationEnhance;
