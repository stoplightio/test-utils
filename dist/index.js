"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toString(...args) {
    return `${this.name}(${args
        .map(argument => {
        if (Array.isArray(argument)) {
            return JSON.stringify(argument);
        }
        else if (typeof argument === 'object') {
            return JSON.stringify(argument);
        }
        return String(argument);
    })
        .join(', ')})`;
}
function mockPassthroughImplementation(...fns) {
    fns.forEach(fn => fn.mockImplementation(toString.bind(fn)));
}
exports.mockPassthroughImplementation = mockPassthroughImplementation;
//# sourceMappingURL=index.js.map