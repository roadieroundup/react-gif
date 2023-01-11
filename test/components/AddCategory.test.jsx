import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('tests in addCategory', () => {
	const value = 'kokun';

	test('should change the value of the text box', () => {
		render(<AddCategory onNewCategory={() => {}} />);

		const input = screen.getByRole('textbox');

		fireEvent.input(input, { target: { value: value } });

		expect(input.value).toBe(value);
	});

	test('should call onNewCategory if input has a value', () => {
		const onNewCategory = jest.fn();

		render(<AddCategory onNewCategory={onNewCategory} />);

		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: value } });

		fireEvent.submit(form);

		expect(input.value).toBe('');

		expect(onNewCategory).toHaveBeenCalled();
		expect(onNewCategory).toHaveBeenCalledTimes(1);
		expect(onNewCategory).toHaveBeenCalledWith(value);
	});

	test('should not call onNewCategory if input is blank', () => {
		const onNewCategory = jest.fn();

		render(<AddCategory onNewCategory={onNewCategory} />);

		const form = screen.getByRole('form');

		fireEvent.submit(form);

		expect(onNewCategory).not.toHaveBeenCalled();
		expect(onNewCategory).toHaveBeenCalledTimes(0);
		// expect(onNewCategory).toHaveBeenCalledWith(value);
	});
});
