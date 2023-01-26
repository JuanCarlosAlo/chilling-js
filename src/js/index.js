// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { PRICING_OPTIONS } from '../js/const.js';
import { togglePlan } from '../js/change-plan';

const optionInput = document.getElementById('checkbox');

optionInput.addEventListener('change', () => {
  togglePlan(PRICING_OPTIONS, optionInput);
});
