import { useState } from 'react';

import { SocialIcon } from 'react-social-icons';

const CustomSocialIcon = props => {
  const [fade, setFade] = useState(false);

  return (
    <SocialIcon 
      onMouseEnter={() => setFade(true)}
      onMouseLeave={() => setFade(false)}
      target='_blank'
      bgColor={`#FFCAEC${fade ? 'CC' : ''}`}
      {...props}
    />
  );
}

export default CustomSocialIcon;
