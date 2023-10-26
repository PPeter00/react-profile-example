import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import LogoS from '../../../assets/p.png';
import './index.scss'

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
         <g
          className="svg-container"
          transform="translate(0.000000,1085.000000) scale(0.100000,-0.100000)"
          fill="#fefefe"
          stroke='#000'
          stroke-width='2'
          stroke-miterlimit='10'
          points="66,292 115.5,239 171,321 194,251 
          236,280 268,251 318,291 343,239 368,275 "
        >
          <path
          fill='#fefefe'
          stroke="#000"
          stroke-width='2'
          stroke-miterlimit='10'
            ref={outlineLogoRef}
            d="M452,293c0,0,0-61,72-44c0,0-47,117,81,57
            s5-110,10-67s-51,77.979-50,33.989"
          />

        </g>
      </svg>
    </div>
  )
}

export default Logo;