// components/DateCarouselButton.tsx
"use client"; // This line makes this file a client component in Next.js

import { Box, Typography } from '@mui/material';

interface TimeCarouselButtonProps {
    time: string,
}


const TimeCarouselButton: React.FC<TimeCarouselButtonProps> = ({ time }) => {
    return (
        <Box className="flex flex-col rounded-lg aspect-[3.4/1] justify-center items-center" sx={{ border: '1px solid #DBC6BC', minWidth: '13%' }}>
            <Typography
                className="flex w-1/2 h-1/2 justify-center items-center"
                variant="h3"
                color="white"
                sx={{
                    fontWeight: 300,
                    fontFamily: 'Montserrat',
                    fontSize: {
                        xs: "10px",
                        sm: "15px",  // Small screens
                        md: "20px",  // Medium screens
                        lg: "25px"
                    }
                }}
            >
                {time}
            </Typography>
        </Box>
    );
};

export default TimeCarouselButton;
