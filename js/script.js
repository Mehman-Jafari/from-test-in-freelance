const checkboxs = document.querySelectorAll(".catigory-actions__input");

checkboxs.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      checkbox.classList.add("active");
    } else {
      checkbox.classList.remove("active");
    }
  });
});
