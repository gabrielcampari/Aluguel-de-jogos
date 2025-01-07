function changeStatus(id) {
  let chosenGame = document.getElementById(`game-${id}`);
  let button = chosenGame.querySelector(".dashboard__item__button");
  let image = chosenGame.querySelector(".dashboard__item__img");

  if (image.classList.contains("dashboard__item__img--rented")) {
    image.classList.remove("dashboard__item__img--rented");
    button.classList.remove("dashboard__item__button--return");
    button.textContent = "Alugar";
  } else {
    image.classList.add("dashboard__item__img--rented");
    button.classList.add("dashboard__item__button--return");
    button.textContent = "Devolver";
  }
}
