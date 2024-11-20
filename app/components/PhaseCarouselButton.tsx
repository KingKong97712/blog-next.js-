// components/DateCarouselButton.tsx
"use client"; // This line makes this file a client component in Next.js

import { Box, Typography } from '@mui/material';

interface PhaseCarouselButtonProps {
    phase: string,
}


const PhaseCarouselButton: React.FC<PhaseCarouselButtonProps> = ({ phase }) => {
    return (
        <Box className="flex flex-col rounded-lg aspect-[7/1] justify-center items-center" sx={{ border: '1px solid #DBC6BC', minWidth: '30%' }}>
            <Typography
                className="flex w-1/2 h-1/2 justify-center items-center"
                variant="h3"
                color="white"
                sx={{
                    fontWeight: 300,
                    fontFamily: 'Montserrat',
                    fontSize: {
                        xs: "15px",
                        sm: "20px",  // Small screens
                        md: "25px",  // Medium screens
                        lg: "30px"
                    }
                }}
            >
                {phase}
            </Typography>
        </Box>
    );
};

export default PhaseCarouselButton;
