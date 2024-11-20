
"use client"
// app/about/page.tsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';


import FullCustomFaqDivider from '../components/FullCustomFaqDivider';
import CustomPartDivider from '../components/CustomPartDivider';

import './embla.css';



const ServicesPage = () => {
    return (
        <Box className="container mx-auto space-y-12">

            <Header />

            <Box
                className="flex w-full"
                sx={{
                    position: 'relative',
                    width: '100%',
                    // height: '100%', // Adjust to match the image height
                    aspectRatio: '6.14 / 1', // Aspect ratio of 3:1 (width to height)
                    backgroundImage: 'url("/images/Contact/header_main.png")',
                    backgroundSize: 'cover', // Ensure the image covers the entire box
                    backgroundPosition: 'center', // Center the image
                    display: 'flex',
                    alignItems: 'center', // Center align text vertically
                    justifyContent: 'flex-start', // Center align text horizontally
                    borderRadius: '25px'
                }}
            >
            </Box>

            <Box className="flex w-full flex-col">
                <Typography
                    variant="h3"
                    color="white"
                    sx={{
                        width: '100%',
                        fontWeight: 600,
                        alignContent: 'flex-start',
                        fontFamily: 'Raleway',
                        fontSize: {
                            xs: "15px",
                            sm: "30px",  // Small screens
                            md: "40px",  // Medium screens
                            lg: "50px"
                        }
                    }}
                >
                    AT SPLENDOUR IN STONE, WE BELIEVE YOUR
                </Typography>
                <Typography
                    variant="h3"
                    color="#F9C275"
                    sx={{
                        width: '80%',
                        fontWeight: 600,
                        alignContent: 'flex-start',
                        fontFamily: 'Raleway',
                        fontSize: {
                            xs: "15px",
                            sm: "30px",  // Small screens
                            md: "40px",  // Medium screens
                            lg: "50px"
                        }
                    }}
                > <span style={{ color: 'white' }}>HOME DESERVES </span>
                    THE BRILLIANCE OF
                </Typography>
                <Typography
                    variant="h3"
                    color="white"
                    sx={{
                        width: '100%',
                        fontWeight: 600,
                        alignContent: 'flex-start',
                        fontFamily: 'Raleway',
                        fontSize: {
                            xs: "15px",
                            sm: "30px",  // Small screens
                            md: "40px",  // Medium screens
                            lg: "50px"
                        }
                    }}
                >
                    NATURAL STONE.
                </Typography>
            </Box>

            <FullCustomFaqDivider />

            <Box className="flex w-full justify-between">
                <Box className="w-1/4">
                    <Typography
                        variant="h3"
                        color="white"
                        sx={{
                            fontWeight: 600,
                            alignContent: 'flex-start',
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: "10px",
                                sm: "12px",  // Small screens
                                md: "15px",  // Medium screens
                                lg: "20px"
                            }
                        }}
                    >
                        Whether you're embarking on a grand renovation or seeking a touch of elegance for a specific space, our exquisite stone collection and exceptional design expertise are here to help.
                    </Typography>
                </Box>
                <Box className="w-1/4">
                    <Typography
                        variant="h3"
                        color="white"
                        sx={{
                            fontWeight: 600,
                            alignContent: 'flex-start',
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: "10px",
                                sm: "12px",  // Small screens
                                md: "15px",  // Medium screens
                                lg: "20px"
                            }
                        }}
                    >
                        Our dedicated team is passionate about natural stone and its potential to elevate your space. They're eager to discuss your project's specific needs and guide you through our extensive selection of stone cladding, walling, and paving options.
                    </Typography>
                </Box>
                <Box className="w-1/4">
                    <Typography
                        variant="h3"
                        color="white"
                        sx={{
                            fontWeight: 600,
                            alignContent: 'flex-start',
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: "10px",
                                sm: "12px",  // Small screens
                                md: "15px",  // Medium screens
                                lg: "20px"
                            }
                        }}
                    >
                        We invite you to connect with our friendly and knowledgeable team to discuss your project and transform your vision into reality.
                    </Typography>
                </Box>
                <Box className="flex w-1/12 justify-end items-start">
                    <Image
                        src="/images/Contact/Vector.svg"
                        alt="main"
                        width={120}
                        height={120}
                    />
                </Box>
            </Box>

            <CustomPartDivider />

            <Box className="flex w-full flex-col gap-3">
                <Box className="flex w-full gap-3">
                    <Box className="w-1/3">
                        <Image
                            src="/images/Contact/image1.png"
                            alt="main"
                            width={552}
                            height={395}
                        />
                    </Box>
                    <Box className="w-2/3">
                        <Image
                            src="/images/Contact/image2.png"
                            alt="main"
                            width={1136}
                            height={395}
                        />
                    </Box>
                </Box>
                <Box className="flex w-full gap-3">
                    <Box className="w-1/2 space-y-3">
                        <Box className="flex w-full">
                            <Image
                                src="/images/Contact/image3.png"
                                alt="main"
                                width={844}
                                height={252}
                            />
                        </Box>
                        <Box className="flex w-full">
                            <Image
                                src="/images/Contact/image4.png"
                                alt="main"
                                width={844}
                                height={127}
                            />
                        </Box>

                    </Box>
                    <Box className="w-1/6">
                        <Image
                            src="/images/Contact/image5.png"
                            alt="main"
                            width={262}
                            height={395}
                        />
                    </Box>
                    <Box className="w-1/3">
                        <Image
                            src="/images/Contact/image6.png"
                            alt="main"
                            width={552}
                            height={395}
                        />
                    </Box>
                </Box>

            </Box>

            <CustomPartDivider />

            <Box className="flex w-full justify-between">
                <Box className="flex flex-col w-1/4">
                    <Typography
                        variant="h3"
                        color="white"
                        sx={{
                            width: '100%',
                            fontWeight: 600,
                            alignContent: 'flex-start',
                            fontFamily: 'Raleway',
                            fontSize: {
                                xs: "25px",
                                sm: "35px",  // Small screens
                                md: "50px",  // Medium screens
                                lg: "80px"
                            }
                        }}
                    >
                        GET IN
                    </Typography>
                    <Typography
                        variant="h3"
                        color="white"
                        sx={{
                            width: '100%',
                            fontWeight: 600,
                            alignContent: 'flex-start',
                            fontFamily: 'Raleway',
                            fontSize: {
                                xs: "25px",
                                sm: "35px",  // Small screens
                                md: "50px",  // Medium screens
                                lg: "80px"
                            }
                        }}
                    >
                        TOUCH:
                    </Typography>
                </Box>

                <Box className="flex flex-col w-1/4">
                    <Typography
                        variant="h3"
                        color="white"
                        sx={{
                            width: '100%',
                            fontWeight: 600,
                            alignContent: 'flex-start',
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: "10px",
                                sm: "12px",  // Small screens
                                md: "15px",  // Medium screens
                                lg: "20px"
                            }
                        }}
                    >
                        TOUCH:
                    </Typography>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'white' }}>
                        <li>
                            <Typography
                                variant="h4"
                                color="white"
                                sx={{
                                    fontFamily: 'Montserrat',
                                    fontSize: {
                                        xs: '10px',
                                        sm: '15px',
                                        md: '18px',
                                        lg: '20px',
                                    },
                                    fontWeight: 300,
                                    textAlign: 'start',
                                }}
                            >
                                Feel free to browse our website for further information on our products and services.
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                variant="h4"
                                color="white"
                                sx={{
                                    fontFamily: 'Montserrat',
                                    fontSize: {
                                        xs: '10px',
                                        sm: '15px',
                                        md: '18px',
                                        lg: '20px',
                                    },
                                    fontWeight: 300,
                                    textAlign: 'start',
                                }}
                            >
                                For project inspiration, explore our gallery showcasing a variety of stunning stone applications.
                            </Typography>
                        </li>
                    </ul>
                </Box>

            </Box>


            <Box className="flex w-full justify-between">
                <Box className="flex w-7/12 items-center gap-3">
                    <Box className="w-1/7">
                        <Image
                            src="/images/Contact/phone.png"
                            alt="phone"
                            width={40}
                            height={40}
                        />
                    </Box>
                    <Typography
                        variant="h4"
                        color="white"
                        sx={{
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: '15px',
                                sm: '20px',
                                md: '25px',
                                lg: '30px',
                            },
                            fontWeight: 600,
                            textAlign: 'start',
                        }}
                    >
                        PHONE: <span style={{ fontWeight: 400 }}>(03) 9873 4941</span>
                    </Typography>
                </Box>
                <Box className="flex w-3/12">
                    <Typography
                        variant="h4"
                        color="white"
                        sx={{
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: '10px',
                                sm: '15px',
                                md: '18px',
                                lg: '20px',
                            },
                            fontWeight: 300,
                            textAlign: 'start',
                        }}
                    >
                        We're available Monday-Friday, 9:00 am - 4:00 pm, and Saturday, 9:30 am - 1:30 pm
                    </Typography>
                </Box>
            </Box>

            <FullCustomFaqDivider />

            <Box className="flex w-full justify-between">
                <Box className="flex w-7/12 items-center gap-3">
                    <Box className="w-1/7">
                        <Image
                            src="/images/Contact/email.png"
                            alt="phone"
                            width={40}
                            height={40}
                        />
                    </Box>
                    <Typography
                        variant="h4"
                        color="white"
                        sx={{
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: '15px',
                                sm: '20px',
                                md: '25px',
                                lg: '30px',
                            },
                            fontWeight: 600,
                            textAlign: 'start',
                        }}
                    >
                        EMAIL: <span style={{ fontWeight: 400 }}>INFO@SPLENDOURINSTONE.COM</span>
                    </Typography>
                </Box>
                <Box className="flex w-3/12">
                    <Typography
                        variant="h4"
                        color="white"
                        sx={{
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: '10px',
                                sm: '15px',
                                md: '18px',
                                lg: '20px',
                            },
                            fontWeight: 300,
                            textAlign: 'start',
                        }}
                    >
                        Our team will respond to your email inquiry within one business day.
                    </Typography>
                </Box>
            </Box>

            <FullCustomFaqDivider />

            <Box className="flex w-full justify-between">
                <Box className="flex items-center" sx={{ width: '5%' }}>
                    <Image
                        src="/images/Contact/location.png"
                        alt="phone"
                        width={40}
                        height={40}
                    />
                </Box>
                <Box className="flex w-7/12 items-center">

                    <Typography
                        variant="h4"
                        color="white"
                        sx={{
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: '15px',
                                sm: '20px',
                                md: '25px',
                                lg: '30px',
                            },
                            fontWeight: 600,
                            textAlign: 'start',
                        }}
                    >
                        VISIT OUR SHOWROOM: <span style={{ fontWeight: 400 }}>10/21 COOK RD,MITCHAM, MELBOURNE, VIC 3132.</span>
                    </Typography>
                </Box>
                <Box className="flex w-3/12">
                    <Typography
                        variant="h4"
                        color="white"
                        sx={{
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: '10px',
                                sm: '15px',
                                md: '18px',
                                lg: '20px',
                            },
                            fontWeight: 300,
                            textAlign: 'start',
                        }}
                    >
                        Our showroom hours are the same as our phone hours
                    </Typography>
                </Box>
            </Box>

            <FullCustomFaqDivider />

            <CustomPartDivider />

            <Box className="flex w-full flex-col relative items-center justify-center text-white">
                <Box className="flex justify-center items-center w-full">
                    <Image
                        src="/images/Portfolio/partner.png" // Ensure this image is in the public/images folder
                        alt="Background"
                        // layout="fill"
                        objectFit="cover"
                        className="opacity-30 w-1/4"
                        width={600}
                        height={600}
                    />
                </Box>
                <Box className="absolute z-10 text-center p-8 w-full">
                    <Typography variant="h2" className="mb-4 font-bold" sx={{
                        fontFamily: 'Raleway',
                        fontSize: {
                            xs: '20px', // Font size for extra small screens
                            sm: '30px', // Font size for small screens
                            md: '40px', // Font size for medium screens
                            lg: '60px', // Font size for large screens
                        },
                        fontWeight: 300,
                    }}>
                        WE LOOK FORWARD TO CONNECTING WITH YOU
                    </Typography>

                    <CustomPartDivider />

                    <Typography variant="h5" className="mb-8" sx={{
                        fontFamily: 'Montserrat',
                        fontSize: {
                            xs: '12px', // Font size for extra small screens
                            sm: '14px', // Font size for small screens
                            md: '16px', // Font size for medium screens
                            lg: '20px', // Font size for large screens
                        },
                        fontWeight: 300,
                    }}>
                        and collaborating on your next stone design project.

                    </Typography>

                </Box>

            </Box>

            <Footer />

        </Box>
    );
};

// Static values or pass dynamic props for the Faq Page
export default ServicesPage;
