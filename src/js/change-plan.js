const mainContainer = document.getElementById("main-container");

const plans = ["basic", "professional", "master"];

const togglePlan = (PRICING_OPTIONS, optionInput) => {
  for (let index = 0; index < 3; index++) {
    for (let j = 0; j < 4; j++) {
      if (optionInput.checked) {
        mainContainer.children[index].children[1].children[j].textContent =
          Object.values(PRICING_OPTIONS.yearly[plans[index]])[j];
      } else {
        mainContainer.children[index].children[1].children[j].textContent =
          Object.values(PRICING_OPTIONS.monthly[plans[index]])[j];
      }
    }
  }
};

export { togglePlan };
