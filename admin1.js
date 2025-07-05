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
  alert("✔️ Đã tạo thành viên!");
  document.getElementById("newEmail").value = "";
  document.getElementById("newPass").value = "";
}

function uploadFile() {
  const file = document.getElementById("fileInput").files[0];
  const lop = document.getElementById("classSelect").value;
  const mon = document.getElementById("subjectSelect").value;
  if (!file || !lop || !mon) return alert("Hãy chọn đầy đủ lớp, môn và file");
  const reader = new FileReader();
  reader.onload = function (evt) {
    const files = JSON.parse(localStorage.getItem("uploadedFiles") || "[]");
    files.push({ name: file.name, content: evt.target.result, lop, mon });
    localStorage.setItem("uploadedFiles", JSON.stringify(files));
    displayFiles();
  };
  reader.readAsDataURL(file);
}

function displayFiles() {
  const files = JSON.parse(localStorage.getItem("uploadedFiles") || "[]");
  const ul = document.getElementById("fileList");
  ul.innerHTML = "";
  files.forEach(f => {
    const li = document.createElement("li");
    li.innerHTML = `<b>${f.lop} - ${f.mon}:</b> <a href="${f.content}" download="${f.name}">${f.name}</a>`;
    ul.appendChild(li);
  });
}

function logout() {
  localStorage.removeItem("role");
  window.location.href = "index.html";
}

displayFiles();
