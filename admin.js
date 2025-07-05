
function createMember() {
  const email = document.getElementById("newEmail").value.trim();
  const password = document.getElementById("newPass").value.trim();
  if (!email || !password) return alert("Vui lòng nhập đủ thông tin");

  let members = JSON.parse(localStorage.getItem("members") || "[]");
  members.push({ email, password });
  localStorage.setItem("members", JSON.stringify(members));
  showMembers();
}

function showMembers() {
  const members = JSON.parse(localStorage.getItem("members") || "[]");
  const tbody = document.querySelector("#memberTable tbody");
  tbody.innerHTML = "";
  members.forEach(m => {
    tbody.innerHTML += `<tr><td>${m.email}</td><td>${m.password}</td></tr>`;
  });
}

function uploadFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const uploaded = JSON.parse(localStorage.getItem("uploadedFiles") || "[]");
    uploaded.push({ name: file.name, content: e.target.result });
    localStorage.setItem("uploadedFiles", JSON.stringify(uploaded));
    showFiles();
  };
  reader.readAsDataURL(file);
}

function showFiles() {
  const files = JSON.parse(localStorage.getItem("uploadedFiles") || "[]");
  const list = document.getElementById("fileList");
  list.innerHTML = "";
  files.forEach(f => {
    list.innerHTML += `<li><a href="${f.content}" download="${f.name}">${f.name}</a></li>`;
  });
}

function logout() {
  localStorage.removeItem("role");
  window.location.href = "index.html";
}

showMembers();
showFiles();
