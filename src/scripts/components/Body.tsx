import React from 'react';
import Generator from './Generator/Generator';

export default function Body() {

  return (
    <main className="wrapper">
      <p className="description"> 
        First and last name pairs, created from names present in The Elder Scrolls
        games. Names collected from <a href="https://en.uesp.net/wiki/Lore:Names">UESP</a>.
      </p> 
      <Generator />
    </main>
  )
}
