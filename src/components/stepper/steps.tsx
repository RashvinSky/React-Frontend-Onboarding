import React from 'react';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, {
    stepConnectorClasses,
} from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';

const Connector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 18px)',
        right: 'calc(50% + 18px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: theme.palette.primary.main,
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: theme.palette.primary.main,
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#eaeaf0',
        borderTopWidth: 3,
    },
}));

const StepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
    ({ theme, ownerState }) => ({
        color: '#eaeaf0',
        display: 'flex',
        height: 22,
        fontSize: 14,
        alignItems: 'center',
        ...(ownerState.active && {
            color: theme.palette.primary.main,
        }),
        '& .step': {
            display: 'inherit',
            justifyContent: 'center',
            alignItems: 'center',
            width: 36,
            height: 36,
            borderRadius: '50%',
        },
        '& .StepIcon-active': {
            zIndex: 11,
            color: '#fff',
            backgroundColor: theme.palette.primary.main,
        },
        '& .StepIcon-completedIcon': {
            color: '#fff',
            backgroundColor: theme.palette.primary.main,
        },
        '& .StepIcon-circle': {
            color: '#000',
            backgroundColor: 'transparent',
            borderColor: '#eaeaf0',
            borderWidth: 3,
            borderStyle: 'solid',
        },
    }),
);

function StepIcon(props: StepIconProps) {
    const { active, completed, className, icon } = props;

    return (
        <StepIconRoot ownerState={{ active }} className={className}>
            <span
                className={`step ${
                    completed
                        ? 'StepIcon-completedIcon'
                        : active
                        ? 'StepIcon-active'
                        : 'StepIcon-circle'
                }`}>
                {icon}
            </span>
        </StepIconRoot>
    );
}

type CustomizedSteppersType = {
    activeStep: number;
};

export default function CustomizedSteppers(props: CustomizedSteppersType) {
    const { activeStep } = props;

    return (
        <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={<Connector />}>
            {Array.from(Array(4).keys()).map((label) => (
                <Step key={label}>
                    <StepLabel
                        StepIconComponent={StepIcon}
                        sx={{ minWidth: 80 }}></StepLabel>
                </Step>
            ))}
        </Stepper>
    );
}
