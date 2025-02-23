import { Button, styled } from '@mui/material'

export const PrimaryButton = styled(Button)(({ theme }) => ({
    background: 'linear-gradient(to right, #1D2671, #C33764)',
    color: 'white',
    borderRadius: '8px',
    boxShadow: theme.shadows[3],
    transition: 'all 0.3s ease-in-out',

    // Responsive padding
    padding: '6px 16px',
    [theme.breakpoints.up('sm')]: {
        padding: '8px 20px',
    },
    [theme.breakpoints.up('md')]: {
        padding: '8px 24px',
    },

    // Responsive font size
    fontSize: '0.875rem',
    [theme.breakpoints.up('sm')]: {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.125rem',
    },

    fontWeight: 600,

    '&:hover': {
        background: 'linear-gradient(to right, #1D2671, #C33764)',
        transform: 'scale(1.05)',
        boxShadow: theme.shadows[5],
        filter: 'brightness(1.1)',
        '& .icon': {
            transform: 'rotate(10deg)',
        },
        '& .underline': {
            width: '100%',
        }
    },

    '&:active': {
        transform: 'scale(0.95)',
    },
}));