// import { useEffect, useState } from 'react';
// import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
	const { gifs, isLoading } = useFetchGifs(category);

	// console.log(isLoading)

	// const [gifs, setGifs] = useState([]);

	// useEffect(() => {
	// 	getGifs(category).then(newGifs => setGifs(newGifs));
	// }, []);

	return (
		<>
			<h3>{category}</h3>

			{isLoading && <h2>Cargando...</h2>}

			<div className="card-grid">
				{gifs.map(image => (
					<GifItem key={image.id} {...image} />
				))}
			</div>
		</>
	);
};
