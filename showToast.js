export function showToast(operation, shortName) {
  const toast = document.createElement("div");
  toast.classList.add("toast");

  if (operation === "add") {
    toast.textContent = `${shortName} has been added.`;
  } else {
    toast.textContent = `${shortName} has been deleted.`;
  }

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
}
