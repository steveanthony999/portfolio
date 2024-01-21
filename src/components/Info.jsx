import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FaDisplay } from 'react-icons/fa6';
import { FaCode } from 'react-icons/fa';
import './Info.css';
import infoData from '../info.json';

const Info = () => {
  const { projectInfo } = useSelector((state) => state.info);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    setTitle(
      infoData.projects.filter((data) => data.key === projectInfo)[0].title
    );
    setDescription(
      infoData.projects.filter((data) => data.key === projectInfo)[0]
        .description
    );
  }, [projectInfo]);

  return (
    <div className='Info'>
      <h2>{title}</h2>
      <hr />
      <p>{description}</p>
      <div className='link-container'>
        <a href='#' target='_blank'>
          <FaDisplay /> &nbsp;&nbsp;Site
        </a>
        <a href='#' target='_blank'>
          <FaCode /> &nbsp;&nbsp;Code
        </a>
      </div>
    </div>
  );
};

export default Info;
