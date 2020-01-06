export const utils = {
  // this should be good enough for simple project like this ;)
  generateId: (): string => {
    return String(Math.random()).replace("0.", "") + Date.now();
  }
};
