/**
 * auth.regression.test.js
 * Regression Test: kiểm tra đầy đủ các trường hợp, đặc biệt là các
 * trường hợp ngoại lệ / biên (edge cases), để đảm bảo các thay đổi sau này
 * không làm hỏng các luồng đã hoạt động đúng trước đó.
 */

const { login } = require("./auth");

describe("Regression Test - Login", () => {
  test("Đăng nhập đúng (admin/123) trả về true", () => {
    expect(login("admin", "123")).toBe(true);
  });

  test("Sai mật khẩu → trả về false", () => {
    expect(login("admin", "sai_mat_khau")).toBe(false);
  });

  test("Username rỗng → ném lỗi", () => {
    expect(() => login("", "123")).toThrow("Username không được để trống");
  });

  test("Username chỉ chứa khoảng trắng → ném lỗi", () => {
    expect(() => login("   ", "123")).toThrow("Username không được để trống");
  });

  test("Password rỗng (undefined) → ném lỗi", () => {
    expect(() => login("admin", undefined)).toThrow(
      "Password không được để trống"
    );
  });

  test("Tài khoản không tồn tại → ném lỗi", () => {
    expect(() => login("khong_ton_tai", "123")).toThrow(
      "Tài khoản không tồn tại"
    );
  });

  test("Tài khoản bị khóa → ném lỗi", () => {
    expect(() => login("lockeduser", "123456")).toThrow(
      "Tài khoản đã bị khóa"
    );
  });

  test("Mật khẩu chứa ký tự đặc biệt đúng → trả về true", () => {
    expect(login("user01", "P@ssw0rd!#$")).toBe(true);
  });

  test("Mật khẩu chứa ký tự đặc biệt nhưng sai → trả về false", () => {
    expect(login("user01", "P@ssw0rd!#$WRONG")).toBe(false);
  });
});
