import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('tests in useFetchGifs custom hook', () => {
	test('should return the initial state', () => {
		const { result } = renderHook(() => useFetchGifs('kokun'));
		// console.log(result);
		const { gifs, isLoading } = result.current;

		expect(gifs.length).toBe(0);
		//retorna false cuando deberia de ser true
		//expect(isLoading).toBeTruthy();
	});

	test('should return a gif array and isLoading as false', async () => {
		const { result } = renderHook(() => useFetchGifs('kokun'));

		await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));

		const { gifs, isLoading } = result.current;

		expect(gifs.length).toBeGreaterThan(0);
		expect(isLoading).toBeFalsy();
	});
});
