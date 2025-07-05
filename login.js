
const adminAccount = { email: "admin@gmail.com", password: "123456" };
let members = JSON.parse(localStorage.getItem("members") || "[]");

function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("msg");

  if (email === adminAccount.email && password === adminAccount.password) {
    localStorage.setItem("role", "admin");
    window.location.href = "admin.html";
    return;
  }

  const member = members.find(u => u.email === email && u.password === password);
  if (member) {
    localStorage.setItem("role", "member");
    localStorage.setItem("memberEmail", email);
    window.location.href = "member.html";
    return;
  }

  msg.innerText = "Sai email hoặc mật khẩu!";
}
