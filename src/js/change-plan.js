const mainContainer = document.getElementById('main-container');

const plans = ['basic', 'proffesional', 'yearly'];

const togglePlan = (PRICING_OPTIONS, optionInput) => {
  const basic = mainContainer.children[0].children[1];
  const monthly = Object.values(PRICING_OPTIONS.monthly.basic);
  let possiblePlans;
  for (let index = 0; index < 3; index++) {
    possiblePlans = mainContainer.children;
    for (let j = 0; j < 4; j++) {
      if (optionInput.checked) {
        console.log(
          (mainContainer.children[index].children[1].children[j].textContent =
            Object.values(PRICING_OPTIONS.yearly[plans[index]][j]))
        );
      }
    }
  }
};

export { togglePlan };
