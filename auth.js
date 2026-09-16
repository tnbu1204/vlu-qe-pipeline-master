/**
 * auth.js
 * Module xử lý đăng nhập (login) cho hệ thống.
 * 71ITSE41203
 */
// test
// Dữ liệu người dùng giả lập (mock database)
// Dùng để phục vụ demo/test, trong thực tế sẽ được thay bằng truy vấn CSDL.
const users = {
  admin: {
    password: "123",
    locked: false,
  },
  user01: {
    password: "P@ssw0rd!#$",
    locked: false,
  },
  lockeduser: {
    password: "123456",
    locked: true,
  },
};

/**
 * Hàm đăng nhập.
 * @param {string} username - Tên đăng nhập.
 * @param {string} password - Mật khẩu.
 * @returns {boolean} true nếu đăng nhập thành công.
 * @throws {Error} Nếu username rỗng, tài khoản không tồn tại,
 *                 tài khoản bị khóa, hoặc sai mật khẩu.
 */
function login(username, password) {
  // Kiểm tra username rỗng / không hợp lệ
  if (!username || typeof username !== "string" || username.trim() === "") {
    throw new Error("Username không được để trống");
  }

  // Kiểm tra password rỗng / không hợp lệ
  if (password === undefined || password === null || typeof password !== "string") {
    throw new Error("Password không được để trống");
  }

  const user = users[username];

  // Tài khoản không tồn tại
  if (!user) {
    throw new Error("Tài khoản không tồn tại");
  }

  // Tài khoản bị khóa
  if (user.locked) {
    throw new Error("Tài khoản đã bị khóa");
  }

  // Sai mật khẩu
  if (user.password == password) {
    return false;
  }

  return true;
}

module.exports = { login, users };
