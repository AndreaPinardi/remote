
import 'tailwindcss/tailwind.css'
import React, { useEffect, useMemo, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Step from "./step/index.js"



const getConfig = async (fn) => {
  const steps = ["step1", "step2", "step3"]
  return new Promise((resolve) => {
    setTimeout(() => resolve(fn(steps)), 2000)
  })
}

export default function Home() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [steps, setSteps] = useState([]);
  
  useEffect(() => {
    getConfig(setSteps)
  }, [])
  
  const currentStep = useMemo(() => {
    if(!steps.length) return ""
    return steps[currentStepIndex]
  }, [currentStepIndex, steps])
  
  const next = () => setCurrentStepIndex((index) => index === steps.length - 1 ? index : index + 1)
  const back = () => setCurrentStepIndex((index) => index === 0 ? index : index - 1)
  
  return (
    <Router>
      <div>
        <button onClick={back}>Back</button>
        <button onClick={next}>Next</button>
        <Routes>
          <Route path="*" element={<Step currentStep={currentStep}/>}/>
        </Routes>
      </div>
    </Router>
  )
}
