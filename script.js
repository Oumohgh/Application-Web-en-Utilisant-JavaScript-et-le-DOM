
const questions = [
  {
    question: "1. Que signifie HTML ?",
    options: ["Hyper Text Markup Language", "Hyper Transfer Markup Language", "Hyperlink and Text Markup Language", "Hyper Tool Multi-language"],
    correct: 0
  },
  {
    question: "2. Que signifie CSS ?",
    options: ["Cascading Style Sheets", "Computer Style Sheet", "Colorful Style Sheet", "Creative Style Sheet"],
    correct: 0
  },
  {
    question: "3. A quoi sert le HTML ?",
    options: ["Créer la structure d’une page web", "Styliser la page", "Ajouter des animations", "Creer des bases de donnees"],
    correct: 0
  },
  {
    question: "4. Que permet JavaScript ?",
    options: ["Creer des styles", "Programmer le comportement des pages", "Structurer le contenu", "Creer un serveur"],
    correct: 1
  },
  {
    question: "5. Lequel n’est pas un langage de programmation ?",
    options: ["Python", "HTML", "Java", "JPEG"],
    correct: 3
  }
];

let questionActuelle = 0;
let reponsesUtilisateur = [];

// Fonction pour afficher une question
function afficherQuestion() {
  const conteneur = document.getElementById("quiz-container");
  const q = questions[questionActuelle];

  let contenu = "<div class='mb-4'>";
  contenu += "<h2 class='text-lg font-semibold mb-4'>" + q.question + "</h2>";

  for (let i = 0; i < q.options.length; i++) {
    let checked = reponsesUtilisateur[questionActuelle] === i ? "checked" : "";
    contenu += `
      <label class="block mb-2 cursor-pointer">
        <input type="radio" name="question" value="${i}" class="mr-2 accent-green-500" ${checked}>
        ${q.options[i]}
      </label>
    `;
  }

  contenu += "</div>";
  conteneur.innerHTML = contenu;

  // Gestion des boutons
  document.getElementById("prevBtn").disabled = questionActuelle === 0;
  document.getElementById("nextBtn").classList.toggle("hidden", questionActuelle === questions.length - 1);
  document.getElementById("submitContainer").classList.toggle("hidden", questionActuelle !== questions.length - 1);
}

// Sauvegarder la réponse sélectionnée
function enregistrerReponse() {
  const reponse = document.querySelector('input[name="question"]:checked');
  if (reponse) {
    reponsesUtilisateur[questionActuelle] = parseInt(reponse.value);
  }
}

// Bouton suivant
document.getElementById("nextBtn").addEventListener("click", function() {
  enregistrerReponse();
  if (questionActuelle < questions.length - 1) {
    questionActuelle++;
    afficherQuestion();
  }
});

// Bouton précédent
document.getElementById("prevBtn").addEventListener("click", function() {
  enregistrerReponse();
  if (questionActuelle > 0) {
    questionActuelle--;
    afficherQuestion();
  }
});

// Bouton Terminer
document.getElementById("submitBtn").addEventListener("click", function() {
  enregistrerReponse();

  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    if (reponsesUtilisateur[i] === questions[i].correct) {
      score += 2;
    }
  }

  document.getElementById("quiz-container").innerHTML = "";
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("score").textContent = "Votre score : " + score + " / " + (questions.length * 2);

  if (score >= 6) {
    document.getElementById("feedback").textContent = "Bravo !";
  } else {
    document.getElementById("feedback").textContent = "Continuez a vous entrainerer";
  }
});

// Recommencer le quiz
document.getElementById("restartBtn").addEventListener("click", function() {
  questionActuelle = 0;
  reponsesUtilisateur = [];
  document.getElementById("result").classList.add("hidden");
  afficherQuestion();
});

// Afficher la première question
afficherQuestion();