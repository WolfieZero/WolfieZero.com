import { classList } from './class-list';

describe('classList', () => {
  it('returns a string of class names', () => {
    const result = classList(['foo', 'bar', ['foo', 'bar'], undefined, '']);
    expect(result).toBe('foo bar foo bar');
  });
});
