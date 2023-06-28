/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronouns = ["the", "our", "My"];
  let adjs = ["great", "big", "Llanero"];
  let nouns = ["jogger", "racoon", "Capybara"];
  let domains = [".com", ".org", ".us", ".ve"];
  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let domain of domains) {
          console.log(`${pronoun}${adj}${noun}${domain}`);
        }
      }
    }
  }
};
