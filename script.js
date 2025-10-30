getSelection
 const QUESTIONS = [
    ["Quelle est la capitale de la France ?", "Paris"],
    ["Combien font 5 + 3 ?", "8"],
    ["Quelle est la couleur du ciel par temps clair ?", "bleu"],
    ["Quel est le plus grand océan ?", "Pacifique"],
    ["Combien de jours dans une semaine ?", "7"],
    ["Quelle est la capitale de l'Espagne ?", "Madrid"],
    ["Combien de continents y a-t-il sur Terre ?", "7"],
    ["Quelle est la langue officielle du Brésil ?", "portugais"],
    ["Quel est l’animal le plus rapide du monde ?", "guépard"],
    ["Combien de secondes dans une minute ?", "60"],
    ["Quel est le plus grand pays du monde ?", "Russie"],
    ["De quelle couleur est une banane mûre ?", "jaune"],
    ["Quelle planète est la plus proche du Soleil ?", "Mercure"],
    ["Combien de pattes a une araignée ?", "8"],
    ["Quel est le fleuve le plus long du monde ?", "Nil"]
  ];


  function lancerQuiz() {
    let bonnesReponses = 0;

    for (let i = 0; i < QUESTIONS.length; i++) {
      const question = QUESTIONS[i][0];
      const reponseCorrecte = QUESTIONS[i][1].toLowerCase().trim();

      let reponseUtilisateur = prompt(question);

      if (reponseUtilisateur) {
        reponseUtilisateur = reponseUtilisateur.toLowerCase().trim();

        if (reponseUtilisateur === reponseCorrecte) {
          alert("Reponse juste !");
          bonnesReponses++;
        } else {
          alert("Reponse faux");
        }
      } else {
        alert("Aucune reponse saisie");
      }
    }

    alert("Vous avez répondu correctement a " + bonnesReponses + " question(s) sur " + QUESTIONS.length + ".");//avec 
  }