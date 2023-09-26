import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from './index';

describe('LoginPage', () => {
  test('renders the login page', () => {
    render(<LoginPage />);
    
    const pageTitle = screen.getByText('Login');
    expect(pageTitle).toBeInTheDocument();

    const usernameInput = screen.getByPlaceholderText('Enter your username');
    const passwordInput = screen.getByPlaceholderText('Enter your password');
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    const loginButton = screen.getByText('Login');
    expect(loginButton).toBeInTheDocument();
  });

  test('handles username and password input changes', () => {
    render(<LoginPage />);
    
    const usernameInput = screen.getByPlaceholderText('Enter your username');
    const passwordInput = screen.getByPlaceholderText('Enter your password');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(usernameInput).toHaveValue('testuser');
    expect(passwordInput).toHaveValue('password123');
  });

  test('handles login button click', () => {
    render(<LoginPage />);
    
    const usernameInput = screen.getByPlaceholderText('Enter your username');
    const passwordInput = screen.getByPlaceholderText('Enter your password');
    const loginButton = screen.getByText('Login');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    fireEvent.click(loginButton);
    //Write test for the login functionality
    const loggedMessage = screen.getByText('You logged in as testuser');
    expect(loggedMessage).toBeInTheDocument();


  });
});