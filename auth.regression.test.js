const { login } = require('./auth');

describe('login regression suite', () => {
  test('fails with wrong password', () => {
    expect(login('admin', 'wrongpass')).toBe(false);
  });

  test('fails with empty username', () => {
    expect(login('', '123')).toBe(false);
  });

  test('fails with password containing special characters', () => {
    expect(login('admin', '!@#$%^&*')).toBe(false);
  });

  test('fails when account is locked', () => {
    expect(login('locked_user', '123')).toBe(false);
  });

  test('fails with missing username', () => {
    expect(login(undefined, '123')).toBe(false);
  });

  test('fails with missing password', () => {
    expect(login('admin', undefined)).toBe(false);
  });
});
