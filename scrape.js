// RUN `node scrape.js` in terminal to scrape UESP!
const axios = require('axios'); // to get data from web
const cheerio = require('cheerio'); // to parse web page
const fs = require('fs'); // to write files with node

const writeStream = fs.createWriteStream('./src/scriptPartials/names.js');

axios.get('https://en.uesp.net/wiki/Lore:Dunmer_Names').then((res) => {
  const $ = cheerio.load(res.data);

  // GET FEMALE DUNMER NAMES
  const namesFemale = [];
  $('#Female_Dunmer_Names')
    .parent()
    .nextUntil('h2')
    .children('a')
    .each((index, element) => {
      const name = $(element).text();
      // simple do not push numbers check
      if (name.length > 1) {
        namesFemale.push(`"${name}"`);
      }
    });

  // GET MALE DUNMER NAMES
  const namesMale = [];
  $('#Male_Dunmer_Names')
    .parent()
    .nextUntil('h2')
    .children('a')
    .each((index, element) => {
      const name = $(element).text();
      // simple do not push numbers check
      if (name.length > 1) {
        namesMale.push(`"${name}"`);
      }
    });

  // GET FAMILY DUNMER NAMES (SETTLED AND NOMADIC)
  // can't scrape them all, as most are not links
  const namesFamily = [];
  $('#Dunmer_Family_Names')
    .parent()
    .nextUntil('h2')
    .children('a')
    .each((index, element) => {
      const name = $(element).text();
      // simple do not push numbers check
      if (name.length > 2 && name !== 'tomb') {
        namesFamily.push(`"${name}"`);
      }
    });
  $('#Dunmer_Ashlander_Names')
    .parent()
    .nextUntil('h2')
    .children('a')
    .each((index, element) => {
      const name = $(element).text();
      // simple do not push numbers check
      if (name.length > 2 && name !== 'tomb') {
        namesFamily.push(`"${name}"`);
      }
    });

  // remove dup names
  const onlyUniqueNames = (val, index, test) => {
    return test.indexOf(val) === index;
  };
  const uniqueFemaleNames = namesFemale.filter(onlyUniqueNames);
  const uniqueMaleNames = namesMale.filter(onlyUniqueNames);
  const uniqueFamilyNames = namesFamily.filter(onlyUniqueNames);

  writeStream.write(`const femaleDunmerNames = [${uniqueFemaleNames}] \n\n`);
  writeStream.write(`const maleDunmerNames = [${uniqueMaleNames}] \n\n`);
  writeStream.write(`const familyDunmerNames = [${uniqueFamilyNames}] \n\n`);
});
