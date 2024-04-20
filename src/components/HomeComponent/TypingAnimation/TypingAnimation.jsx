import { TypeAnimation } from 'react-type-animation';

const TypingAnimation = () => {
    return (
        <div className=' sm:max-w-17 '>
            <TypeAnimation
      sequence={[
       
        // Same substring at the start will only be typed out once, initially
        `I'm Web Designer`,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        `I'm Web Developer`,
        // 'We produce food for Guinea Pigs',
        1500,
        // 'We produce food for Chinchillas',
        // 1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '40px', display: 'inline-block', marginTop:'5px', color:'#727A9A'}}
      repeat={Infinity}
    />
        </div>
    );
};

export default TypingAnimation;