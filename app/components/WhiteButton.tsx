// Import necessary dependencies
import React from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image';

// Define the component's props with TypeScript types
interface CustomButtonProps {
    label: string;
    iconSrc: string;
    onClick?: () => void;
}

const WhiteCustomButton: React.FC<CustomButtonProps> = ({ label, iconSrc, onClick }) => {
    return (
        <Button
            variant="outlined"
            endIcon={
                <Image
                    src={iconSrc}
                    alt="Logo"
                    width={31.67}
                    height={31.67}
                />
            }
            onClick={onClick}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: {
                    xs: '70px',    // Extra small screens
                    sm: '100px',   // Small screens
                    md: '150px',   // Medium screens
                    lg: '200px',   // Large screens
                },
                height: {
                    xs: '15px',  // Extra small screens
                    sm: '25px',  // Small screens
                    md: '30px',    // Medium screens
                    lg: '45px',  // Large screens
                },
                borderRadius: '1.5rem',
                color: 'white',
                fontSize: {
                    xs: '5px',  // Extra small screens
                    sm: '8px',      // Small screens
                    md: '10px',  // Medium screens
                    lg: '15px',   // Large screens
                },
                fontWeight: 400,
                fontFamily: 'Hanken Grotesk',
                backgroundColor: 'transparent',
                borderColor: 'white',
                textTransform: 'none',
                '&:hover': {
                    backgroundColor: 'blue.500',
                    color: 'white',
                    borderColor: 'transparent',
                },
            }}
        >
            {label}
        </Button>
    );
};

export default WhiteCustomButton;
