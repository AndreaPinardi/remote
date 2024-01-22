import { lazy, useEffect, useState } from "react"

export default function Step({currentStep}) {
    
    useEffect(() => {
        
    }, [currentStep])
    
    
    return (
        <div>
            <h1>{currentStep}</h1>
        </div>
    )
}