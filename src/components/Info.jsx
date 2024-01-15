import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Info.css';
import { faDisplay, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const Info = () => {
  return (
    <div className='Info'>
      <h2>Title</h2>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto assumenda
        id consequuntur perspiciatis et autem nam suscipit reiciendis,
        exercitationem commodi amet dolorem totam unde veritatis iste
        consequatur, nihil ipsa doloremque mollitia. Accusamus perferendis magni
        quasi omnis fuga amet soluta officia officiis odit autem. Voluptatum
        quod saepe dolore eveniet nostrum incidunt!
      </p>
      <div className='link-container'>
        <a href='#' target='_blank'>
          <FontAwesomeIcon icon={faDisplay} /> Site
        </a>
        <a href='#' target='_blank'>
          <FontAwesomeIcon icon={faLaptopCode} /> Code
        </a>
      </div>
    </div>
  );
};

export default Info;
