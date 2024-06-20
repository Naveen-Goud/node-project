"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
require("@testing-library/jest-dom/jest-globals");
require("@testing-library/jest-dom");
const App_1 = __importDefault(require("./App"));
test('renders hello message', () => {
    (0, react_2.render)(react_1.default.createElement(App_1.default, null));
    const helloElement = react_2.screen.getByText(/Hello, TypeScript and React!/i);
    expect(helloElement).toBeInTheDocument();
});
