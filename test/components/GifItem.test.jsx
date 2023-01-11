import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('GifItem tests', () => {
	const title = 'Kokun';
	const url = 'http://whatever.gif/';
	test('should match snapshot', () => {
		const { container } = render(<GifItem title={title} url={url} />);

		expect(container).toMatchSnapshot();
	});

	test('should show the gif with the url and the alt given', () => {
		render(<GifItem title={title} url={url} />);
		//mostrar en un punto en especifico
		// screen.debug();

		// expect(screen.getByRole('img').src).toBe(url);
		// expect(screen.getByRole('img').alt).toBe(title);

		const { src, alt } = screen.getByRole('img');
		expect(src).toBe(url);
		expect(alt).toBe(title);
	});

	test('should show the title inside the component', () => {
		render(<GifItem title={title} url={url} />);

		expect(screen.getByText(title)).toBeTruthy();
	});
});
