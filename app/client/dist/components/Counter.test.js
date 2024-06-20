"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Counter.test.tsx
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const Counter_1 = __importDefault(require("./Counter"));
require("@testing-library/jest-dom/jest-globals");
require("@testing-library/jest-dom");
describe('Counter Component', () => {
    it('renders with initial count', () => {
        const { getByText } = (0, react_2.render)(react_1.default.createElement(Counter_1.default, { initialCount: 0 }));
        expect(getByText('Count: 0')).toBeInTheDocument();
    });
    it('increments the count', () => {
        const { getByText } = (0, react_2.render)(react_1.default.createElement(Counter_1.default, { initialCount: 0 }));
        react_2.fireEvent.click(getByText('Increment'));
        expect(getByText('Count: 1')).toBeInTheDocument();
    });
    it('decrements the count', () => {
        const { getByText } = (0, react_2.render)(react_1.default.createElement(Counter_1.default, { initialCount: 1 }));
        react_2.fireEvent.click(getByText('Decrement'));
        expect(getByText('Count: 0')).toBeInTheDocument();
    });
});
