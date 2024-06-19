import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

import App from './App';

test('renders hello message', () => {
  render(<App />);
  const helloElement = screen.getByText(/Hello, TypeScript and React!/i);
  expect(helloElement).toBeInTheDocument();
});
test('check gfgObj toEqual', () => {
  let gfgObj: { name: string; type?: string } = { name: "GFG" };
  gfgObj.type = "company";
  expect(gfgObj).toEqual({ name: "GFG", type: "company" });
});
test('check gfgObj toEqual', () => {
  let gfgObj: { name: string; type?: string } = { name: "GFG" };
  gfgObj.type = "company";
  expect(gfgObj).toEqual({ name: "GFG", type: "company" });
});

interface GfgObj {
  name: string;
  type?: string;
}

test('check gfgObj toEqual', () => {
  let gfgObj: GfgObj = { name: "GFG" };
  gfgObj.type = "company";
  expect(gfgObj).toEqual({ name: "GFG", type: "company" });
});