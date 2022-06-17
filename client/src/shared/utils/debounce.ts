/* eslint-disable @typescript-eslint/no-unsafe-return */

type Timer = ReturnType<typeof setTimeout>;

const debounce = <F extends (...args: any) => any>(callback: F, delay: number) => {
  let timeId: Timer;

  return (arg?: any) => {
    if (timeId) clearTimeout(timeId);
    timeId = setTimeout(() => callback(arg), delay * 1000);
  };
};

export default debounce;
