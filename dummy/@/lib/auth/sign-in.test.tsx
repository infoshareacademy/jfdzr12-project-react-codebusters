import {describe, expect, it, vi} from 'vitest';
import {FormEvent} from 'react'
import {signIn, SignInForm} from './sign-in'
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import {getFormData} from '../form/get-data';
import React from 'react';

describe('SignInForm', () => {
	it('should display email input', () => {
		const {baseElement} = render(<SignInForm />);
		const email = baseElement.querySelector('input[type="email"]');
		expect(email).toBeTruthy();
	})
	it('should display password input', () => {
	const {baseElement} = render(<SignInForm />);
	const password = baseElement.querySelector('input[type="password"]');
	expect(password).toBeTruthy();
})

	it('should display sign in button', () => {
	
	const {baseElement} = render(<SignInForm />);
	const button = baseElement.querySelector('button[type="submit"]');
	expect(button).toBeTruthy();
	})


	it.only('should be submitted with email and password', async() => {
		const onSubmit = vi.fn((event: FormEvent<HTMLFormElement>) => getFormData(event.currentTarget))

		 render(<SignInForm onSubmit={onSubmit}/>)
		const email = screen.getByRole('textbox', {name: "Email"});
		const password = screen.getByRole('textbox', {name: "Password"});
		const button = screen.getByRole('button');
		 // when
		fireEvent.change(email, { target: { value: 'mariuszkowalski@onet.pl' } });
		fireEvent.change(password, { target: { value: 'Mariusz1234!' } })
		fireEvent.click(button);



await waitFor(() => {
	expect(onSubmit).toHaveBeenCalled();
  });

	})
})


// describe('signIn', () => {
// 	it.todo('should return `wrong email` error' () => {
// 		expect(signIn()).toBe()

// 	})
// 	it.todo('should return `invalid password` error')
// 	it.todo('should authenticate user')
// })
