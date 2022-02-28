import React, {useState, useEffect} from 'react';
import * as names from '../../names/names';

export default function Generator() {
  const [selectedGender, setSelectedGender] = useState<string>('off');
  const [selectedRace, setSelectedRace] = useState<string>('dunmer');
  const [generatedNames, setGeneratedNamed] = useState<any>([]);

  const generateNames = (race: string, gender: string) => {
    const randomNames = (arr: string[]) => {
      let generatedNames: string[] = [];

      for (let i = 0; i < 10; i++) {
        let randFirstName = arr[Math.floor(Math.random() * arr.length)];
        let randLastName;

        // handle family names
        switch(race) {
          case('altmer'):
            // no family names
            generatedNames.push(`${randFirstName}`);
            break;
          case('argonian'):
            // no family names
            generatedNames.push(`${randFirstName}`);
            break;
          case('dunmer'):
            randLastName = names.dunmerFamilyNames[Math.floor(Math.random() * names.dunmerFamilyNames.length)];
            generatedNames.push(`${randFirstName} ${randLastName}`);
            break;
          case('bosmer'):
            generatedNames.push(`${randFirstName}`);
            break;
          case('khajiit'):
            generatedNames.push(`${randFirstName}`);
            break;
          case('orc'):
            const prefixesMasc = ['gro-', 'gro-', 'gro-', 'gro-', 'gor-']; //gor is rare
            const prefixes = ['gra-', 'gra-', 'gra-', 'gra-', 'gro-', 'gro-', 'gro-', 'gor-']; //keeping gor rare idk
            if (gender === 'female') {
              randLastName = `gra-${names.orcFemaleNames[Math.floor(Math.random() * names.orcFemaleNames.length)]}`;
            }
            if (gender === 'male') {
              const prefix = prefixesMasc[Math.floor(Math.random() * prefixesMasc.length)]
              randLastName = `${prefix}${names.orcMaleNames[Math.floor(Math.random() * names.orcMaleNames.length)]}`;
            }
            if (gender === 'off') {
              const prefix = prefixes[Math.floor(Math.random() * prefixes.length)]
              randLastName = `${prefix}${names.orcAllNames[Math.floor(Math.random() * names.orcAllNames.length)]}`;
            }
            generatedNames.push(`${randFirstName} ${randLastName}`);
            break;
        };
      };
      
      return generatedNames;
    };

    if (gender === 'female') {
      switch(race) {
        case('altmer'):
          setGeneratedNamed(randomNames(names.altmerFemaleNames));
          break;
        case('argonian'):
          setGeneratedNamed(randomNames(names.argonianFemaleNames));
          break;
        case('bosmer'):
          setGeneratedNamed(randomNames(names.bosmerFemaleNames));
          break;
        case('dunmer'):
          setGeneratedNamed(randomNames(names.dunmerFemaleNames));
          break;
        case('khajiit'):
          setGeneratedNamed(randomNames(names.khajiitFemaleNames));
          break;
        case('orc'):
          setGeneratedNamed(randomNames(names.orcFemaleNames));
          break;  
      }
    } else if (gender === 'male') {
      switch(race) {
        case('altmer'):
          setGeneratedNamed(randomNames(names.altmerMaleNames));
          break;
        case('argonian'):
          setGeneratedNamed(randomNames(names.argonianMaleNames));
          break;
        case('bosmer'):
          setGeneratedNamed(randomNames(names.bosmerMaleNames));
          break;
        case('dunmer'):
          setGeneratedNamed(randomNames(names.dunmerMaleNames));
          break;
        case('khajiit'):
          setGeneratedNamed(randomNames(names.khajiitMaleNames));
          break;
        case('orc'):
          setGeneratedNamed(randomNames(names.orcMaleNames));
          break;
      }
    } else {
      switch(race) {
        case('altmer'):
          setGeneratedNamed(randomNames(names.altmerAllNames));
          break;
        case('argonian'):
          setGeneratedNamed(randomNames(names.argonianAllNames));
          break;
        case('bosmer'):
          setGeneratedNamed(randomNames(names.bosmerAllNames));
          break;
        case('dunmer'):
          setGeneratedNamed(randomNames(names.dunmerAllNames));
          break;
        case('khajiit'):
          setGeneratedNamed(randomNames(names.khajiitAllNames));
          break;
        case('orc'):
          setGeneratedNamed(randomNames(names.orcAllNames));
          break;
      };
    };
  };

  useEffect(() => {
    generateNames(selectedRace, selectedGender);
  }, [selectedGender, selectedRace])

  return (
    <>
      <div className='generatedNames'>
        <h2>Generated names:</h2>
        <ul id='names'>
          {generatedNames.map((name: string) => (
            <li>{name}</li>
          ))}
        </ul>
      </div>

      <form className='options'>
        <fieldset>
          <legend>Gender:</legend>
          <input
            type='radio'
            id='options-gender-off'
            name='gender'
            value='off'
            defaultChecked={selectedGender === 'off'}
            onChange={(e) => setSelectedGender(e.target.value)}
          />
          <label htmlFor='options-gender-off'>Off</label>

          <input
            type='radio'
            id='options-gender-female'
            name='gender'
            value='female'
            onChange={(e) => setSelectedGender(e.target.value)}
          />
          <label htmlFor='options-gender-female'>Feminine</label>

          <input
            type='radio'
            id='options-gender-male'
            name='gender'
            value='male'
            onChange={(e) => setSelectedGender(e.target.value)}
          />
          <label htmlFor='options-gender-male'>Masculine</label>
        </fieldset>

        {/* RACE MENU */}
        <fieldset>
          <legend>Race:</legend>
          <input
            type='radio'
            id='options-race-altmer'
            name='race'
            value='altmer'
            onChange={(e) => setSelectedRace(e.target.value)}
          />
          <label htmlFor='options-race-altmer'>Altmer</label>

          <input
            type='radio'
            id='options-race-argonian'
            name='race'
            value='argonian'
            onChange={(e) => setSelectedRace(e.target.value)}
          />
          <label htmlFor='options-race-argonian'>Argonian</label>

          <input
            type='radio'
            id='options-race-bosmer'
            name='race'
            onChange={(e) => setSelectedRace(e.target.value)}
            value='bosmer'
          />
          <label htmlFor='options-race-bosmer'>Bosmer</label>

          <input
            type='radio'
            id='options-race-dunmer'
            name='race'
            value='dunmer'
            onChange={(e) => setSelectedRace(e.target.value)}
            defaultChecked={selectedRace === 'dunmer'}
          />
          <label htmlFor='options-race-dunmer'>Dunmer</label>

          <input
            type='radio'
            id='options-race-khajiit'
            name='race'
            onChange={(e) => setSelectedRace(e.target.value)}
            value='khajiit'
          />
          <label htmlFor='options-race-khajiit'>Khajiit</label>

          <input
            type='radio'
            id='options-race-orc'
            name='race'
            onChange={(e) => setSelectedRace(e.target.value)}
            value='orc'
          />
          <label htmlFor='options-race-orc'>Orsimer</label>
        </fieldset>

        <button
          type='button'
          id='generateNames'
          className='hexagon'
          value={selectedGender}
          onClick={() => generateNames(selectedRace, selectedGender)}
        >
          Re-Roll Names
        </button>
      </form>
    </>
  )
}
