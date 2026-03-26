function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

function toggleTheme() {
    const icon = document.getElementById("themeIcon");

    console.log("clicou"); // 👈 teste

    if (icon.classList.contains("bi-moon")) {
        icon.classList.remove("bi-moon");
        icon.classList.add("bi-sun");
    } else {
        icon.classList.remove("bi-sun");
        icon.classList.add("bi-moon");
    }
}

const icon = document.getElementById("themeIcon");

function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  icon.classList.add("rotate");

  setTimeout(() => {
    icon.classList.remove("rotate");
  }, 300);
}