import React from 'react';
import '../../../App.css';
import Footer from '../../comp/footer.js'
import Home from '../../comp/home.js'
import {motion} from 'framer-motion';


export default function Homepage(){
    return (
        <>
        <motion.div 
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          type: "tween",
          duration: 0.5
        }}
        variants={{
          initialState: {
            opacity: 0
          },
          animateState: {
            opacity: 1
          },
          exitState: {
            opacity: 0
          }
        }}>
          <Home/>
        </motion.div>
        </>
    )
}
