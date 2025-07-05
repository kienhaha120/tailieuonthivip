
function logout() {
  localStorage.removeItem("role");
  window.location.href = "index.html";
}

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
