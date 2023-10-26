import './index.scss';
import AnimatedLetter from '../AnimatedLetter';
import { Loader } from 'react-loaders'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

export default function About() {
    const [letterClass, setLetterClass] = useState('text-animate');

    const myFunction = async () => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 3000)
    }
    useEffect(() => {
        myFunction();
      }, []);

  return (
    <>
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
            <AnimatedLetter
            letterClass={letterClass}
            strArray={['A','b','o','u','t',' ','m','e']}
            idx={15}/>
        </h1>
        <p>Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit.</p>
        <p>Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content.</p>
      </div>
      <div className='stage-cube-cont'>
        <div className='cubespinner'>
        <div className='face1'>
            <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
        </div>
        <div className='face2'>
            <FontAwesomeIcon icon={faHtml5} color="#f06529" />
        </div>
        <div className='face3'>
            <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
        </div>
        <div className='face4'>
            <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
        </div>
        <div className='face5'>
            <FontAwesomeIcon icon={faBootstrap} color="violet" />
        </div>
        <div className='face6'>
            <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
        </div>
        </div>
      </div>
    </div>
    <Loader type='pacman' />
    </>
  )
};
