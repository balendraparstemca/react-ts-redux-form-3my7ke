const validate = fields => values =>
  fields.reduce((errors, { label, errorMessage }) =>
    values[label] ? errors : { ...errors, [label]: errorMessage }, {})

export default validate
