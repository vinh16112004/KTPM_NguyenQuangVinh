const validCredentials = {
  admin: '9999',
};

const lockedAccounts = ['locked_user'];

function login(username, password) {
  if (!username || typeof username !== 'string' || username.trim() === '') {
    return false;
  }

  if (!password || typeof password !== 'string') {
    return false;
  }

  if (lockedAccounts.includes(username)) {
    return false;
  }
// Xác thực đăng nhập người dùng - kiểm tra username/password hợp lệ

  return validCredentials[username] === password;
}

module.exports = { login };
