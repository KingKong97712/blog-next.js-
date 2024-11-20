// Import necessary dependencies
import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Header from './Header';
import WhiteCustomButton from './WhiteButton';

const Home: React.FC = () => {
    return (
        <Box
            className="flex"
            sx={{
                width: '100%',
                // height: '100%', // Adjust to match the image height
                aspectRatio: '1.78 / 1', // Aspect ratio of 3:1 (width to height)
                backgroundImage: 'url("/images/Home/home3.png")',
                backgroundSize: 'cover', // Ensure the image covers the entire box
                backgroundPosition: 'center', // Center the image
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Box className="flex w-full h-1/6">
                <Header />
            </Box>
            <Box className="flex w-full h-2/3">
                <Box className="flex w-3/4">

                </Box>
                <Box className="flex w-1/4">
                    <Box className="flex w-1/2 items-end">
                        <Image
                            src="/images/Home/text_circle.png"
                            alt="Logo"
                            width={114}
                            height={114}
                        />
                    </Box>
                    <Box className="flex w-1/2">
                        <Image
                            src="/images/Home/right_text.png"
                            alt="Logo"
                            width={18}
                            height={650}
                        />
                    </Box>
                </Box>
            </Box>
            <Box className="flex w-full h-1/6">
                <Box className="flex w-1/3 justify-around items-center">
                    <WhiteCustomButton label={'Enquire now!'} iconSrc={'images/Vector.svg'} />
                    <WhiteCustomButton label={'Enquire now!'} iconSrc={'images/Vector.svg'} />
                </Box>
                <Box className="flex w-2/3 justify-center items-center">
                    <Typography
                        variant="h3"
                        color="#FFFFFF"
                        sx={{
                            fontWeight: 400,
                            alignContent: 'flex-start',
                            fontFamily: 'Abhaya Libre Medium',
                            fontSize: {
                                xs: "15px",
                                sm: "25px",  // Small screens
                                md: "35px",  // Medium screens
                                lg: "50px"
                            }
                        }}
                    >
                        STONE BY SPLENDOUR IN STONE
                    </Typography>
                </Box>
            </Box>

            {/* <Box className="">
                    <Image
                        src="/images/Home/right_text.png"
                        alt="Logo"
                        width={18}
                        height={650}
                    />
                </Box> */}
        </Box>
    );
};

export default Home;
