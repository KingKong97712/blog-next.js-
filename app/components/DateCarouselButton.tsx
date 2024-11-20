// components/DateCarouselButton.tsx
"use client"; // This line makes this file a client component in Next.js

import { Box, Typography } from '@mui/material';

interface DateCarouselButtonProps {
  date: string,
  day: string,
}


const DateCarouselButton: React.FC<DateCarouselButtonProps> = ({ date, day }) => {
  return (
    <Box className="flex flex-col rounded-lg aspect-[1.4/1] justify-center items-center" sx={{ border: '2px solid #DBC6BC', borderTop: '1px solid #DBC6BC', minWidth: '10%', }}>
      <Typography
        variant="h3"
        color="white"
        sx={{
          fontWeight: 600,
          fontFamily: 'Montserrat',
          fontSize: {
            xs: "15px",
            sm: "20px",  // Small screens
            md: "30px",  // Medium screens
            lg: "40px"
          }
        }}
      >
        {date}
      </Typography>

      <Typography
        variant="h3"
        color="white"
        sx={{
          fontWeight: 400,
          fontFamily: 'Montserrat',
          fontSize: {
            xs: "18px",
            sm: "10px",  // Small screens
            md: "12px",  // Medium screens
            lg: "15px"
          }
        }}
      >
        {day}
      </Typography>
    </Box>
  );
};

export default DateCarouselButton;
