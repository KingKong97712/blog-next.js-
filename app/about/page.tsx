// app/about/page.tsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import CustomDivider from '../components/Divider';
import FullCustomDivider from '../components/FullDivider';
import WhiteCustomButton from '../components/WhiteButton';


const AboutPage = () => {
    return (
        <Box className="container mx-auto space-y-12">
            {/* <h1 className="text-4xl font-bold text-center mt-8">{title}</h1>
            <p className="text-center mt-4">{description}</p> */}
            <Header />

            <Box className="flex w-full space-x-3">
                <Box className="flex flex-col w-1/2 content-around">
                    <Box className="flex w-full">
                        <Box className="w-1/2"></Box>
                        <Box className="w-1/2">
                            <Image
                                src="/images/About/Products/product1.png"
                                alt="Logo"
                                width={410}
                                height={355}
                            />
                        </Box>
                    </Box>
                    <Box className="w-full">
                        <Typography
                            variant="h4"
                            color="white"
                            sx={{
                                fontFamily: 'Raleway',
                                fontSize: {
                                    xs: '20px',  // Font size for extra small screens
                                    sm: '25px',  // Font size for small screens
                                    md: '25px',  // Font size for medium screens
                                    lg: '45px',  // Font size for large screens
                                },
                                fontWeight: 300,
                            }}
                        >
                            Unearth the Enduring Beauty of Stone with Splendour in Stone, <span style={{ fontWeight: 600 }}>Australia’s No. 1 High-end Stone Supplier</span>
                        </Typography>
                    </Box>
                </Box>
                <Box className="flex flex-col w-1/4 space-y-3">
                    <Image
                        src="/images/About/Products/product2.png"
                        alt="Logo"
                        width={410}
                        height={457}
                    />
                    <Image
                        src="/images/About/Products/product4.png"
                        alt="Logo"
                        width={410}
                        height={327}
                    />
                </Box>
                <Box className="flex flex-col w-1/4 space-y-3">
                    <Image
                        src="/images/About/Products/product3.png"
                        alt="Logo"
                        width={410}
                        height={276}
                    />
                    <Image
                        src="/images/About/Products/product5.png"
                        alt="Logo"
                        width={410}
                        height={276}
                    />
                    <Typography
                        variant="h4"
                        color="white"
                        sx={{
                            fontFamily: 'Raleway',
                            fontSize: {
                                xs: '7px',  // Font size for extra small screens
                                sm: '12px',  // Font size for small screens
                                md: '15px',  // Font size for medium screens
                                lg: '20px',  // Font size for large screens
                            },
                            fontWeight: 300,
                        }}
                    >
                        Unearth the Enduring Beauty of Stone with Splendour in Stone, <span style={{ fontWeight: 600 }}>Australia’s No. 1 High-end Stone Supplier</span>
                    </Typography>
                </Box>
            </Box>

            <CustomDivider />

            <Box
                className="flex w-full"
                sx={{
                    position: 'relative',
                    width: '100%',
                    // height: '100%', // Adjust to match the image height
                    aspectRatio: '3 / 1', // Aspect ratio of 3:1 (width to height)
                    backgroundImage: 'url("/images/About/mission.png")',
                    backgroundSize: 'cover', // Ensure the image covers the entire box
                    backgroundPosition: 'center', // Center the image
                    display: 'flex',
                    alignItems: 'center', // Center align text vertically
                    justifyContent: 'flex-start', // Center align text horizontally
                    borderRadius: '25px'
                }}
            >
                <Box className="flex w-1/2">

                </Box>
                <Box className="flex flex-col w-1/2 h-full">
                    <Box className="flex w-full h-1/2"></Box>
                    <Box className="flex w-full flex-col h-1/2 justify-center items-center">
                        <Typography
                            variant="h4"
                            color="white"
                            sx={{
                                fontFamily: 'Raleway',
                                fontSize: {
                                    xs: '20px', // Font size for extra small screens
                                    sm: '25px', // Font size for small screens
                                    md: '45px', // Font size for medium screens
                                    lg: '80px', // Font size for large screens
                                },
                                fontWeight: 300,
                                textAlign: 'start',
                            }}
                        >
                            OUR  MISSION
                        </Typography>
                        <Typography
                            component="span"
                            sx={{
                                fontFamily: 'Raleway',
                                fontSize: {
                                    xs: '20px', // Font size for extra small screens
                                    sm: '25px', // Font size for small screens
                                    md: '45px', // Font size for medium screens
                                    lg: '80px', // Font size for large screens
                                },
                                fontWeight: 300,
                                color: 'white', // Set text color
                                textAlign: 'start'
                            }}
                        >
                            IS SIMPLE:
                        </Typography>
                    </Box>

                </Box>

            </Box>

            <FullCustomDivider />

            <Box className="flex w-full justify-between">
                <Box>
                    <Image
                        src="images/About/Vector/Vector.svg"
                        alt="Logo"
                        width={40}
                        height={40}
                        className='sm:w-[60px] md:w-[80px] lg:w-[113px]'
                    />
                </Box>
                <Box className="w-1/2">
                    <Typography
                        variant="h4"
                        color="white"
                        sx={{
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: '10px', // Font size for extra small screens
                                sm: '15px', // Font size for small screens
                                md: '18px', // Font size for medium screens
                                lg: '20px', // Font size for large screens
                            },
                            fontWeight: 300,
                            textAlign: 'start',
                        }}
                    >
                        We empower homeowners and design professionals in Melbourne, Australia, and internationally to bring their design visions to life using the finest quality stone cladding, walling, and paving products.
                    </Typography>
                </Box>

            </Box>

            <CustomDivider />

            <Box className="flex w-full flex-col relative items-center justify-center text-white">
                <Box className="flex justify-center items-center w-full">
                    <Image
                        src="/images/About/suppliers.png" // Ensure this image is in the public/images folder
                        alt="Background"
                        // layout="fill"
                        objectFit="cover"
                        className="opacity-30"
                        width={600}
                        height={600}
                    />
                </Box>
                <Box className="absolute z-10 text-center p-8 w-full">
                    <Typography variant="h2" className="mb-4 font-bold" sx={{
                        fontFamily: 'Raleway',
                        fontSize: {
                            xs: '40px', // Font size for extra small screens
                            sm: '60px', // Font size for small screens
                            md: '80px', // Font size for medium screens
                            lg: '120px', // Font size for large screens
                        },
                        fontWeight: 300,
                    }}>
                        WE&apos;RE MORE THAN JUST SUPPLIERS
                    </Typography>
                    <Typography variant="h5" className="mb-8" sx={{
                        fontFamily: 'Raleway',
                        fontSize: {
                            xs: '12px', // Font size for extra small screens
                            sm: '14px', // Font size for small screens
                            md: '16px', // Font size for medium screens
                            lg: '20px', // Font size for large screens
                        },
                        fontWeight: 300,
                    }}>
                        we&apos;re stone enthusiasts dedicated to crafting exceptional experiences for our clients.
                    </Typography>
                </Box>
            </Box>

            <CustomDivider />

            <Box className="flex w-full justify-between rounded-2xl text-white gap-10">
                <Box className="w-1/2" >
                    <Image
                        src="/images/About/legacybuilt.jpg" // Ensure this image is in the public/images folder
                        alt="Background"
                        // layout="fill"
                        objectFit="cover"
                        className="opacity-100 rounded-2xl"
                        width={836}
                        height={736}
                    />
                </Box>
                <Box className="flex flex-1 ml-[-300px] justify-center flex-col">
                    <Typography variant="h2" className="mb-4 font-bold" sx={{
                        fontFamily: 'Raleway',
                        fontSize: {
                            xs: '30px', // Font size for extra small screens
                            sm: '40px', // Font size for small screens
                            md: '60px', // Font size for medium screens
                            lg: '80px', // Font size for large screens
                        },
                        fontWeight: 300,
                    }}>
                        A LEGACY BUILT ON QUALITY AND EXPERTISE
                    </Typography>

                    <Typography variant="h5" className="mb-8" sx={{
                        fontFamily: 'Raleway',
                        fontSize: {
                            xs: '12px', // Font size for extra small screens
                            sm: '14px', // Font size for small screens
                            md: '16px', // Font size for medium screens
                            lg: '20px', // Font size for large screens
                        },
                        fontWeight: 300,
                    }}>
                        Splendour in Stone has carved its niche in Australia&apos;s stone industry thanks to the
                        wanderlust of its founder, Jordan Hill.
                    </Typography>
                </Box>
            </Box>


            <CustomDivider />

            <Box className="flex w-full justify-between gap-10">

                <Box className="flex w-1/2">
                    <Image
                        src="/images/About/man1.png"
                        alt="Logo"
                        width={840}
                        height={830}
                    />
                </Box>

                <Box className="flex w-1/2 flex-col justify-center gap-10">
                    <Typography
                        variant="h4"
                        color="white"
                        sx={{
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: '15px', // Font size for extra small screens
                                sm: '30px', // Font size for small screens
                                md: '35px', // Font size for medium screens
                                lg: '50px', // Font size for large screens
                            },
                            fontWeight: 300,
                            textAlign: 'start',
                        }}
                    >
                        THROUGH HIS EXPLORATIOINS ACROSS AFRICA&apos;S EAST COAST, ENDING IN EGYPT,
                    </Typography>
                    <Typography
                        variant="h4"
                        color="white"
                        sx={{
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: '10px', // Font size for extra small screens
                                sm: '15px', // Font size for small screens
                                md: '18px', // Font size for medium screens
                                lg: '20px', // Font size for large screens
                            },
                            fontWeight: 300,
                            textAlign: 'start',
                        }}
                    >
                        he came across the immense beauty of limestone as displayed in the Pyramids of Giza. But this was just the beginning of his discovery of natural stone’s beauty.
                    </Typography>
                    <Box>
                        <Image
                            src="images/About/Vector/Vector.svg"
                            alt="Logo"
                            width={40}
                            height={40}
                            className='sm:w-[60px] md:w-[80px] lg:w-[113px]'
                        />
                    </Box>
                </Box>

            </Box>

            <CustomDivider />

            <Box className="flex w-full justify-between gap-10">

                <Box className="flex w-1/2 flex-col justify-center gap-10">
                    <Typography
                        variant="h4"
                        color="white"
                        sx={{
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: '15px', // Font size for extra small screens
                                sm: '30px', // Font size for small screens
                                md: '35px', // Font size for medium screens
                                lg: '50px', // Font size for large screens
                            },
                            fontWeight: 300,
                            textAlign: 'start',
                        }}
                    >
                        HIS TRAVELS TOOK HIM TO SOUTH AMERICA, TO THE HIDDEN CITY OF THE INCAS IN MACHU PICCHU.
                    </Typography>
                    <Typography
                        variant="h4"
                        color="white"
                        sx={{
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: '10px', // Font size for extra small screens
                                sm: '15px', // Font size for small screens
                                md: '18px', // Font size for medium screens
                                lg: '20px', // Font size for large screens
                            },
                            fontWeight: 300,
                            textAlign: 'start',
                        }}
                    >
                        In all its glory, it was a great discovery of unimaginable granite features built with precision despite the area being unconducive for building.
                    </Typography>
                    <Box>
                        <Image
                            src="images/About/Vector/Vector.svg"
                            alt="Logo"
                            width={40}
                            height={40}
                            className='sm:w-[60px] md:w-[80px] lg:w-[113px]'
                        />
                    </Box>
                </Box>

                <Box className="flex w-1/2">
                    <Image
                        src="/images/About/man2.png"
                        alt="Logo"
                        width={840}
                        height={830}
                    />
                </Box>

            </Box>

            <CustomDivider />

            <Box className="flex w-full justify-between">

                <Box className="flex w-1/2 flex-col justify-center gap-10">
                    <Typography
                        variant="h4"
                        color="white"
                        sx={{
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: '15px', // Font size for extra small screens
                                sm: '30px', // Font size for small screens
                                md: '35px', // Font size for medium screens
                                lg: '50px', // Font size for large screens
                            },
                            fontWeight: 300,
                            textAlign: 'start',
                        }}
                    >
                        THESE WERE BUT A FEW OF THE ARCHITECTURAL INSPIRATIONS
                    </Typography>

                </Box>

                <Box className="flex flex-col w-1/3">
                    <Typography
                        variant="h4"
                        color="white"
                        sx={{
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: '10px', // Font size for extra small screens
                                sm: '15px', // Font size for small screens
                                md: '18px', // Font size for medium screens
                                lg: '20px', // Font size for large screens
                            },
                            fontWeight: 300,
                            textAlign: 'start',
                        }}
                    >
                        that pushed Jordan to explore the craftsmanship and assembly of natural stone. Other notable features included:
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
                                Rome&apos;s St. Peter&apos;s Basilica, St. Paul&apos;s Cathedral, and the Colosseum
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
                                Cambodia’s Angkor Wat.
                            </Typography>
                        </li>
                    </ul>

                </Box>

            </Box>

            <FullCustomDivider />

            <Box className="flex w-full gap-8 ">
                <Box className="flex w-1/4">
                    <Image
                        src="/images/About/Agricultural/image1.png"
                        alt="Logo"
                        width={408}
                        height={413}
                    />
                </Box>
                <Box className="flex w-1/4">
                    <Image
                        src="/images/About/Agricultural/image2.png"
                        alt="Logo"
                        width={408}
                        height={413}
                    />
                </Box>
                <Box className="flex w-1/4">
                    <Image
                        src="/images/About/Agricultural/image3.png"
                        alt="Logo"
                        width={408}
                        height={413}
                    />
                </Box>
                <Box className="flex w-1/4">
                    <Image
                        src="/images/About/Agricultural/image4.png"
                        alt="Logo"
                        width={408}
                        height={413}
                    />
                </Box>
            </Box>

            <CustomDivider />

            <Box className="flex w-full justify-between rounded-2xl gap-10 text-white">
                <Box className="flex flex-1 justify-center flex-col">
                    <Typography variant="h2" className="mb-4 font-bold" sx={{
                        fontFamily: 'Raleway',
                        fontSize: {
                            xs: '30px', // Font size for extra small screens
                            sm: '40px', // Font size for small screens
                            md: '60px', // Font size for medium screens
                            lg: '80px', // Font size for large screens
                        },
                        fontWeight: 300,
                    }}>
                        NOTABLE ACHIEVEMENTS
                    </Typography>

                    <Typography variant="h5" className="mb-8" sx={{
                        fontFamily: 'Raleway',
                        fontSize: {
                            xs: '12px', // Font size for extra small screens
                            sm: '14px', // Font size for small screens
                            md: '16px', // Font size for medium screens
                            lg: '20px', // Font size for large screens
                        },
                        fontWeight: 300,
                    }}>
                        before his founding of Splendour in Stone include his apprenticeship in landscape construction and his work on fireplaces and feature walls using stone.
                        However, his passion remained in supplying stone after much-needed research, travel, and testing, leading to the birth of Slendour in Stone Pty Ltd.
                        Our journey was also fueled by a desire to bridge the gap between premium stone and accessible design solutions. Over the years, we&apos;ve fostered a team of passionate professionals with a wealth of knowledge about natural stone and its applications.
                    </Typography>
                </Box>
                <Box className="w-1/2" >
                    <Image
                        src="/images/About/achievements.jpg" // Ensure this image is in the public/images folder
                        alt="Background"
                        // layout="fill"
                        objectFit="cover"
                        className="opacity-100 rounded-2xl"
                        width={836}
                        height={736}
                    />
                </Box>

            </Box>

            <CustomDivider />


            <Box>
                <Box className="flex w-full">
                    <Typography
                        variant="h4"
                        color="white"
                        sx={{
                            fontFamily: 'Raleway',
                            fontSize: {
                                xs: '15px', // Font size for extra small screens
                                sm: '30px', // Font size for small screens
                                md: '35px', // Font size for medium screens
                                lg: '50px', // Font size for large screens
                            },
                            fontWeight: 300,
                            textAlign: 'start',
                        }}
                    >
                        TODAY, SPLENDOURS IN STONE SUPPLIES A WIDE RANGE OF NATURAL STONES FROM ALL OVER THE WORLD, INCLUDEING:
                    </Typography>
                </Box>
            </Box>

            <Box className="flex w-full gap-8 ">
                <Box className="flex w-1/4">
                    <Image
                        src="/images/About/Stones/stone1.png"
                        alt="Logo"
                        width={408}
                        height={413}
                    />
                </Box>
                <Box className="flex w-1/4">
                    <Image
                        src="/images/About/Stones/stone2.png"
                        alt="Logo"
                        width={408}
                        height={413}
                    />
                </Box>
                <Box className="flex w-1/4">
                    <Image
                        src="/images/About/Stones/stone3.png"
                        alt="Logo"
                        width={408}
                        height={413}
                    />
                </Box>
                <Box className="flex w-1/4">
                    <Image
                        src="/images/About/Stones/stone4.png"
                        alt="Logo"
                        width={408}
                        height={413}
                    />
                </Box>
            </Box>

            <CustomDivider />

            <Box
                className="flex w-full"
                sx={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1.56 / 1', // Aspect ratio of 3:1 (width to height)
                    backgroundImage: 'url("/images/About/house.png")',
                    backgroundSize: 'cover', // Ensure the image covers the entire box
                    backgroundPosition: 'center', // Center the image
                    display: 'flex',
                    alignItems: 'center', // Center align text vertically
                    justifyContent: 'flex-start', // Center align text horizontally
                    borderRadius: '25px',
                }}
            >
                <Box className="flex flex-col w-full h-full justify-center">
                    {/* Left half with background opacity */}
                    <Box
                        className="w-full lg:w-1/2 flex justify-center items-center"
                        sx={{
                            position: 'absolute', // Ensure it covers only the left side
                            height: '100%', // Full height
                            left: 0, // Align to the left side
                            top: 0, // Ensure it spans the full height
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Apply background opacity
                        }}
                    >
                        <Box className="flex flex-col w-5/6">
                            <Box>
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'Raleway',
                                        fontSize: {
                                            xs: '20px', // Font size for extra small screens
                                            sm: '25px', // Font size for small screens
                                            md: '45px', // Font size for medium screens
                                            lg: '50px', // Font size for large screens
                                        },
                                        fontWeight: 300,
                                        textAlign: 'start',
                                    }}
                                >
                                    MORE THAN JUST PRODUCTS:
                                </Typography>
                                <Typography
                                    component="span"
                                    sx={{
                                        fontFamily: 'Raleway',
                                        fontSize: {
                                            xs: '20px', // Font size for extra small screens
                                            sm: '25px', // Font size for small screens
                                            md: '45px', // Font size for medium screens
                                            lg: '50px', // Font size for large screens
                                        },
                                        fontWeight: 300,
                                        color: 'white', // Set text color
                                        textAlign: 'start'
                                    }}
                                >
                                    CRAFTED WITH YOU IN MIND
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    component="span"
                                    sx={{
                                        fontFamily: 'Raleway',
                                        fontSize: {
                                            xs: '7px', // Font size for extra small screens
                                            sm: '10px', // Font size for small screens
                                            md: '15px', // Font size for medium screens
                                            lg: '20px', // Font size for large screens
                                        },
                                        fontWeight: 300,
                                        color: 'white', // Set text color
                                        textAlign: 'start'
                                    }}
                                >
                                    At Splendour in Stone, we believe there&apos;s no one-size-fits-all approach to stone design. Our extensive product range caters to a diverse set of needs, from the timeless elegance of marble to the contemporary appeal of granite.
                                    We understand that selecting the perfect stone for your project can be daunting. That&apos;s why we go beyond simply offering products.
                                    Our team delves into the specifics of your project – whether it&apos;s combating wear and tear in high-traffic areas, achieving a specific aesthetic, or enhancing the natural light in your space.
                                    We offer a comprehensive range of stone cladding, walling, and paving solutions, meticulously chosen for their durability, aesthetics, and suitability for various design challenges.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="w-1/2">
                        {/* Empty right half */}
                    </Box>
                </Box>
            </Box>

            <CustomDivider />

            <Box className="flex w-full justify-between">
                <Box className="flex w-1/2 flex-col justify-center">
                    <Typography
                        variant="h4"
                        color="white"
                        sx={{
                            fontFamily: 'Raleway',
                            fontSize: {
                                xs: '15px', // Font size for extra small screens
                                sm: '30px', // Font size for small screens
                                md: '35px', // Font size for medium screens
                                lg: '50px', // Font size for large screens
                            },
                            fontWeight: 300,
                            textAlign: 'start',
                        }}
                    >
                        BEYOND AESTHETICS:
                    </Typography>
                    <Typography
                        variant="h4"
                        color="white"
                        sx={{
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: '15px', // Font size for extra small screens
                                sm: '30px', // Font size for small screens
                                md: '35px', // Font size for medium screens
                                lg: '50px', // Font size for large screens
                            },
                            fontWeight: 300,
                            textAlign: 'start',
                        }}
                    >
                        STONE FOR A BETTER LIVING SPACE
                    </Typography>

                </Box>

                <Box className="flex flex-col w-1/4">
                    <Typography
                        variant="h4"
                        color="white"
                        sx={{
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: '10px', // Font size for extra small screens
                                sm: '15px', // Font size for small screens
                                md: '18px', // Font size for medium screens
                                lg: '20px', // Font size for large screens
                            },
                            fontWeight: 300,
                            textAlign: 'start',
                        }}
                    >
                        We understand that your home is more than just bricks and mortar. It&apos;s a sanctuary, a reflection of your style, and a place where comfort and functionality reign supreme. That&apos;s why we don&apos;t just offer stone products; we offer solutions.
                    </Typography>

                </Box>

            </Box>

            <FullCustomDivider />

            <Box className="flex w-full gap-8 ">
                <Box className="flex w-1/4">
                    <Image
                        src="/images/About/Agricultural/image1.png"
                        alt="Logo"
                        width={408}
                        height={413}
                    />
                </Box>
                <Box className="flex w-1/4">
                    <Image
                        src="/images/About/Agricultural/image2.png"
                        alt="Logo"
                        width={408}
                        height={413}
                    />
                </Box>
                <Box className="flex w-1/4">
                    <Image
                        src="/images/About/Agricultural/image3.png"
                        alt="Logo"
                        width={408}
                        height={413}
                    />
                </Box>
                <Box className="flex w-1/4">
                    <Image
                        src="/images/About/Agricultural/image4.png"
                        alt="Logo"
                        width={408}
                        height={413}
                    />
                </Box>
            </Box>

            <Box
                className="flex w-full"
                sx={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1.77 / 1', // Aspect ratio of 3:1 (width to height)
                    backgroundImage: 'url("/images/About/gallery.png")',
                    backgroundSize: 'cover', // Ensure the image covers the entire box
                    backgroundPosition: 'center', // Center the image
                    display: 'flex',
                    alignItems: 'center', // Center align text vertically
                    justifyContent: 'center', // Center align text horizontally
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
                        zIndex: 1, // Ensure it's on top of the background image but behind the content
                    },
                }}
            >
                <Box className="flex flex-col w-1/2 h-full p-10" sx={{ zIndex: 2 }}>
                    <Box className="flex w-full h-1/2"></Box>
                    <Box className="flex w-full flex-col h-1/2 justify-center gap-3">
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
                            A GALLERY OF SUCCESS: YOUR INSPIRATION AWAITS
                        </Typography>

                        <WhiteCustomButton label={'Enquire Now!'} iconSrc={'/images/vector.svg'} />
                    </Box>
                </Box>

                <Box className="flex flex-col w-1/2 h-full p-6" sx={{ zIndex: 2 }}>
                    <Box className="flex w-full h-1/2"></Box>
                    <Box className="flex w-full flex-col h-1/2 justify-center items-center">
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
                            We take immense pride in collaborating with our clients to turn their design dreams into reality. Explore our extensive gallery showcasing a variety of projects, from modern kitchen renovations to captivating outdoor living spaces. Let these success stories inspire your stone design journey.
                            To make your exploration more realistic, visit our showroom and view captivating displays of different natural stones.
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box className="flex w-full flex-col relative items-center justify-center text-white">
                <Box className="flex justify-center items-center w-full">
                    <Image
                        src="/images/About/beauty.png" // Ensure this image is in the public/images folder
                        alt="Background"
                        // layout="fill"
                        objectFit="cover"
                        className="opacity-30"
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
                            md: '60px', // Font size for medium screens
                            lg: '80px', // Font size for large screens
                        },
                        fontWeight: 300,
                    }}>
                        IF YOU FALL VICTIM TO THEIR BREATHTAKING BEAUTY
                    </Typography>
                    <Typography variant="h5" className="mb-8" sx={{
                        fontFamily: 'Raleway',
                        fontSize: {
                            xs: '12px', // Font size for extra small screens
                            sm: '14px', // Font size for small screens
                            md: '16px', // Font size for medium screens
                            lg: '20px', // Font size for large screens
                        },
                        fontWeight: 300,
                    }}>
                        as we do, we will be there to hold your hand as you make life-changing decisions about your living space.
                    </Typography>
                </Box>
            </Box>

            <CustomDivider />

            <Box className="flex w-full flex-col lg:flex-row justify-between">
                <Box className="flex flex-col lg:w-2/3">
                    <Typography variant="h1" className="mb-4 font-bold" sx={{
                        color: 'white',
                        fontFamily: 'Raleway',
                        fontSize: {
                            xs: '30px', // Font size for extra small screens
                            sm: '40px', // Font size for small screens
                            md: '60px', // Font size for medium screens
                            lg: '80px', // Font size for large screens
                        },
                        fontWeight: 300,
                    }}>
                        READY TO CRAFT YOUR <span style={{ color: '#F9C275' }}>STONE MASTERPIECE</span>?
                    </Typography>
                    <Box className="flex w-full justify-start gap-6">
                        <WhiteCustomButton label={'Enquire Now!'} iconSrc={'/images/vector.svg'} />
                        <WhiteCustomButton label={'Contact Us'} iconSrc={'/images/vector.svg'} />
                    </Box>
                </Box>

                <Box className="flex lg:w-1/4 p-4">
                    <Typography variant="h1" className="mb-8" sx={{
                        fontFamily: 'Raleway',
                        color: 'white',
                        fontSize: {
                            xs: '12px', // Font size for extra small screens
                            sm: '14px', // Font size for small screens
                            md: '16px', // Font size for medium screens
                            lg: '20px', // Font size for large screens
                        },
                        fontWeight: 300,
                    }}>
                        Our commitment to providing outstanding services, expert advice, and a range of natural stone for your needs is our top priority. Feel free to engage with our experts today and let us mould your ideas into reality.

                    </Typography>
                </Box>
            </Box>

            <Footer />
        </Box>
    );
};

// Static values or pass dynamic props for the About Page
export default AboutPage;
