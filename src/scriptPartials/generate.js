//example of partialed scripts
import { femaleDunmerNames, maleDunmerNames, familyDunmerNames } from './names';

export const generateNames = () => {
  document.getElementById('names').innerHTML = '';
  let generatedNames = [];

  for (let i = 0; i < 10; i++) {
    let randFirstName = femaleDunmerNames[Math.floor(Math.random() * femaleDunmerNames.length)];
    let randLastName = familyDunmerNames[Math.floor(Math.random() * familyDunmerNames.length)];
    generatedNames.push(`${randFirstName} ${randLastName}`);
  }

  for (let i = 0; i < generatedNames.length; i++) {
    const li = document.createElement('li');
    li.textContent = generatedNames[i];
    document.getElementById('names').appendChild(li);
  }
};
