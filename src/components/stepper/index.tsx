import React from 'react';

// Custom component
import Steps from './steps';
import StepOne from './step-one';
import StepTwo from './step-two';
import StepThree from './step-three';
import StepFour from './step-four';

function Stepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNextStep = (step: number) => setActiveStep(step);

    return (
        <>
            <Steps activeStep={activeStep} />
            {activeStep === 0 && <StepOne handleNextStep={handleNextStep} />}
            {activeStep === 1 && <StepTwo handleNextStep={handleNextStep} />}
            {activeStep === 2 && <StepThree handleNextStep={handleNextStep} />}
            {activeStep === 3 && <StepFour />}
        </>
    );
}

export default Stepper;
