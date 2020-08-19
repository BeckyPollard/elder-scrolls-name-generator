import './style.scss';
import { generateNames } from './scriptPartials/generate';

const nameGenerator = {};

nameGenerator.generateNames = () => {
  generateNames();
};
nameGenerator.handleReroll = () => {
  document.getElementById('generateNames').addEventListener('click', generateNames);
};

nameGenerator.init = () => {
  nameGenerator.generateNames();
  nameGenerator.handleReroll();
};

document.addEventListener('DOMContentLoaded', function () {
  nameGenerator.init();
});
