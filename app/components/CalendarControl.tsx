// components/CustomDivider.tsx
"use client"; // This line makes this file a client component in Next.js


import React, { forwardRef } from 'react'
import Image from "next/image";
import { Box, Typography } from "@mui/material";



interface CalendarControlProps {
    onClick: () => void; // Define the onClick prop
    month: string; //Month abbreviation
    year: number; //Year
}
// Use forwardRef to allow the parent component to pass refs

const CalendarControl = forwardRef<HTMLButtonElement, CalendarControlProps>(({ onClick, month, year }, ref) => (
    <Box className="flex w-1/3 justify-between items-center" ref={ref} onClick={onClick}>
        <Image
            src="/images/icons/Calendar.svg"
            alt="Logo"
            width={23.47}
            height={23.47}
            className="xs:w-[10] sm:w-[12] md:w-[15] lg:w-[23.47]"
        />
        <Typography
            variant="h3"
            color="white"
            sx={{
                fontWeight: 300,
                alignContent: 'flex-start',
                fontFamily: 'Montserrat',
                fontSize: {
                    xs: "15px",
                    sm: "20px",  // Small screens
                    md: "25px",  // Medium screens
                    lg: "30px"
                }
            }}
        >
            {month}
        </Typography>
        <Typography
            variant="h3"
            color="white"
            sx={{
                fontWeight: 300,
                alignContent: 'flex-start',
                fontFamily: 'Montserrat',
                fontSize: {
                    xs: "15px",
                    sm: "20px",  // Small screens
                    md: "25px",  // Medium screens
                    lg: "30px"
                }
            }}
        >
            {year}
        </Typography>
    </Box>
))

// Set the display name for the component
CalendarControl.displayName = 'CalendarControl';

export default CalendarControl;
