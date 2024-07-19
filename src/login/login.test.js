import React,{act} from 'react';
import {render, screen} from '@testing-library/react';
import Login from './Login';

test("Render the email and password and submit",() =>{
    render( <Login /> );
    const logedValues = screen.getByText(/email/i)
    expect(logedValues).toBeInTheDocument();

    const logedValue = screen.getByText(/password/i)
    expect(logedValue).toBeInTheDocument();

    expect(screen.getByRole('button',{name:/Login/i})).toBeInTheDocument();
})