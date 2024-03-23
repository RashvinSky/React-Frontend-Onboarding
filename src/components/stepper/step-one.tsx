import React from 'react';

// MUI
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Custom components
import TextField from '../text-field';

type StepOneType = {
    handleNextStep: (stepNumber: number) => void;
};

function StepOne(props: StepOneType) {
    const { handleNextStep } = props;

    return (
        <>
            <Stack alignItems="center">
                <Typography variant="h4" fontWeight={500}>
                    Welcome! First things first...
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    You can always change them later.
                </Typography>
            </Stack>
            <Stack width="100%" minWidth={200} maxWidth={400} px={2} gap={2.5}>
                <TextField label="Full Name" placeholder="Steve Jobs" />
                <TextField label="Display Name" placeholder="Steve" />
                <Button
                    variant="contained"
                    disableElevation
                    onClick={() => handleNextStep(1)}>
                    Create Workspace
                </Button>
            </Stack>
        </>
    );
}

export default StepOne;
