import React from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Custom components
import TextField from '../text-field';

type StepTwoType = {
    handleNextStep: (stepNumber: number) => void;
};

function Step2(props: StepTwoType) {
    const { handleNextStep } = props;

    return (
        <>
            <Stack alignItems="center">
                <Typography variant="h4" fontWeight={500}>
                    Lets set up a home for all your work
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    You can always create another workspace later.
                </Typography>
            </Stack>
            <Stack minWidth={200} maxWidth={400} width="100%" px={2} gap={2.5}>
                <TextField label="Workspace Name" placeholder="Eden" />
                <TextField
                    label="Display Name"
                    placeholder="Steve"
                    startAdornmentText="www.eden.com/"
                    optional
                />
                <Button
                    variant="contained"
                    onClick={() => handleNextStep(2)}
                    disableElevation>
                    Create Workspace
                </Button>
            </Stack>
        </>
    );
}

export default Step2;
