import React, { useEffect, useMemo, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Step from "./step/index"
import Button from './components/common/Button';

const getConfig = async (fn) => {
  const steps = ["step1", "step2", "step3"]
  return new Promise((resolve) => {
    setTimeout(() => resolve(fn(steps)), 2000)
  })
}

export default function Home({config = null, rxcBrain = null}) {
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
        <nav className="flex justify-around p-5">
          <Button onClick={back}>Back</Button>
          <Button onClick={next} variant='secondary'>Next</Button>
          <Button variant='inverted'>add insurance</Button>
        </nav>
       
        <Routes>
          <Route path="*" element={<Step currentStep={currentStep}/>}/>
        </Routes>
      </div>
    </Router>
  )
}
