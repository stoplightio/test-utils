function toString(this: any, ...args: any[]) {
  return `${this.name}(${args
    .map(argument => {
      if (Array.isArray(argument)) {
        return JSON.stringify(argument);
      } else if (typeof argument === 'object') {
        return JSON.stringify(argument);
      }
      return String(argument);
    })
    .join(', ')})`;
}

export function mockPassthroughImplementation(...fns: Array<jest.SpyInstance | Function>) {
  fns.forEach(fn => (fn as jest.SpyInstance).mockImplementation(toString.bind(fn)));
}
