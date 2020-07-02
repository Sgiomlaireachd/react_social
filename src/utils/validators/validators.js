export const required = (value) => {
  if (value) return;
  return "Field is required.";
};

export const maxLength = (length) => (value) => {
  if (value.length <= length) return;
  return `Value length must be less or equal than ${length}`;
};

export const minLength = (length) => (value) => {
  if (value.length >= length) return;
  return `Value length must be greater or equal than ${length}`;
};
