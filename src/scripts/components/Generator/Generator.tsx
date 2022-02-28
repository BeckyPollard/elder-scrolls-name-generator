import React, {useState, useEffect} from 'react';
import * as names from '../../names/names';

export default function Generator() {
  const [selectedGender, setSelectedGender] = useState<string>('off');
  const [selectedRace, setSelectedRace] = useState<string>('dunmer');
  const [generatedNames, setGeneratedNamed] = useState<any>([]);

  const generateNames = (race: string, gender: string,) => { //TODO: i want to refactor this!!!!
    const randomNames = (firstNames: string[], familyNames?: string[]) => {
      let randomNames: string[] = [];

      for (let i = 0; i < 10; i++) {
        // handle first names
        let randFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];

        // handle family names
        let randLastName;
        switch(race) { 
          case('altmer'): // no family names
            randomNames.push(`${randFirstName}`);
          break;
          case('argonian'): // no family names
            randomNames.push(`${randFirstName}`);
          break;
          case('bosmer'): // no family names
            randomNames.push(`${randFirstName}`);
          break;
          case('breton'):
            if (familyNames) {
              randLastName = familyNames[Math.floor(Math.random() * familyNames.length)];
              randomNames.push(`${randFirstName} ${randLastName}`);
            } else {
              randomNames.push(`${randFirstName}`);
            };
          break;
          case('dunmer'):
            if (familyNames) {
              randLastName = familyNames[Math.floor(Math.random() * familyNames.length)];
              randomNames.push(`${randFirstName} ${randLastName}`);
            } else {
              randomNames.push(`${randFirstName}`);
            };
          break;
          case('imperial'):
            if (familyNames) {
              randLastName = familyNames[Math.floor(Math.random() * familyNames.length)];
              randomNames.push(`${randFirstName} ${randLastName}`);
            } else {
              randomNames.push(`${randFirstName}`);
            };
          break;
          case('khajiit'): // no family names
            randomNames.push(`${randFirstName}`);
          break;
          case('nord'):
            if (familyNames) {
              randLastName = familyNames[Math.floor(Math.random() * familyNames.length)];
              randomNames.push(`${randFirstName} ${randLastName}`);
            } else {
              randomNames.push(`${randFirstName}`);
            };
          break;
          case('orc'): //orc family name prefixes
            if (familyNames) {
              const prefixesMasc = ['gro-', 'gro-', 'gro-', 'gro-', 'gor-']; //gor is rare
              const prefixes = ['gra-', 'gra-', 'gra-', 'gra-', 'gro-', 'gro-', 'gro-', 'gor-']; //keeping gor rare idk
              if (gender === 'female') {
                randLastName = `gra-${familyNames[Math.floor(Math.random() * familyNames.length)]}`;
              } else if (gender === 'male') {
                const prefix = prefixesMasc[Math.floor(Math.random() * prefixesMasc.length)];
                randLastName = `${prefix}${familyNames[Math.floor(Math.random() * familyNames.length)]}`;
              } else {
                const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
                randLastName = `${prefix}${familyNames[Math.floor(Math.random() * familyNames.length)]}`;
              };
              randomNames.push(`${randFirstName} ${randLastName}`);
            };
          break;
          case('redguard'): //redguard, sometimes family name, sometimes with prefixes
            if (familyNames) {
              const familyNameChance = Math.floor(Math.random() * 5);
              if (familyNameChance === 3) { //use name from lore
                randLastName = familyNames[Math.floor(Math.random() * familyNames.length)];
                randomNames.push(`${randFirstName} ${randLastName}`);
              } else if (familyNameChance === 4) { //make new name
                const prefix = ['at-', 'af-'][(Math.floor(Math.random() * 2))];
                randLastName = `${prefix}${familyNames[Math.floor(Math.random() * familyNames.length)]}`;
                randomNames.push(`${randFirstName} ${randLastName}`);
              } else {
                randomNames.push(`${randFirstName}`);
              };
            } else {
              randomNames.push(`${randFirstName}`);
            };
          break;
        };
      };
      return randomNames;
    };

    switch(race) {
      case('altmer'):
        if (gender === 'female') {
          setGeneratedNamed(randomNames(names.altmerFemaleNames));
        } else if (gender === 'male') {
          setGeneratedNamed(randomNames(names.altmerMaleNames));
        } else {
          setGeneratedNamed(randomNames(names.altmerAllNames));
        }
      break;
      case('argonian'):
        if (gender === 'female') {
          setGeneratedNamed(randomNames(names.argonianFemaleNames));
        } else if (gender === 'male') {
          setGeneratedNamed(randomNames(names.argonianMaleNames));
        } else {
          setGeneratedNamed(randomNames(names.argonianAllNames));
        }
      break;
      case('bosmer'):
        if (gender === 'female') {
          setGeneratedNamed(randomNames(names.bosmerFemaleNames));
        } else if (gender === 'male') {
          setGeneratedNamed(randomNames(names.bosmerMaleNames));
        } else {
          setGeneratedNamed(randomNames(names.bosmerAllNames));
        }
      break;
      case('breton'):
        if (gender === 'female') {
          setGeneratedNamed(randomNames(names.bretonFemaleNames, names.bretonFamilyNames));
        } else if (gender === 'male') {
          setGeneratedNamed(randomNames(names.bretonMaleNames, names.bretonFamilyNames));
        } else {
          setGeneratedNamed(randomNames(names.bretonAllNames, names.bretonFamilyNames));
        }
      break;
      case('dunmer'):
        if (gender === 'female') {
          setGeneratedNamed(randomNames(names.dunmerFemaleNames, names.dunmerFamilyNames));
        } else if (gender === 'male') {
          setGeneratedNamed(randomNames(names.dunmerMaleNames, names.dunmerFamilyNames));
        } else {
          setGeneratedNamed(randomNames(names.dunmerAllNames, names.dunmerFamilyNames));
        }
      break;
      case('imperial'):
        if (gender === 'female') {
          setGeneratedNamed(randomNames(names.imperialFemaleNames, names.imperialFamilyNames));
        } else if (gender === 'male') {
          setGeneratedNamed(randomNames(names.imperialMaleNames, names.imperialFamilyNames));
        } else {
          setGeneratedNamed(randomNames(names.imperialAllNames, names.imperialFamilyNames));
        }
      break;
      case('khajiit'):
        setGeneratedNamed(randomNames(names.khajiitFemaleNames));
      break;
      case('nord'):
        if (gender === 'female') {
          setGeneratedNamed(randomNames(names.nordFemaleNames, names.nordFamilyNames));
        } else if (gender === 'male') {
          setGeneratedNamed(randomNames(names.nordMaleNames, names.nordFamilyNames));
        } else {
          setGeneratedNamed(randomNames(names.nordAllNames, names.nordFamilyNames));
        }
      break;
      case('orc'):
        if (gender === 'female') {
          setGeneratedNamed(randomNames(names.orcFemaleNames, names.orcFemaleNames));
        } else if (gender === 'male') {
          setGeneratedNamed(randomNames(names.orcMaleNames, names.orcMaleNames));
        } else {
          setGeneratedNamed(randomNames(names.orcAllNames, names.orcAllNames));
        }
      break; 
      case('redguard'):
        if (gender === 'female') {
          setGeneratedNamed(randomNames(names.redguardFemaleNames, names.redguardAllNames));
        } else if (gender === 'male') {
          setGeneratedNamed(randomNames(names.redguardMaleNames, names.redguardAllNames));
        } else {
          setGeneratedNamed(randomNames(names.redguardAllNames, names.redguardAllNames));
        }
      break;
    };
  };

  useEffect(() => {
    generateNames(selectedRace, selectedGender);
  }, [selectedGender, selectedRace])

  return (
    <>
      <div className='generatedNames'> {/* TODO: put this in own component? */}
        <h2>Generated names:</h2>
        <ul id='names'>
          {generatedNames.map((name: string) => (
            <li>{name}</li>
          ))}
        </ul>
      </div>

      <form className='options'> {/* TODO: put this in own component? */}
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
            id='options-race-breton'
            name='race'
            value='breton'
            onChange={(e) => setSelectedRace(e.target.value)}
          />
          <label htmlFor='options-race-breton'>Breton</label>

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
            id='options-race-imperial'
            name='race'
            value='imperial'
            onChange={(e) => setSelectedRace(e.target.value)}
            defaultChecked={selectedRace === 'imperial'}
          />
          <label htmlFor='options-race-imperial'>Imperial</label>

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
            id='options-race-nord'
            name='race'
            onChange={(e) => setSelectedRace(e.target.value)}
            value='nord'
          />
          <label htmlFor='options-race-nord'>Nord</label>

          <input
            type='radio'
            id='options-race-orc'
            name='race'
            onChange={(e) => setSelectedRace(e.target.value)}
            value='orc'
          />
          <label htmlFor='options-race-orc'>Orc</label>

          <input
            type='radio'
            id='options-race-redguard'
            name='race'
            onChange={(e) => setSelectedRace(e.target.value)}
            value='redguard'
          />
          <label htmlFor='options-race-redguard'>Redguard</label>
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
