import React from 'react';
import { render } from '@testing-library/react';
import { ItemDisplay } from './MainComponent.js';

describe('Components', () => {
	describe('ItemDisplay', () => {
		it('can render with invalid data', () => {
			const wrapper = render(<ItemDisplay item={{}} />);

			expect(wrapper).toMatchSnapshot();
		});

		it('renders with data', () => {
			const wrapper = render(
				<ItemDisplay
					item={{
						name: 'some product name',
						variants: [
							{
								sku: 'BALOO',
								inStock: false,
								thumbnail: '/url/moorl/kaloo.jpg',
								price: '80$',
							},
							{
								sku: 'PALOO',
								inStock: true,
								thumbnail: '/url/moorl/Paloo.jpg',
								price: '90$',
							},
						],
					}}
				/>,
			);

			expect(wrapper).toMatchSnapshot();
		});

		it('shows all variants', async () => {
			const { findAllByTestId } = render(
				<ItemDisplay
					item={{
						name: 'some product name',
						variants: [
							{ sku: 'BALOO', inStock: false, thumbnail: '/url/moorl/kaloo.jpg' },
							{ sku: 'PALOO', inStock: true, thumbnail: '/url/moorl/Paloo.jpg' },
							{ sku: 'TALOO', inStock: true, thumbnail: '/url/moorl/taloo.jpg' },
						],
					}}
				/>,
			);

			expect(await findAllByTestId('variant-show')).toHaveLength(3);
		});
	});
});
