/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce = (func: (props: any) => void, delay: number) => {
  let timeout: any;

  return (...args: any) => {
    const context = this;
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};
