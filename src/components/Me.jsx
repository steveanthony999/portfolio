import { useDispatch } from 'react-redux';
import { selectProject } from '../slices/infoSlice';
import './Me.css';

const Me = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(selectProject(e));
  };

  return (
    <div className='Me' onClick={() => handleClick('aboutme')}>
      <h1>
        Steven <br /> Woodward
      </h1>
      <br />
      <h4>S o f t w a r e &nbsp; E n g i n e e r</h4>
    </div>
  );
};

export default Me;
