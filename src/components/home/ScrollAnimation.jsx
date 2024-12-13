import { motion,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react'

function ScrollAnimation({children,variants}) {
    const controls = useAnimation();
    const [ref,inView] = useInView({ threshold: 0.2 });
    useEffect(() => {
        if (inView) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      }, [controls, inView]);
    
  return (
    <motion.div ref={ref} animate={controls} initial="hidden" variants={variants}>
      {children}
    </motion.div>
  )
}

export default ScrollAnimation