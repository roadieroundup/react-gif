import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('tests in GifGrid', () => {
	const category = 'Valorant';
	test('should show loading at the beggining', () => {
		useFetchGifs.mockReturnValue({
			gifs: [],
			isLoading: true,
		});

		render(<GifGrid category={category} />);
		screen.debug();
		// expect(screen.getByText('Loading...'));
		expect(screen.getByText(category));
	});

	test('should show items when gifs are loading useFetchGif', () => {
		const gifs = [
			{
				id: 'abc',
				title: 'whatever',
				url: 'https://aaaa.jpg',
			},
			{
				id: '123',
				title: 'whatever2',
				url: 'https://bbbbb.jpg',
			},
		];

		useFetchGifs.mockReturnValue({
			gifs: gifs,
			isLoading: false,
		});

		render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(gifs.length)
	});
});
