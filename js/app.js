let hireGames = 0;

function showHireGames() {
  console.log(`O número de jogos alugados atualmente são de ${hireGames}`);
}

function changeStatus(id) {
  let chosenGame = document.getElementById(`game-${id}`);
  let button = chosenGame.querySelector(".dashboard__item__button");
  let image = chosenGame.querySelector(".dashboard__item__img");

  if (image.classList.contains("dashboard__item__img--rented")) {
    if (confirm("Tem certeza que deseja devolver este jogo?")) {
      image.classList.remove("dashboard__item__img--rented");
      button.classList.remove("dashboard__item__button--return");
      button.textContent = "Alugar";
      hireGames--;
    }
  } else {
    image.classList.add("dashboard__item__img--rented");
    button.classList.add("dashboard__item__button--return");
    button.textContent = "Devolver";
    hireGames++;
  }

  showHireGames();
}

document.addEventListener("DOMContentLoaded", function () {
  hireGames = document.querySelectorAll(".dashboard__item__img--rented").length;
  showHireGames();
});
