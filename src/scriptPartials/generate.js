//example of partialed scripts
import { femaleDunmerNames, maleDunmerNames, dunmerNames, familyDunmerNames } from './names';

export const generateNames = () => {
  document.getElementById('names').innerHTML = '';
  let generatedNames = [];

  if (document.getElementById("options-gender-male").checked) {
    for (let i = 0; i < 10; i++) {
      let randFirstName = maleDunmerNames[Math.floor(Math.random() * maleDunmerNames.length)];
      let randLastName = familyDunmerNames[Math.floor(Math.random() * familyDunmerNames.length)];
      generatedNames.push(`${randFirstName} ${randLastName}`);
    }
  } else if (document.getElementById("options-gender-female").checked) {
    for (let i = 0; i < 10; i++) {
      let randFirstName = femaleDunmerNames[Math.floor(Math.random() * femaleDunmerNames.length)];
      let randLastName = familyDunmerNames[Math.floor(Math.random() * familyDunmerNames.length)];
      generatedNames.push(`${randFirstName} ${randLastName}`);
    }
  } else {
    for (let i = 0; i < 10; i++) {
      let randFirstName = dunmerNames[Math.floor(Math.random() * dunmerNames.length)];
      let randLastName = familyDunmerNames[Math.floor(Math.random() * familyDunmerNames.length)];
      generatedNames.push(`${randFirstName} ${randLastName}`);
    }
  }

  for (let i = 0; i < generatedNames.length; i++) {
    const li = document.createElement('li');
    li.textContent = generatedNames[i];
    document.getElementById('names').appendChild(li);
  }
};
