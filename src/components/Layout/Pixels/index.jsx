import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Pixels({ children }) {
  const anim = (variants, custom) => {
    return {
      initial: 'initial',
      animate: 'enter',
      exit: 'exit',
      variants,
      custom,
    }
  }

  const expand = {
    initial: {
      top: 0,
    },
    enter: (i) => ({
      top: '100%',
      transition: {
        duration: 0.3,
        delay: 0.05 * i,
      },
      transitionEnd: {
        height: 0,
        top: 0,
      }
    }),
    exit: (i) => ({
      height: "100%",
      transition: {
        duration: 0.3,
        delay: 0.05 * i,
    },
  })

  }



const overlay = {
  initial : {
    opacity: 0.5,
  },
  enter: {
    opacity: 0,
  },
  exit: {
    opacity: 0.5
  }
}










  const nbOfColumns = 8
  return (
    <div className='page pixels'>
      <motion.div className='backplate' {...anim(overlay)}  ></motion.div>
      <div className='transition-container'>
        {[...Array(nbOfColumns)].map((_, i) => {
          return <motion.div {...anim(expand, nbOfColumns - i)} key={i} />
        })}
      </div>

      <div className='header'>
        <Link className='nav' href='/'>
          Home
        </Link>
        <Link className='nav' href='/about'>
          About
        </Link>
        <Link className='nav' href='/projects'>
          Projects
        </Link>
        <Link className='nav' href='/contact'>
          Contact
        </Link>
      </div>

      {children}
    </div>
  )
}
