import './index.scss';
import LogoTitle from '../../assets/p.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AnimatedLetter from '../AnimatedLetter'
import { useEffect } from 'react';
import Logo from './Logo';
import Loader from 'react-loaders';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['P', 'e', 't', 'e', 'r'];
    const jobArray = ['w', 'e','b',' ','d','e','v','e','l','o','p','e','r','.']

    const myFunction = async () => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 4000)
    }
    useEffect(() => {
        myFunction();
      }, []);

    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span> 
                <br/>
                <span className={letterClass}>I'</span>
                <span className={`${letterClass} _13`}>m</span> 
                <img src={LogoTitle} alt='JavaScript Developer Name, Web Developer Name'/>
                <AnimatedLetter 
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br/>
                <AnimatedLetter 
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>
                </h1>
                <h2>Frontend developer / Javascript expert / youtuber</h2>
                <Link to='/react-profile-example/contact' className='flat-button'>Contact me</Link>
            </div>
            <Logo/>
        </div>
        <Loader  type='pacman'/>
        </>
    )
}

export default Home;