import React from "react"

const Form = ({ fields, handleSubmit }) =>
  <form onSubmit={handleSubmit}>
    {fields.map(({ label, placeholder }) => <div>
        <label>{`${label.charAt(0).toUpperCase()}${label.slice(1)}`}:</label>
        <br />
        <input key={label} placeholder={placeholder} /><hr />
      </div>)}
    <input type="submit" value="Submit" />
  </form>

export default Form
