import React from 'react';

import { ReactComponent as Tick } from 'tick.svg';

// MUI
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function StepFour() {
    return (
        <Stack alignItems="center" gap={4} pt={6}>
            <Avatar
                sx={{
                    width: 60,
                    height: 60,
                    backgroundColor: 'primary.main',
                    p: 2.8,
                }}>
                <Tick />
            </Avatar>
            <Stack gap={3}>
                <Stack alignItems="center">
                    <Typography variant="h4" fontWeight={500}>
                        Congratulation, Eren!
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        You have completed onboarding, you can start using the
                        Eden!
                    </Typography>
                </Stack>
                <Button variant="contained" disableElevation>
                    Launch Eden
                </Button>
            </Stack>
        </Stack>
    );
}

export default StepFour;
