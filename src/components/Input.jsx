const Input = ({ label, type, name, required, onChange }) => {
  return (
    <label className='block mb-2'>
      { label }
      <input
        type={type}
        name={name}
        required={required}
        className='input-field border p-2 rounded w-full mt-1'
        onChange={onChange}
      />
    </label>
  );
};  

export default Input;