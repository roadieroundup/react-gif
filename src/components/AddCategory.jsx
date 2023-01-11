import { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('');

	const onInputChange = ({ target }) => {
		setInputValue(target.value);
	};

	const onSubmit = event => {
		event.preventDefault();

		if (inputValue.trim().length <= 1) return;

		// en este contexto categories es lo que tiene dentro el useState
		// setCategories(categories => [inputValue, ...categories]);
		onNewCategory(inputValue.trim());
		setInputValue('');
	};

	return (
		<form onSubmit={onSubmit} aria-label='form'>
			<input
				type="text"
				placeholder="Search a gif"
				value={inputValue}
				onChange={onInputChange}
			/>
		</form>
	);
};


AddCategory.propTypes = {
	onNewCategory: PropTypes.func.isRequired
}