// function CatFacts() {
//   fetch("https://cat-fact.herokuapp.com/facts")
//     .then((res) => {
//       return res.json();
//     })
//     .then(function (facts) {
//       const factsLength = facts.length;
//       const randomNumber = Math.random() * factsLength;
//       const flooredNumber = Math.floor(randomNumber);
//       alert(facts[flooredNumber].text);
//     });
// }

// CatFacts();

// another method

function fetchFacts() {
  fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10")
    .then((response) => response.json())
    .then((data) => alert(data[0].text));

  // .then((data) => {
  //     let fact = JSON.parse(data).text;
  //     console.log(fact)
  // });
}
fetchFacts();
