const FormRow = ({type,name,value,handleChange,labelText }) => {
  return <div className='form-row'>
        <label htmlFor={name} className='form-label'>
          {name || labelText}
        </label>
      <input
      type={type}
      id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className='form-input' />
      </div>
}

export default FormRow