const _fields = [
  {
    label: "title",
    type: "input",
  },
  {
    label: "categories",
    type: "input",
  },
  {
    label: "content",
    type: "textarea",
  },
]

const fields = _fields.map(field => ({ ...field, placeholder: `${field.label.charAt(0).toUpperCase()}${field.label.slice(1)}`, errorMessage: `Enter ${field.label}` }))

export default fields
