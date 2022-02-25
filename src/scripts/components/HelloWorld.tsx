import React from 'react';

type HelloWorldProps = {
  greeting: string,
}
export default function HelloWorld(props: HelloWorldProps) {
  console.log('%cHELLO WORLD (helloWorld.js)', 'background: #FF91AF; padding: 10px; color: #fff;');
  console.log(
    '%c↑ Example code, you should remove',
    'background: #FF91AF; padding: 10px; color: #fff;'
  );
  
  return (
    <section>
      <h1>Webpack 5 !! {props.greeting}</h1>
      <img src={require('../../assets/images/helloWorld.png')} alt="Hello World" />
    </section>
  );
};
