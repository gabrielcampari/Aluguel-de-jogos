function changeStatus(id) {
  let chosenGame = document.getElementById(`game-${id}`);

  if (chosenGame.classList.contains("dashboard__item__img--rented")) {
    chosenGame.classList.remove("dashboard__item__img--rented");
  } else {
    chosenGame.classList.add("dashboard__item__img--rented");
  }
}
