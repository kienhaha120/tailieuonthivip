
const adminEmail = "admin@gmail.com";
const adminPassword = "123456";
const memberKey = "members";

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("msg");

  if (email === adminEmail && password === adminPassword) {
    localStorage.setItem("role", "admin");
    window.location.href = "admin.html";
    return;
  }

  const members = JSON.parse(localStorage.getItem(memberKey) || "[]");
  const matched = members.find(m => m.email === email && m.password === password);

  if (matched) {
    localStorage.setItem("role", "member");
    localStorage.setItem("memberEmail", email);
    window.location.href = "member.html";
  } else {
    msg.innerText = "Sai tài khoản hoặc mật khẩu!";
  }
});
