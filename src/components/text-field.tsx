import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputBase, { InputBaseProps } from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';

const CustomInput = styled(InputBase)<InputBaseProps>(
    ({ theme, startAdornment }) => ({
        'label + &': {
            marginTop: theme.spacing(3),
        },
        '& .MuiInputBase-input': {
            borderRadius: startAdornment ? '0 4px 4px 0' : 4,
            position: 'relative',
            border: '2px solid #eaeaf0',
            fontSize: 14,
            width: '100%',
            padding: '12px 14px',
            transition: theme.transitions.create([
                'border-color',
                'background-color',
                'box-shadow',
            ]),
            '&:focus': {
                borderColor: theme.palette.primary.main,
            },
        },
    }),
);

const CustomLabel = styled(InputLabel)({
    display: 'flex',
    gap: 10,
    fontWeight: 600,
    fontSize: 18,
});

export default function CustomizedInputs({
    label,
    placeholder,
    defaultValue,
    id,
    startAdornmentText,
    optional = false,
}: CustomizedInputsPropsType) {
    return (
        <FormControl variant="standard" size="small">
            <CustomLabel shrink htmlFor={id}>
                {label}
                {optional && (
                    <Typography color="text.disabled">(Optional)</Typography>
                )}
            </CustomLabel>
            <CustomInput
                startAdornment={
                    startAdornmentText && (
                        <Typography
                            variant="body2"
                            sx={{
                                padding: '12px 14px',
                                bgcolor: '#F4F6F9',
                                borderRadius: '4px 0 0 4px',
                                border: '2px solid #eaeaf0',
                                borderRight: 'none',
                            }}
                            color="text.disabled">
                            {startAdornmentText}
                        </Typography>
                    )
                }
                defaultValue={defaultValue}
                placeholder={placeholder}
                id={id}
            />
        </FormControl>
    );
}

type CustomizedInputsPropsType = {
    label: string;
    placeholder?: string;
    defaultValue?: string;
    id?: string;
    startAdornmentText?: string;
    optional?: boolean;
};
