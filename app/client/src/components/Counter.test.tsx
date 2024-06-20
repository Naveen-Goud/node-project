// Counter.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react'; 
import Counter from './Counter';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
describe('Counter Component', () => {
    it('renders with initial count', () => {
        const { getByText } = render(<Counter initialCount={0} />);
        expect(getByText('Count: 0')).toBeInTheDocument();
    });

    it('increments the count', () => {
        const { getByText } = render(<Counter initialCount={0} />);
        fireEvent.click(getByText('Increment'));
        expect(getByText('Count: 1')).toBeInTheDocument();
    });
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
  interface GfgObj {
    name: string;
    type?: string;
  }
  
  test('check gfgObj toEqual', () => {
    let gfgObj: GfgObj = { name: "GFG" };
    gfgObj.type = "company";
    expect(gfgObj).toEqual({ name: "GFG", type: "company" });
  });

  test('check gfgObj toEqual', () => {
    let gfgObj: GfgObj = { name: "GFG" };
    gfgObj.type = "company";
    expect(gfgObj).toEqual({ name: "GFG", type: "company" });
  });