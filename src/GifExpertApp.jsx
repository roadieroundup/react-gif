import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
// import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch']);

	//evitar usar push unu
	const onAddCategory = newCategory => {
		// no se puede editar categories, solo crear un nuevo categories
		if (categories.includes(newCategory)) return;
		setCategories([newCategory, ...categories]);
	};

	// console.log(categories);
	return (
		<>
			{/* titulo */}
			<h1>Gif Expert App</h1>

			{/* input/form */}
			{/* <AddCategory setCategories={setCategories}/> */}
			<AddCategory onNewCategory={onAddCategory} />

			{/* listado de res  */}

			{categories.map(category => (
				<GifGrid key={category} category={category} />
			))}

			{/* gif result */}
		</>
	);
};
