//hook is just a func that return something

import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = category => {
	const [gifs, setGifs] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getGifs(category)
			.then(newGifs => setGifs(newGifs))
			.then(setIsLoading(false));
	}, []);

	return {
		gifs: gifs,
		isLoading: isLoading,
	};
};
