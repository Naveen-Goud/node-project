"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_utils_1 = require("react-dom/test-utils");
describe('Index file', () => {
    it('renders without crashing', () => {
        var _a;
        const root = document.createElement('div');
        root.id = 'root';
        document.body.appendChild(root);
        (0, test_utils_1.act)(() => {
            require('../src/index');
        });
        expect((_a = document.getElementById('root')) === null || _a === void 0 ? void 0 : _a.textContent).toBe('Hello, TypeScript and React!');
    });
});
