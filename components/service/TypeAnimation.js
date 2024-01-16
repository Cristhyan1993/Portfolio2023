import { TypeAnimation } from 'react-type-animation';

const TypeAnimationComp = () => {
  return (
    <TypeAnimation
      sequence={[
        "Hi, I'm Cris...",
        1000,
        "Hola, soy Cris...",
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default TypeAnimationComp