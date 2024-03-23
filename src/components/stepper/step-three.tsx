import React from 'react';

import { ReactComponent as Person } from 'person.svg';
import { ReactComponent as Group } from 'group.svg';

// MUI
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';

type StepThreeType = {
    handleNextStep: (stepNumber: number) => void;
};

function StepThree(props: StepThreeType) {
    const { handleNextStep } = props;
    const [value, setValue] = React.useState('self');

    return (
        <>
            <Stack alignItems="center">
                <Typography variant="h4" fontWeight={500}>
                    How are you planning to use Eden?
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    We'll streaming your setup experience accordingly.
                </Typography>
            </Stack>
            <Stack direction="column" gap={4}>
                <Stack
                    direction="row"
                    component={RadioGroup}
                    defaultValue="female"
                    aria-labelledby="demo-customized-radios"
                    name="customized-radios"
                    maxWidth={360}
                    gap={4}
                    value={value}
                    onChange={(e: any) => setValue(e.target.value)}>
                    <FormControlLabel
                        value="self"
                        control={<Radio sx={{ display: 'none' }} />}
                        sx={{ flex: 1, margin: 0 }}
                        label={
                            <Stack
                                component={Paper}
                                variant="outlined"
                                p={2}
                                gap={1.5}
                                sx={{
                                    borderColor:
                                        value === 'self'
                                            ? 'primary.main'
                                            : 'default',
                                    color:
                                        value === 'self'
                                            ? 'primary.main'
                                            : 'default',
                                }}>
                                <Group />
                                <Stack gap={0.5}>
                                    <Typography
                                        variant="subtitle2"
                                        color="text.primary">
                                        For myself
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        color="text.secondary">
                                        Write better. Think more clearly. Stay
                                        organized.
                                    </Typography>
                                </Stack>
                            </Stack>
                        }
                    />
                    <FormControlLabel
                        value="team"
                        control={<Radio sx={{ display: 'none' }} />}
                        sx={{ flex: 1, margin: 0 }}
                        label={
                            <Stack
                                component={Paper}
                                variant="outlined"
                                p={2}
                                gap={1.5}
                                sx={{
                                    borderColor:
                                        value === 'team'
                                            ? 'primary.main'
                                            : 'default',
                                    color:
                                        value === 'team'
                                            ? 'primary.main'
                                            : 'default',
                                }}>
                                <Person />
                                <Stack gap={0.5}>
                                    <Typography
                                        variant="subtitle2"
                                        color="text.primary">
                                        With my team
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        color="text.secondary">
                                        Wikis, docs, tasks & projects, all in
                                        one place.
                                    </Typography>
                                </Stack>
                            </Stack>
                        }
                    />
                </Stack>
                <Button
                    variant="contained"
                    onClick={() => handleNextStep(3)}
                    disableElevation>
                    Create Workspace
                </Button>
            </Stack>
        </>
    );
}

export default StepThree;
