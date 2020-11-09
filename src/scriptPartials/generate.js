//example of partialed scripts
import { femaleDunmerNames, maleDunmerNames, allDunmerNames, familyDunmerNames } from './names';

export const generateNames = () => {
  document.getElementById('names').innerHTML = '';
  let generatedNames = [];

  const randomNames = (arr) => {
    for (let i = 0; i < 10; i++) {
      let randFirstName = arr[Math.floor(Math.random() * arr.length)];
      let randLastName = familyDunmerNames[Math.floor(Math.random() * familyDunmerNames.length)];
      generatedNames.push(`${randFirstName} ${randLastName}`);
    }
  }

  if (document.getElementById("options-gender-male").checked) {
    let genderArr = maleDunmerNames;
    randomNames(genderArr);
  } else if (document.getElementById("options-gender-female").checked) {
    let genderArr = femaleDunmerNames;
    randomNames(genderArr);
  } else {
    let genderArr = allDunmerNames;
    randomNames(genderArr);
  }

  for (let i = 0; i < generatedNames.length; i++) {
    const li = document.createElement('li');
    li.textContent = generatedNames[i];
    document.getElementById('names').appendChild(li);
  }
};
