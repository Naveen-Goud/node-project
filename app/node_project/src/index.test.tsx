import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from '../src/components/App';

describe('Index file', () => {
  it('renders without crashing', () => {
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    act(() => {
      require('../src/index');
    });

    expect(document.getElementById('root')?.textContent).toBe('Hello, TypeScript and React!');
  });
});
