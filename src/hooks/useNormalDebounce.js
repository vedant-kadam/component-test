const normalDebounce = (fun, delay) => {
  let currentDebounceTime = null;

  return function (...args) {
    clearTimeout(currentDebounceTime);
    currentDebounceTime = setTimeout(() => {
      fun.call(this, ...args);
    }, delay);
  };
};
