import React from 'react';

import { ReactComponent as Logo } from 'logo.svg';

// MUI
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import Stepper from 'components/stepper';

function App() {
    return (
        <Container
            maxWidth="lg"
            sx={{
                minHeight: '100vh',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '15vh',
            }}>
            <Stack
                direction="column"
                gap={7}
                sx={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Stack direction="row" gap={2}>
                    <Logo />
                    <Typography variant="h1" fontSize={30} fontWeight={700}>
                        Eden
                    </Typography>
                </Stack>
                <Stepper />
            </Stack>
        </Container>
    );
}

export default App;
