import React from 'react';
import axios from 'axios';
import App from './App';
import { render } from '@testing-library/react';

describe('App', () => {
	describe('deals with api', () => {
		const mockThen = jest.fn();
		const mockGet = jest.fn(() => ({ then: mockThen }));
		const mockCreate = jest.fn(() => ({
			get: mockGet,
		}));

		beforeEach(() => {
			jest.mock('axios');
			axios.create = mockCreate;

			jest.clearAllMocks();
		});

		it('calls axios create with baseurl and responseType', () => {
			const wrapper = render(<App />);

			expect(mockCreate).toHaveBeenCalledWith({
				baseURL: 'http://localhost:3010/',
				responseType: 'text',
			});
		});

		it('calls axios get with url', () => {
			const wrapper = render(<App />);

			expect(mockGet).toHaveBeenCalledWith('/api/v1/nav/shop/');
		});

		it('calls then with a function to handle api response', () => {
			const wrapper = render(<App />);

			expect(mockThen).toHaveBeenCalledWith(expect.any(Function));
		});
	});
});
