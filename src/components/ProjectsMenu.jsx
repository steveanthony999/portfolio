import { MdPlayArrow } from 'react-icons/md';
import './ProjectsMenu.css';

const ProjectsMenu = () => {
  return (
    <div className='ProjectsMenu'>
      <h2>Selected Projects</h2>
      <hr />
      <ul>
        <li>
          <span>
            Product Feedback App <MdPlayArrow />
          </span>
        </li>
        <li>
          <span>
            Galeria Slideshow <MdPlayArrow />
          </span>
        </li>
        <li>
          <span>
            See All Projects <MdPlayArrow />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ProjectsMenu;
