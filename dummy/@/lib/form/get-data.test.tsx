import {describe, expect, it} from 'vitest';
import {getFormData} from './get-data'
import { Result } from 'postcss';




describe('getFormData', () => {
	it('should return form data', () => {
		const form = document.createElement("form");
		form.innerHTML = `<input type="text" name="name" value="John">
		<input type="text" name="age" value={30}>
		<input type="text" name="city" value="New York">`;
		
		expect(getFormData(form)).toStrictEqual({"name":"John", "age":30, "city":"New York"});
	})
})