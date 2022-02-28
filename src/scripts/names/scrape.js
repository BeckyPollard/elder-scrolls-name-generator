// RUN `node scrape.js` in terminal to scrape UESP!
const axios = require('axios'); // to get data from web
const cheerio = require('cheerio'); // to parse web page
const fs = require('fs'); // to write files with node

// files to write:
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

//// ARGONIAN NAMES
axios.get('https://en.uesp.net/wiki/Lore:Argonian_Names').then((res) => {
  const $ = cheerio.load(res.data);

  // GET NAMES BY GENDER
  const namesFemale = [];
  $('#Female_Argonian_Names')
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
  $('#Male_Argonian_Names')
    .parent()
    .nextUntil('h2')
    .children('a')
    .each((index, element) => {
      const name = $(element).text();
      // simple do not push junk check
      if(name === "J'Ram-Dar") {  //this is an argonian with a khajiit name
        return;
      };
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

  names.write(`export const argonianFemaleNames = [${uniqueFemaleNames}]; \n\n`);
  names.write(`export const argonianMaleNames = [${uniqueMaleNames}]; \n\n`);
  names.write(`export const argonianAllNames = [${uniqueMaleNames.concat(uniqueFemaleNames)}]; \n\n`);
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

//// BRETON NAMES
axios.get('https://en.uesp.net/wiki/Lore:Breton_Names').then((res) => {
  const $ = cheerio.load(res.data);

  const namesFemale = [];
  $('#Female_Breton_Names')
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
  $('#Male_Breton_Names')
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

  // GET FAMILY NAMES
  const namesFamily = [];
  $('#Breton_Family_Names')
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

  names.write(`export const bretonFemaleNames = [${uniqueFemaleNames}]; \n\n`);
  names.write(`export const bretonMaleNames = [${uniqueMaleNames}]; \n\n`);
  names.write(`export const bretonAllNames = [${uniqueMaleNames.concat(uniqueFemaleNames)}]; \n\n`);
  names.write(`export const bretonFamilyNames = [${uniqueFamilyNames}]; \n\n`);
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

//// KHAJIIT NAMES
axios.get('https://en.uesp.net/wiki/Lore:Khajiit_Names').then((res) => {
  const $ = cheerio.load(res.data);

  // GET NAMES BY GENDER
  const namesFemale = [];
  $('#Female_Khajiit_Names')
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
  $('#Male_Khajiit_Names')
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

  names.write(`export const khajiitFemaleNames = [${uniqueFemaleNames}]; \n\n`);
  names.write(`export const khajiitMaleNames = [${uniqueMaleNames}]; \n\n`);
  names.write(`export const khajiitAllNames = [${uniqueMaleNames.concat(uniqueFemaleNames)}]; \n\n`);
});
