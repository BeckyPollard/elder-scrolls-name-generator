import './style.scss';
import { generateNames } from './scriptPartials/generate';

const run = () => {
  generateNames();
  document.getElementById('generateNames').addEventListener('click', generateNames);
};

run();
