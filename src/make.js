module.exports = function make(...argm) {
  return function func(...values) {
    if (typeof values[0] === 'function') {
      return argm.reduce(values[0]);
    }
    values.forEach(item => argm.push(item));
    return func;
  };
};
