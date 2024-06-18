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

    it('decrements the count', () => {
        const { getByText } = render(<Counter initialCount={1} />);
        fireEvent.click(getByText('Decrement'));
        expect(getByText('Count: 0')).toBeInTheDocument();
    });
});
