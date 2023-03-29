import {
  validateDate,
  validationDescription,
  validationName,
  validationPrice,
  validationTypeRoom,
} from './validationFunction';

describe('Form validation', () => {
  it('form data', () => {
    expect(validationName('Name')).toBe('Name');
    expect(validationName('name')).toBe('');
    expect(validationPrice('123')).toBe(123);
    expect(validationPrice('123df')).toBe(0);
    expect(validationDescription('description')).toBe('description');
    expect(validationDescription('')).toBe('');
    expect(validateDate('2011-01-01')).toBe('2011-01-01');
    expect(validateDate(undefined)).toBe('');
    expect(validationTypeRoom('0')).toBe('');
    expect(validationTypeRoom('living room')).toBe('living room');
  });
});
