import {describe, expect, it} from 'vitest';
import {useToggle} from './use-toggle'
import { renderHook } from '@testing-library/react';

describe('useToggle', () => {
	it('should return initial value', () => {
		const {result} = renderHook(() => useToggle(true));
		const value = result.current[0]
		expect(value).toBeTruthy();
	})
	it('should return toggled value', () => {
		const {result} = renderHook(() => useToggle(true));
		const toggle = result.current[1];
		expect(toggle()).toBeFalsy();

	})
})
