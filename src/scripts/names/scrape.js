// RUN `node scrape.js` in terminal to scrape UESP!
const axios = require('axios'); // to get data from web
const cheerio = require('cheerio'); // to parse web page
const fs = require('fs'); // to write files with node

// files to write:
// const altmerNames = fs.createWriteStream('./altmer.js');
// const argonianNames = fs.createWriteStream('./argonian.js');
// const bosmerNames = fs.createWriteStream('./bosmer.js');
// const bretonNames = fs.createWriteStream('./breton.js');
// const dunmerNames = fs.createWriteStream('./dunmer.js');
// const imperialNames = fs.createWriteStream('./imperial.js');
// const khajiitNames = fs.createWriteStream('./khajiit.js');
// const nordNames = fs.createWriteStream('./nord.js');
// const orcNames = fs.createWriteStream('./orc.js');
// const redguardNames = fs.createWriteStream('./redguard.js');

const names = fs.createWriteStream('./names.js');

// GET NAMES
//// ALTMER NAMES
axios.get('https://en.uesp.net/wiki/Lore:Altmer_Names').then((res) => {
  const $ = cheerio.load(res.data);

  // GET NAMES BY GENDER
  const namesFemale = [];
  $('#Female_Altmer_Names')
    .parent()
    .nextUntil('h2')
    .children('a')
    .each((index, element) => {
      const name = $(element).text();
      // simple do not push numbers check
      if(name.length > 1) {
        namesFemale.push(`"${name}"`);
      }
    });
  const namesMale = [];
  $('#Male_Altmer_Names')
    .parent()
    .nextUntil('h2')
    .children('a')
    .each((index, element) => {
      const name = $(element).text();
      // simple do not push numbers check
      if(name.length > 1) {
        namesMale.push(`"${name}"`);
      }
    });

  // remove dup names
  const onlyUniqueNames = (val, index, test) => {
    return test.indexOf(val) === index;
  };
  const uniqueFemaleNames = namesFemale.filter(onlyUniqueNames);
  const uniqueMaleNames = namesMale.filter(onlyUniqueNames);

  names.write(`export const altmerFemaleNames = [${uniqueFemaleNames}]; \n\n`);
  names.write(`export const altmerMaleNames = [${uniqueMaleNames}]; \n\n`);
  names.write(`export const altmerAllNames = [${uniqueMaleNames.concat(uniqueFemaleNames)}]; \n\n`);
});

//// BOSMER NAMES
axios.get('https://en.uesp.net/wiki/Lore:Bosmer_Names').then((res) => {
  const $ = cheerio.load(res.data);

  // GET NAMES BY GENDER
  const namesFemale = [];
  $('#Female_Bosmer_Names')
    .parent()
    .nextUntil('h2')
    .children('a')
    .each((index, element) => {
      const name = $(element).text();
      // simple do not push numbers check
      if(name.length > 1) {
        namesFemale.push(`"${name}"`);
      }
    });
  const namesMale = [];
  $('#Male_Bosmer_Names')
    .parent()
    .nextUntil('h2')
    .children('a')
    .each((index, element) => {
      const name = $(element).text();
      // simple do not push numbers check
      if(name.length > 1) {
        namesMale.push(`"${name}"`);
      }
    });

  // remove dup names
  const onlyUniqueNames = (val, index, test) => {
    return test.indexOf(val) === index;
  };
  const uniqueFemaleNames = namesFemale.filter(onlyUniqueNames);
  const uniqueMaleNames = namesMale.filter(onlyUniqueNames);

  names.write(`export const bosmerFemaleNames = [${uniqueFemaleNames}]; \n\n`);
  names.write(`export const bosmerMaleNames = [${uniqueMaleNames}]; \n\n`);
  names.write(`export const bosmerAllNames = [${uniqueMaleNames.concat(uniqueFemaleNames)}]; \n\n`);
});

//// DUNMER NAMES
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
      if(name.length > 1) {
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
      if(name.length > 1) {
        namesMale.push(`"${name}"`);
      }
    });

  // GET FAMILY DUNMER NAMES (SETTLED AND NOMADIC)
  // can't scrape them all, but most are not links
  const namesFamily = [];
  $('#Dunmer_Family_Names')
    .parent()
    .nextUntil('h2')
    .children('a')
    .each((index, element) => {
      const name = $(element).text();
      // simple do not push numbers check
      if(name.length > 2 && name !== 'tomb') {
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
      if(name.length > 2 && name !== 'tomb') {
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

  names.write(`export const dunmerFemaleNames = [${uniqueFemaleNames}]; \n\n`);
  names.write(`export const dunmerMaleNames = [${uniqueMaleNames}]; \n\n`);
  names.write(`export const dunmerAllNames = [${uniqueMaleNames.concat(uniqueFemaleNames)}]; \n\n`);
  names.write(`export const dunmerFamilyNames = [${uniqueFamilyNames}]; \n`);
});

//// ORSIMER NAMES
axios.get('https://en.uesp.net/wiki/Lore:Orc_Names').then((res) => {
  const $ = cheerio.load(res.data);

  // GET NAMES BY GENDER
  const namesFemale = [];
  $('#Female_Orc_Names')
    .parent()
    .nextUntil('h2')
    .children('a')
    .each((index, element) => {
      const name = $(element).text();
      // simple do not push numbers check
      if(name.length > 1) {
        namesFemale.push(`"${name}"`);
      }
    });
  const namesMale = [];
  $('#Male_Orc_Names')
    .parent()
    .nextUntil('h2')
    .children('a')
    .each((index, element) => {
      const name = $(element).text();
      // simple do not push numbers check
      if(name.length > 1) {
        namesMale.push(`"${name}"`);
      }
    });

  // remove dup names
  const onlyUniqueNames = (val, index, test) => {
    return test.indexOf(val) === index;
  };
  const uniqueFemaleNames = namesFemale.filter(onlyUniqueNames);
  const uniqueMaleNames = namesMale.filter(onlyUniqueNames);

  names.write(`export const orcFemaleNames = [${uniqueFemaleNames}]; \n\n`);
  names.write(`export const orcMaleNames = [${uniqueMaleNames}]; \n\n`);
  names.write(`export const orcAllNames = [${uniqueMaleNames.concat(uniqueFemaleNames)}]; \n\n`);
});
