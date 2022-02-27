import React, {useState, useEffect} from 'react';
import * as dunmerNames from '../../names/dunmer';

export default function Generator() {
  const [selectedGender, setSelectedGender] = useState<string>('off');
  const [generatedNames, setGeneratedNamed] = useState<any>([]);

  const generateNames = () => {
    const randomNames = (arr: string[]) => {
      let generatedNames: string[] = [];
      for (let i = 0; i < 10; i++) {
        let randFirstName = arr[Math.floor(Math.random() * arr.length)];
        let randLastName = dunmerNames.familyNames[Math.floor(Math.random() * dunmerNames.familyNames.length)];
        generatedNames.push(`${randFirstName} ${randLastName}`);
      }
      return generatedNames;
    }
    if (selectedGender === 'female') {
      setGeneratedNamed(randomNames(dunmerNames.femaleNames));
    } else if (selectedGender === 'male') {
      setGeneratedNamed(randomNames(dunmerNames.maleNames));
    } else {
      setGeneratedNamed(randomNames(dunmerNames.allNames));
    }
  }

  useEffect(() => {
    generateNames();
  }, [selectedGender])

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

        {/* <fieldset>
          <legend>Race: [WIP]</legend>
          <input type='radio' id='options-race-altmer' name='race' value='altmer' />
          <label htmlFor='options-race-altmer'>Altmer</label>
          <input type='radio' id='options-race-argonian' name='race' value='argonian' />
          <label htmlFor='options-race-argonian'>Argonian</label>
          <input type='radio' id='options-race-bosmer' name='race' value='bosmer' />
          <label htmlFor='options-race-bosmer'>Bosmer</label>
        </fieldset> */}

        <button
          type='button'
          id='generateNames'
          className='hexagon'
          value={selectedGender}
          onClick={() => generateNames()}
        >
          Re-Roll Names
        </button>
      </form>
    </>
  )
}
