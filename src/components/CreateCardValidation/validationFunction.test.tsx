import {
  isValidateDate,
  isValidationDescription,
  isValidationName,
  isValidationPrice,
  isValidationTypeRoom,
} from './validationFunction';

describe('Form validation', () => {
  it('form data', () => {
    expect(isValidationName('Name')).toBe('Name');
    expect(isValidationName('name')).toBe('');
    expect(isValidationPrice('123')).toBe(123);
    expect(isValidationPrice('123df')).toBe(0);
    expect(isValidationDescription('description')).toBe('description');
    expect(isValidationDescription('')).toBe('');
    expect(isValidateDate('2011-01-01')).toBe('2011-01-01');
    expect(isValidateDate(undefined)).toBe('');
    expect(isValidationTypeRoom('0')).toBe('');
    expect(isValidationTypeRoom('living room')).toBe('living room');
  });
});
