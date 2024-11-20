
"use client"
// app/about/page.tsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { Box, Typography, Avatar, Rating } from '@mui/material';
import Image from 'next/image';
import { EmblaOptionsType } from 'embla-carousel'

import FullCustomFaqDivider from '../components/FullCustomFaqDivider';
import CustomPartDivider from '../components/CustomPartDivider';

import ServocesEmblaCarousel from '../components/Services/EmblaCarousel/EmblaCarousel';
import WhiteCustomButton from '../components/WhiteButton';

import './embla.css';

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const ServicesPage = () => {
    const [value] = React.useState<number | null>(5);
    return (
        <Box className="container mx-auto space-y-12">

            <Header />

            <Box className="flex w-full justify-between gap-2">
                <Box className="flex flex-col w-7/12">
                    <Box className="flex h-1/3">
                    </Box>
                    <Box className="flex flex-col h-2/3">
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
                            WE&apos;RE PASSIONATE ABOUT ELEVATING AUSTRALIAN HOMES
                        </Typography>
                    </Box>
                    <Box className="w-11/12">
                        <FullCustomFaqDivider />
                    </Box>

                </Box>
                <Box className="flex flex-col w-5/12">
                    <Box className="w-full">
                        <Image
                            src="/images/Service/advertisement/main.png"
                            alt="main"
                            width={720}
                            height={550}
                        />
                    </Box>
                </Box>
            </Box>

            <Box className="flex w-full justify-between">
                <Box className="flex w-1/3">
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
                        with natural stone&apos;s timeless beauty and enduring qualities. We offer a comprehensive suite of services to transform your vision into reality, from selecting the perfect stone to flawless installation.
                    </Typography>
                </Box>
                <Box className="flex w-5/12 gap-3">
                    <Box className="flex w-1/2">
                        <Image
                            src="/images/Service/advertisement/image1.png"
                            alt="main"
                            width={344}
                            height={148}
                        />
                    </Box>
                    <Box className="flex w-1/2">
                        <Image
                            src="/images/Service/advertisement/image2.png"
                            alt="main"
                            width={344}
                            height={148}
                        />
                    </Box>
                </Box>
            </Box>

            <CustomPartDivider />

            <Box className="flex w-full justify-between">
                <Box className="flex w-1/3">
                    <Typography
                        variant="h3"
                        color="white"
                        sx={{
                            fontWeight: 600,
                            alignContent: 'flex-start',
                            fontFamily: 'Raleway',
                            fontSize: {
                                xs: "25px",
                                sm: "35px",  // Small screens
                                md: "50px",  // Medium screens
                                lg: "70px"
                            }
                        }}
                    >
                        OUR SERVICES
                    </Typography>
                </Box>
                <Box className="flex w-1/12">
                    <Image
                        src="/images/Service/Vector.svg"
                        alt="main"
                        width={70}
                        height={70}
                    />
                </Box>
            </Box>

            <ServocesEmblaCarousel slides={SLIDES} options={OPTIONS} />

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
                        YOUR STONE DESIGN JOURNEY AT SPLENDOUR IN STONE
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
                        At Splendour in Stone, the journey towards your dream stone design should be seamless and enjoyable.
                        We understand that embarking on a stone design project can involve questions. Our team is here to guide you through every step, ensuring a smooth and stress-free experience.
                        Here&apos;s a glimpse into the collaborative process, from your initial inquiry to the final installation:
                    </Typography>
                </Box>
            </Box>

            <FullCustomFaqDivider />

            <Box className="flex w-full justify-between gap-6">
                <Box className="flex w-1/5 items-start">
                    <Typography
                        variant="h3"
                        color="#F9C275"
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
                    >01</Typography>
                </Box>
                <Box className="flex w-2/5 flex-col justify-center gap-5">
                    <Typography
                        variant="h3"
                        color="white"
                        sx={{
                            fontWeight: 600,
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
                        CONSULTATION CALL
                    </Typography>
                    <Typography
                        variant="h3"
                        color="#FFFFFF"
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
                        Our conversation begins with a friendly call. We&apos;ll discuss your vision, understand your project scope, and answer any questions you may have about natural stone.
                    </Typography>
                </Box>
                <Box className="flex w-2/5">
                    <Image
                        src="/images/Service/journey/consultation.png"
                        alt="main"
                        width={471}
                        height={221}
                    />
                </Box>
            </Box>

            <FullCustomFaqDivider />

            <Box className="flex w-full justify-between gap-6">
                <Box className="flex w-1/5 items-start">
                    <Typography
                        variant="h3"
                        color="#F9C275"
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
                    >02</Typography>
                </Box>
                <Box className="flex w-2/5 flex-col justify-center gap-5">
                    <Typography
                        variant="h3"
                        color="white"
                        sx={{
                            fontWeight: 600,
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
                        PROJECT DISCUSSTION
                    </Typography>
                    <Typography
                        variant="h3"
                        color="#FFFFFF"
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
                        Following the call, we&apos;ll delve deeper. We&apos;ll explore design options, recommend suitable stone types based on your preferences and space, and provide initial estimates to ensure transparency. Additionally, this is the perfect opportunity to visit our showroom for a more realistic feel of what to expect.
                    </Typography>
                </Box>
                <Box className="flex w-2/5">
                    <Image
                        src="/images/Service/journey/discussion.png"
                        alt="main"
                        width={471}
                        height={221}
                    />
                </Box>
            </Box>

            <FullCustomFaqDivider />

            <Box className="flex w-full justify-between gap-6">
                <Box className="flex w-1/5 items-start">
                    <Typography
                        variant="h3"
                        color="#F9C275"
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
                    >03</Typography>
                </Box>
                <Box className="flex w-2/5 flex-col justify-center gap-5">
                    <Typography
                        variant="h3"
                        color="white"
                        sx={{
                            fontWeight: 600,
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
                        ON-SITE MEASUREMENTS
                    </Typography>
                    <Typography
                        variant="h3"
                        color="#FFFFFF"
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
                        Once we&apos;ve established a plan, our team members will visit your site to take precise measurements. This ensures a flawless fit and avoids any unwanted surprises during installation.
                    </Typography>
                </Box>
                <Box className="flex w-2/5">
                    <Image
                        src="/images/Service/journey/measurement.png"
                        alt="main"
                        width={471}
                        height={221}
                    />
                </Box>
            </Box>

            <FullCustomFaqDivider />

            <Box className="flex w-full justify-between gap-6">
                <Box className="flex w-1/5 items-start">
                    <Typography
                        variant="h3"
                        color="#F9C275"
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
                    >04</Typography>
                </Box>
                <Box className="flex w-2/5 flex-col justify-center gap-5">
                    <Typography
                        variant="h3"
                        color="white"
                        sx={{
                            fontWeight: 600,
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
                        STOCK ALLOCATION AND SCHEDULE
                    </Typography>
                    <Typography
                        variant="h3"
                        color="#FFFFFF"
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
                        With your project details finalised, we&apos;ll secure the perfect stone selection and collaborate with a trusted and highly skilled stone mason for installation.
                    </Typography>
                </Box>
                <Box className="flex w-2/5">
                    <Image
                        src="/images/Service/journey/allocation.png"
                        alt="main"
                        width={471}
                        height={221}
                    />
                </Box>
            </Box>

            <FullCustomFaqDivider />

            <Box className="flex w-full justify-between gap-6">
                <Box className="flex w-1/5 items-start">
                    <Typography
                        variant="h3"
                        color="#F9C275"
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
                    >06</Typography>
                </Box>
                <Box className="flex w-2/5 flex-col justify-center gap-5">
                    <Typography
                        variant="h3"
                        color="white"
                        sx={{
                            fontWeight: 600,
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
                        DELIVERY-(INSTALLATIONI)
                    </Typography>
                    <Typography
                        variant="h3"
                        color="#FFFFFF"
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
                        The big day arrives! Our recommended stone mason will meticulously install your chosen stone, transforming your space with the enduring beauty of natural stone.
                    </Typography>
                </Box>
                <Box className="flex w-2/5">
                    <Image
                        src="/images/Service/journey/installation.png"
                        alt="main"
                        width={471}
                        height={221}
                    />
                </Box>
            </Box>

            <FullCustomFaqDivider />
            <Box className="flex w-full justify-between gap-6">
                <Box className="flex w-1/5 items-start">
                    <Typography
                        variant="h3"
                        color="#F9C275"
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
                    >06</Typography>
                </Box>
                <Box className="flex w-2/5 flex-col justify-center gap-5">
                    <Typography
                        variant="h3"
                        color="white"
                        sx={{
                            fontWeight: 600,
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
                        NATURAL STONE SATISFACTION
                    </Typography>
                    <Typography
                        variant="h3"
                        color="#FFFFFF"
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
                        The big day arrives! Our recommended stone mason will meticulously install your chosen stone, transforming your space with the enduring beauty of natural stone.
                    </Typography>
                </Box>
                <Box className="flex w-2/5">
                    <Image
                        src="/images/Service/journey/installation.png"
                        alt="main"
                        width={471}
                        height={221}
                    />
                </Box>
            </Box>

            <FullCustomFaqDivider />

            <Box
                className="flex w-full p-3"
                sx={{
                    position: 'relative',
                    // width: '80%',
                    aspectRatio: '1.77 / 1', // Aspect ratio of 3:1 (width to height)
                    backgroundImage: 'url("/images/Service/satisfaction.png")',
                    backgroundSize: 'cover', // Ensure the image covers the entire box
                    backgroundPosition: 'center', // Center the image
                    display: 'flex',
                    alignItems: 'center', // Center align text vertically
                    justifyContent: 'space-around', // Center align text horizontally
                    borderRadius: '25px',
                    // Adding the overlay pseudo-element
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust the opacity here
                        zIndex: 1, // Ensure it&apos;s on top of the background image but behind the content
                    },
                }}
            >
                <Box className="flex w-1/2 h-full items-center" sx={{ zIndex: 2 }}>
                    <Box className="flex w-full flex-col h-1/2 justify-center gap-6">
                        <Box>
                            <Typography
                                variant="h4"
                                color="white"
                                sx={{
                                    fontFamily: 'Raleway',
                                    fontSize: {
                                        xs: '20px', // Font size for extra small screens
                                        sm: '25px', // Font size for small screens
                                        md: '35px', // Font size for medium screens
                                        lg: '50px', // Font size for large screens
                                    },
                                    fontWeight: 300,
                                    textAlign: 'start',
                                }}
                            >
                                TRANSPARENCY YOU CAN TRUST:
                            </Typography>
                            <Typography
                                variant="h4"
                                color="white"
                                sx={{
                                    fontFamily: 'Raleway',
                                    fontSize: {
                                        xs: '20px', // Font size for extra small screens
                                        sm: '25px', // Font size for small screens
                                        md: '35px', // Font size for medium screens
                                        lg: '50px', // Font size for large screens
                                    },
                                    fontWeight: 300,
                                    textAlign: 'start',
                                }}
                            >
                                EXPLORING OUR PRICING
                            </Typography>
                        </Box>
                        <WhiteCustomButton label={'Enquire Now!'} iconSrc={'/images/vector.svg'} />
                    </Box>
                </Box>

                <Box className="flex w-2/5 items-center" sx={{ zIndex: 2 }}>
                    <Box className="flex w-full">
                        <Typography
                            variant="h4"
                            color="white"
                            sx={{
                                fontFamily: 'Raleway',
                                fontSize: {
                                    xs: '10px', // Font size for extra small screens
                                    sm: '12px', // Font size for small screens
                                    md: '15px', // Font size for medium screens
                                    lg: '20px', // Font size for large screens
                                },
                                fontWeight: 300,
                                textAlign: 'start',
                            }}
                        >
                            At Splendour in Stone, we believe in open communication. We invite you to visit our Pricing Page to explore a breakdown of our services and associated costs. This ensures you can make informed decisions while embarking on your stone design journey.
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box className="flex w-full justify-between">
                <Box className="flex flex-col w-4/5 items-start">
                    <Typography
                        className='w-2/3'
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
                        HEAR FROM OUR SATISFIED CLIENTS:
                    </Typography>
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
                        UNVEILING THE SPLENDOUR
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
                        Are you curious to hear how we&apos;ve transformed spaces with natural stone? Dive into our Testimonials Page to hear from our delighted clients and discover how natural stone has added a touch of magic to their homes and businesses. You can also view our portfolio to get a clear picture of the transformations we have achieved with our clients.
                    </Typography>
                </Box>
            </Box>

            <FullCustomFaqDivider />

            <Box className="flex w-full justify-between gap-6">
                <Box className="flex flex-col w-1/3 justify-center items-center">
                    <Avatar alt="Remy Sharp" src="/images/Service/avatar.png" sx={{ width: '200px', height: '200px' }} />
                    <Box className="flex items-center">
                        <Box>
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
                                Sarah M.
                            </Typography>
                        </Box>
                        <Box>
                            <Image
                                src="/images/Service/check.png"
                                alt="check"
                                width={25}
                                height={25}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Rating name="read-only" value={value} readOnly />
                    </Box>
                    <Box>
                        <Typography
                            variant="h3"
                            color="white"
                            sx={{
                                fontWeight: 600,
                                alignContent: 'center',
                                fontFamily: 'Montserrat',
                                fontSize: {
                                    xs: "10px",
                                    sm: "12px",  // Small screens
                                    md: "15px",  // Medium screens
                                    lg: "20px"
                                }
                            }}
                        >
                            "I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.”
                        </Typography>
                    </Box>

                    <Box>
                        <WhiteCustomButton label={'Read more'} iconSrc={'/images/vector.svg'} />
                    </Box>

                </Box>
                <Box className="flex flex-col w-1/3 justify-center items-center">
                    <Avatar alt="Remy Sharp" src="/images/Service/avatar.png" sx={{ width: '200px', height: '200px' }} />
                    <Box className="flex items-center">
                        <Box>
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
                                Sarah M.
                            </Typography>
                        </Box>
                        <Box>
                            <Image
                                src="/images/Service/check.png"
                                alt="check"
                                width={25}
                                height={25}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Rating name="read-only" value={value} readOnly />
                    </Box>
                    <Box>
                        <Typography
                            variant="h3"
                            color="white"
                            sx={{
                                fontWeight: 600,
                                alignContent: 'center',
                                fontFamily: 'Montserrat',
                                fontSize: {
                                    xs: "10px",
                                    sm: "12px",  // Small screens
                                    md: "15px",  // Medium screens
                                    lg: "20px"
                                }
                            }}
                        >
                            "I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.”
                        </Typography>
                    </Box>

                    <Box>
                        <WhiteCustomButton label={'Read more'} iconSrc={'/images/vector.svg'} />
                    </Box>

                </Box>
                <Box className="flex flex-col w-1/3 justify-center items-center">
                    <Avatar alt="Remy Sharp" src="/images/Service/avatar.png" sx={{ width: '200px', height: '200px' }} />
                    <Box className="flex items-center">
                        <Box>
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
                                Sarah M.
                            </Typography>
                        </Box>
                        <Box>
                            <Image
                                src="/images/Service/check.png"
                                alt="check"
                                width={25}
                                height={25}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Rating name="read-only" value={value} readOnly />
                    </Box>
                    <Box>
                        <Typography
                            variant="h3"
                            color="white"
                            sx={{
                                fontWeight: 600,
                                alignContent: 'center',
                                fontFamily: 'Montserrat',
                                fontSize: {
                                    xs: "10px",
                                    sm: "12px",  // Small screens
                                    md: "15px",  // Medium screens
                                    lg: "20px"
                                }
                            }}
                        >
                            "I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.”
                        </Typography>
                    </Box>

                    <Box>
                        <WhiteCustomButton label={'Read more'} iconSrc={'/images/vector.svg'} />
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
                            xs: '20px', // Font size for extra small screens
                            sm: '30px', // Font size for small screens
                            md: '40px', // Font size for medium screens
                            lg: '60px', // Font size for large screens
                        },
                        fontWeight: 300,
                    }}>
                        READY TO CRAFT YOUR STONE MASTERPIECE?
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
                        Contact our friendly and knowledgeable team today. We&apos;re here to answer your questions, discuss your project, and guide you towards the perfect stone solution. Let Splendour in Stone be your partner in creating a space that reflects your unique style and endures for generations to come.

                    </Typography>

                </Box>

            </Box>
            <Box className="flex w-full justify-center">
                <WhiteCustomButton label={'Contact Us'} iconSrc={'/images/vector.svg'} />
            </Box>

            <Footer />

        </Box>
    );
};

export default ServicesPage;
