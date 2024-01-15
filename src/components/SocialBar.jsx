import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './SocialBar.css';

const SocialBar = () => {
  return (
    <div className='SocialBar'>
      <FontAwesomeIcon icon={faGithub} color='#fff' size='2x' />
      <FontAwesomeIcon icon={faXTwitter} color='#000' size='2x' />
      <FontAwesomeIcon icon={faLinkedinIn} color='#000' size='2x' />
      <FontAwesomeIcon icon={faEnvelope} color='#000' size='2x' />
    </div>
  );
};

export default SocialBar;
