import { useDispatch } from 'react-redux';
import { selectProject } from '../slices/infoSlice';
import { MdPlayArrow } from 'react-icons/md';
import './ProjectsMenu.css';

const ProjectsMenu = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(selectProject(e));
  };

  return (
    <div className='ProjectsMenu'>
      <h2>Selected Projects</h2>
      <hr />
      <ul>
        <li onClick={() => handleClick('productfeedbackapp')}>
          <span>
            Product Feedback App <MdPlayArrow />
          </span>
        </li>
        <li onClick={() => handleClick('galeriaslideshow')}>
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
