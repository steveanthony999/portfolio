import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FaDisplay } from 'react-icons/fa6';
import { FaCode } from 'react-icons/fa';
import { TiDocumentText } from 'react-icons/ti';
import { FaRss } from 'react-icons/fa';
import './Info.css';
import infoData from '../info.json';

const Info = () => {
  const { projectInfo } = useSelector((state) => state.info);
  const [project, setProject] = useState({});
  // const [title, setTitle] = useState();
  // const [description, setDescription] = useState();

  // useEffect(() => {
  //   setTitle(
  //     infoData.projects.filter((data) => data.key === projectInfo)[0].title
  //   );
  //   setDescription(
  //     infoData.projects.filter((data) => data.key === projectInfo)[0]
  //       .description
  //   );
  // }, [projectInfo]);

  useEffect(() => {
    const projectData = infoData.projects.find(
      (data) => data.key === projectInfo
    );
    setProject(projectData);
  }, [projectInfo]);

  return (
    <div className='Info'>
      <h2>{project.title}</h2>
      <hr />
      <p>{project.description}</p>
      <div className='link-container'>
        {projectInfo === 'aboutme' ? (
          <>
            <a href={project.resume} target='_blank' rel='noopener noreferrer'>
              <TiDocumentText /> &nbsp;&nbsp;Resume
            </a>
            <a href={project.blog} target='_blank' rel='noopener noreferrer'>
              <FaRss /> &nbsp;&nbsp;Blog
            </a>
          </>
        ) : (
          <>
            <a href={project.site} target='_blank' rel='noopener noreferrer'>
              <FaDisplay /> &nbsp;&nbsp;Site
            </a>
            <a href={project.code} target='_blank' rel='noopener noreferrer'>
              <FaCode /> &nbsp;&nbsp;Code
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Info;
