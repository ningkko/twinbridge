const path = window.location.pathname.split("/").pop() || "index.html";

for (const link of document.querySelectorAll(".nav-links a")) {
  if (link.getAttribute("href") === path) {
    link.classList.add("active");
  }
}
