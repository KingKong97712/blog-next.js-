
"use client"
// app/about/page.tsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './embla.css'

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { EmblaOptionsType } from 'embla-carousel'

import FullCustomFaqDivider from '../components/FullCustomFaqDivider';
import CustomPartDivider from '../components/CustomPartDivider';

import ProjectCarousel from '../components/Portfolio/ProjectCarousel';
import MaterialCarousel from '../components/Portfolio/MaterialCarousel';
import PortfolioEmblaCarousel from '../components/Portfolio/EmblaCarousel/EmblaCarousel';
import WhiteCustomButton from '../components/WhiteButton';


const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }

const PortfolioPage = () => {
    return (
        <Box className="container mx-auto space-y-12">

            <Header />

            <Box className="flex w-full">
                <Box className="flex w-1/3">
                </Box>
                <Box className="flex w-2/3 justify-between">
                    <Box className="w-1/4">
                        <Image
                            src="/images/Portfolio/products/product1.png"
                            alt="Stone1"
                            width={200}
                            height={200}
                        />
                    </Box>

                    <Box className="w-1/4">
                        <Image
                            src="/images/Portfolio/products/product2.png"
                            alt="Stone1"
                            width={200}
                            height={200}
                        />
                    </Box>

                    <Box className="w-1/4">

                        <Image
                            src="/images/Portfolio/products/product3.png"
                            alt="Stone1"
                            width={200}
                            height={200}
                        />
                    </Box>

                    <Box className="w-1/4">
                        <Image
                            src="/images/Portfolio/products/product4.png"
                            alt="Stone1"
                            width={200}
                            height={200}
                        />
                    </Box>


                </Box>
            </Box>

            <Box className="flex w-full justify-between">
                <Box className="w-2/3">
                    <Typography
                        variant="h3"
                        color="white"
                        sx={{
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
                        AT SPLENDOUR IN STONE,
                    </Typography>
                    <Typography
                        variant="h3"
                        color="#F9C275"
                        sx={{
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
                        WE DON'T JUST DEAL IN STONE
                    </Typography>
                </Box>

                <Image
                    src="/images/Portfolio/Vector.svg"
                    alt="Vector"
                    width={130}
                    height={130}
                />
            </Box>

            <FullCustomFaqDivider />

            <Box className="flex w-full justify-between">
                <Box className="w-1/4">
                    <Typography
                        variant="h3"
                        color="#FFFFFF"
                        sx={{
                            fontWeight: 300,
                            alignContent: 'flex-start',
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: "8px",
                                sm: "12px",  // Small screens
                                md: "15px",  // Medium screens
                                lg: "20px"
                            }
                        }}
                    >
                        we create experiences. Our portfolio showcases a captivating collection of projects where natural stone has breathed life into Melbourne homes and businesses.
                    </Typography>

                </Box>
                <Box className="flex w-2/5">
                    <Typography
                        variant="h3"
                        color="#FFFFFF"
                        sx={{
                            fontWeight: 300,
                            alignContent: 'flex-start',
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: "8px",
                                sm: "12px",  // Small screens
                                md: "15px",  // Medium screens
                                lg: "20px"
                            }
                        }}
                    >
                        Explore a curated selection of projects, each a testament to natural stone's enduring beauty and versatility. From modern kitchen renovations featuring captivating stone splashbacks to stunning outdoor living spaces paved with timeless elegance, discover how we've collaborated with clients to translate their visions into reality.
                    </Typography>
                </Box>
            </Box>

            <CustomPartDivider />

            <Box className="flex w-full justify-between">
                <Box className="flex w-1/2 items-center">
                    <Typography
                        variant="h3"
                        color="white"
                        sx={{
                            fontWeight: 300,
                            alignContent: 'flex-start',
                            fontFamily: 'Raleway',
                            fontSize: {
                                xs: "20px",
                                sm: "30px",  // Small screens
                                md: "45px",  // Medium screens
                                lg: "60px"
                            }
                        }}
                    >
                        FIND INSPIRATION FOR YOUR PROJECT
                    </Typography>
                </Box>
                <Box className="flex w-1/3 items-center">
                    <Typography
                        variant="h3"
                        color="#ffffff"
                        sx={{
                            fontWeight: 300,
                            alignContent: 'flex-start',
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: "8px",
                                sm: "10px",  // Small screens
                                md: "12px",  // Medium screens
                                lg: "20px"
                            }
                        }}
                    >
                        Whether you're seeking classic sophistication or a burst of contemporary flair, our portfolio offers a wealth of inspiration.
                    </Typography>
                </Box>
            </Box>

            <Box
                className="flex w-full"
                sx={{
                    position: 'relative',
                    width: '100%',
                    // height: '100%', // Adjust to match the image height
                    aspectRatio: '3 / 1', // Aspect ratio of 3:1 (width to height)
                    backgroundImage: 'url("/images/Portfolio/mission.png")',
                    backgroundSize: 'cover', // Ensure the image covers the entire box
                    backgroundPosition: 'center', // Center the image
                    display: 'flex',
                    alignItems: 'center', // Center align text vertically
                    justifyContent: 'flex-start', // Center align text horizontally
                    borderRadius: '25px'
                }}
            >
            </Box>

            <CustomPartDivider />

            <Box className="flex w-full justify-between">
                <Box className="flex w-1/2 items-center">
                    <Typography
                        variant="h3"
                        color="white"
                        sx={{
                            fontWeight: 300,
                            alignContent: 'flex-start',
                            fontFamily: 'Raleway',
                            fontSize: {
                                xs: "20px",
                                sm: "30px",  // Small screens
                                md: "45px",  // Medium screens
                                lg: "60px"
                            }
                        }}
                    >
                        PROJECT TYPE
                    </Typography>
                </Box>
                <Box className="flex w-1/3 items-center">
                    <Typography
                        variant="h3"
                        color="#ffffff"
                        sx={{
                            fontWeight: 300,
                            alignContent: 'flex-start',
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: "8px",
                                sm: "10px",  // Small screens
                                md: "12px",  // Medium screens
                                lg: "20px"
                            }
                        }}
                    >
                        Narrow your search by exploring projects categorised by application, such as kitchens, bathrooms, or outdoor spaces.
                    </Typography>
                </Box>
            </Box>

            <ProjectCarousel />

            <CustomPartDivider />

            <Box className="flex w-full justify-between">
                <Box className="flex w-1/3 items-center justify-center">
                    <Typography
                        variant="h3"
                        color="#ffffff"
                        sx={{
                            fontWeight: 300,
                            alignContent: 'flex-start',
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: "8px",
                                sm: "10px",  // Small screens
                                md: "12px",  // Medium screens
                                lg: "20px"
                            }
                        }}
                    >
                        Delve deeper into the specific stones used in each project, allowing you to discover the unique textures and colours each natural stone offers.
                    </Typography>
                </Box>
                <Box className="flex w-1/2 justify-center items-center">
                    <Typography
                        variant="h3"
                        color="white"
                        sx={{
                            fontWeight: 300,
                            alignContent: 'flex-start',
                            fontFamily: 'Raleway',
                            fontSize: {
                                xs: "20px",
                                sm: "30px",  // Small screens
                                md: "45px",  // Medium screens
                                lg: "60px"
                            }
                        }}
                    >
                        EXPLORE THE MATERIALS
                    </Typography>
                </Box>
            </Box>

            <MaterialCarousel />

            <CustomPartDivider />

            <Box className="flex w-full justify-between">
                <Box className="flex w-1/2 items-center">
                    <Typography
                        variant="h3"
                        color="white"
                        sx={{
                            fontWeight: 300,
                            alignContent: 'flex-start',
                            fontFamily: 'Raleway',
                            fontSize: {
                                xs: "20px",
                                sm: "30px",  // Small screens
                                md: "45px",  // Medium screens
                                lg: "60px"
                            }
                        }}
                    >
                        GIVING YOU PRACTICALITY
                    </Typography>
                </Box>
                <Box className="flex w-1/3 items-center">
                    <Typography
                        variant="h3"
                        color="#ffffff"
                        sx={{
                            fontWeight: 300,
                            alignContent: 'flex-start',
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: "8px",
                                sm: "10px",  // Small screens
                                md: "12px",  // Medium screens
                                lg: "20px"
                            }
                        }}
                    >
                        Beyond the visual appeal, each project description highlights the practical benefits of using natural stone. Discover how stone's durability enhances functionality, its timeless style adds lasting value, and its sustainable nature creates an eco-conscious space.

                    </Typography>
                </Box>
            </Box>

            <FullCustomFaqDivider />

            <PortfolioEmblaCarousel options={OPTIONS} />

            <CustomPartDivider />

            <Box className="flex w-full gap-8">
                <Box className="w-1/4">
                    <Image
                        src="/images/Portfolio/products/product1.png"
                        alt="Stone1"
                        width={250}
                        height={250}
                    />
                </Box>

                <Box className="w-1/4">
                    <Image
                        src="/images/Portfolio/products/product2.png"
                        alt="Stone1"
                        width={250}
                        height={250}
                    />
                </Box>

                <Box className="w-1/4">

                    <Image
                        src="/images/Portfolio/products/product3.png"
                        alt="Stone1"
                        width={250}
                        height={250}
                    />
                </Box>

                <Box className="w-1/4">
                    <Image
                        src="/images/Portfolio/products/product4.png"
                        alt="Stone1"
                        width={250}
                        height={250}
                    />
                </Box>
            </Box>

            <FullCustomFaqDivider />

            <Box className="flex w-full justify-between">
                <Box className="flex w-1/2 items-center">
                    <Typography
                        variant="h3"
                        color="white"
                        sx={{
                            fontWeight: 300,
                            alignContent: 'flex-start',
                            fontFamily: 'Raleway',
                            fontSize: {
                                xs: "20px",
                                sm: "30px",  // Small screens
                                md: "45px",  // Medium screens
                                lg: "60px"
                            }
                        }}
                    >
                        READY TO START YOUR STONE JOURNEY?
                    </Typography>
                </Box>
                <Box className="flex flex-col w-1/3 items-center gap-3">
                    <Typography
                        variant="h3"
                        color="#ffffff"
                        sx={{
                            fontWeight: 300,
                            alignContent: 'flex-start',
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: "8px",
                                sm: "10px",  // Small screens
                                md: "12px",  // Medium screens
                                lg: "20px"
                            }
                        }}
                    >
                        Beyond the visual appeal, each project description highlights the practical benefits of using natural stone. Discover how stone's durability enhances functionality, its timeless style adds lasting value, and its sustainable nature creates an eco-conscious space.
                    </Typography>

                    <Box className="flex w-full justify-between gap-4">
                        <WhiteCustomButton label={'Enquire now!'} iconSrc={'/images/vector.svg'} />
                        <WhiteCustomButton label={'Contact Us!'} iconSrc={'/images/vector.svg'} />
                    </Box>
                </Box>
            </Box>

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
                            xs: '30px', // Font size for extra small screens
                            sm: '40px', // Font size for small screens
                            md: '50px', // Font size for medium screens
                            lg: '70px', // Font size for large screens
                        },
                        fontWeight: 300,
                    }}>
                        WE LOOK FORWARD TO CONNECTING WITH YOU
                    </Typography>
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

            <CustomPartDivider />

            <Footer />

        </Box>
    );
};
export default PortfolioPage;
