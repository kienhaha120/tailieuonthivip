
function getMembers() {
  return JSON.parse(localStorage.getItem("members") || "[]");
}

function setMembers(members) {
  localStorage.setItem("members", JSON.stringify(members));
}

function addMember() {
  const email = document.getElementById("newEmail").value.trim();
  const password = document.getElementById("newPass").value.trim();
  if (!email || !password) return alert("Vui lòng nhập đủ thông tin");
  const members = getMembers();
  members.push({ email, password });
  setMembers(members);
  alert("✔️ Tạo tài khoản thành công!");
  document.getElementById("newEmail").value = "";
  document.getElementById("newPass").value = "";
}

function logout() {
  localStorage.removeItem("role");
  window.location.href = "index.html";
}

// Upload file
document.getElementById("fileInput").addEventListener("change", function (e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (evt) {
    const files = JSON.parse(localStorage.getItem("uploadedFiles") || "[]");
    files.push({ name: file.name, content: evt.target.result });
    localStorage.setItem("uploadedFiles", JSON.stringify(files));
    displayFiles();
  };
  reader.readAsDataURL(file);
});

function displayFiles() {
  const files = JSON.parse(localStorage.getItem("uploadedFiles") || "[]");
  const ul = document.getElementById("fileList");
  ul.innerHTML = "";
  files.forEach(f => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${f.content}" download="${f.name}">${f.name}</a>`;
    ul.appendChild(li);
  });
}

displayFiles();
