// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders VicunaSpectra title', () => {
    render(<App />);
    const titleElement = screen.getByText(/VicunaSpectra/i);
    expect(titleElement).toBeInTheDocument();
});
