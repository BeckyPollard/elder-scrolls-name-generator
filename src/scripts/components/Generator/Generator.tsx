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

        switch(race) { // handle family names
          case('altmer'): // no family names
            generatedNames.push(`${randFirstName}`);
            break;
          case('argonian'): // no family names
            generatedNames.push(`${randFirstName}`);
            break;
          case('bosmer'): // no family names
            generatedNames.push(`${randFirstName}`);
            break;
          case('breton'):
            randLastName = names.bretonFamilyNames[Math.floor(Math.random() * names.bretonFamilyNames.length)];
            generatedNames.push(`${randFirstName} ${randLastName}`);
            break;
          case('dunmer'):
            randLastName = names.dunmerFamilyNames[Math.floor(Math.random() * names.dunmerFamilyNames.length)];
            generatedNames.push(`${randFirstName} ${randLastName}`);
            break;
          case('imperial'):
            randLastName = names.imperialFamilyNames[Math.floor(Math.random() * names.imperialFamilyNames.length)];
            generatedNames.push(`${randFirstName} ${randLastName}`);
            break;
          case('khajiit'): // no family names
            generatedNames.push(`${randFirstName}`);
            break;
          case('nord'):
            randLastName = names.nordFamilyNames[Math.floor(Math.random() * names.nordFamilyNames.length)];
            generatedNames.push(`${randFirstName} ${randLastName}`);
            break;
          case('orc'): //orc family name prefixes
            const prefixesMasc = ['gro-', 'gro-', 'gro-', 'gro-', 'gor-']; //gor is rare
            const prefixes = ['gra-', 'gra-', 'gra-', 'gra-', 'gro-', 'gro-', 'gro-', 'gor-']; //keeping gor rare idk
            if (gender === 'female') {
              randLastName = `gra-${names.orcFemaleNames[Math.floor(Math.random() * names.orcFemaleNames.length)]}`;
            }
            if (gender === 'male') {
              const prefix = prefixesMasc[Math.floor(Math.random() * prefixesMasc.length)]
              randLastName = `${prefix}${names.orcMaleNames[Math.floor(Math.random() * names.orcMaleNames.length)]}`;
            } else {
              const prefix = prefixes[Math.floor(Math.random() * prefixes.length)]
              randLastName = `${prefix}${names.orcAllNames[Math.floor(Math.random() * names.orcAllNames.length)]}`;
            }
            generatedNames.push(`${randFirstName} ${randLastName}`);
            break;
            case('redguard'): //redguard, sometimes family name, sometimes with prefixes
              const familyName = Math.floor(Math.random() * 5);
              if (familyName === 3) {
                randLastName = names.redguardFamilyNames[Math.floor(Math.random() * names.redguardFamilyNames.length)];
                generatedNames.push(`${randFirstName} ${randLastName}`);
              } else if (familyName === 4) {
                const prefix = ['at-', 'af-'][(Math.floor(Math.random() * 2))];
                randLastName = `${prefix}${names.redguardAllNames[Math.floor(Math.random() * names.redguardAllNames.length)]}`;
                generatedNames.push(`${randFirstName} ${randLastName}`);
              } else {
                generatedNames.push(`${randFirstName}`);
              }
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
        case('breton'):
          setGeneratedNamed(randomNames(names.bretonFemaleNames));
          break;
        case('dunmer'):
          setGeneratedNamed(randomNames(names.dunmerFemaleNames));
          break;
        case('imperial'):
          setGeneratedNamed(randomNames(names.imperialFemaleNames));
          break;
        case('khajiit'):
          setGeneratedNamed(randomNames(names.khajiitFemaleNames));
          break;
        case('nord'):
          setGeneratedNamed(randomNames(names.nordFemaleNames));
          break;
        case('orc'):
          setGeneratedNamed(randomNames(names.orcFemaleNames));
          break;  
        case('redguard'):
          setGeneratedNamed(randomNames(names.redguardFemaleNames));
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
        case('breton'):
          setGeneratedNamed(randomNames(names.bretonMaleNames));
          break;
        case('dunmer'):
          setGeneratedNamed(randomNames(names.dunmerMaleNames));
          break;
        case('imperial'):
          setGeneratedNamed(randomNames(names.imperialMaleNames));
          break;
        case('khajiit'):
          setGeneratedNamed(randomNames(names.khajiitMaleNames));
          break;
        case('nord'):
          setGeneratedNamed(randomNames(names.nordMaleNames));
          break;
        case('orc'):
          setGeneratedNamed(randomNames(names.orcMaleNames));
          break;
        case('redguard'):
          setGeneratedNamed(randomNames(names.redguardMaleNames));
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
        case('breton'):
          setGeneratedNamed(randomNames(names.bretonAllNames));
          break;
        case('dunmer'):
          setGeneratedNamed(randomNames(names.dunmerAllNames));
          break;
        case('imperial'):
          setGeneratedNamed(randomNames(names.imperialAllNames));
          break;
        case('khajiit'):
          setGeneratedNamed(randomNames(names.khajiitAllNames));
          break;
        case('nord'):
          setGeneratedNamed(randomNames(names.nordAllNames));
          break;
        case('orc'):
          setGeneratedNamed(randomNames(names.orcAllNames));
          break;
        case('redguard'):
          setGeneratedNamed(randomNames(names.redguardAllNames));
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
