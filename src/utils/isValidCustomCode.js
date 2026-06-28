export const isValidCustomCode = (code) => {
  return /^[a-zA-Z0-9_-]{3,30}$/.test(code);
};