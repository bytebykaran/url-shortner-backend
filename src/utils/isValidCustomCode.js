export const isValidCustomCode = (code) => {
  return /^[a-zA-Z0-9_-]{6,30}$/.test(code);
};