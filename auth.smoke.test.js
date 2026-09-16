/**
 * auth.smoke.test.js
 * Smoke Test: chỉ kiểm tra "đường đi thẳng" (happy path) quan trọng nhất
 * để xác nhận chức năng cốt lõi hoạt động trước khi chạy các test sâu hơn.
 */

const { login } = require("./auth");

describe("Smoke Test - Login", () => {
  test("Đăng nhập đúng (admin/123) trả về true", () => {
    expect(login("admin", "123")).toBe(true);
  });
});
