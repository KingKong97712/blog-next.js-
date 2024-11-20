// Import necessary dependencies
import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <Box className="w-full  h-8 sm:h-12 md:h-16 lg:h-24 flex justify-between items-center">
            <Box className="flex w-1/2 justify-center">
                <Box className="w-1/12">

                </Box>
                <Box className="w-4/12">
                    <Image
                        src="/images/main-logo.svg"
                        alt="Logo"
                        width={333}
                        height={105}
                    />
                </Box>
                <Box className="w-7/12">

                </Box>

            </Box>
            <Box className="flex w-1/2 justify-between">
                <Box className="flex justify-between w-11/12">
                    <Box className="w-1/7">
                        <Link href="/">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
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
                                Home
                            </Typography>
                        </Link>
                    </Box>
                    <Box className="w-1/7">
                        <Link href="/services">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
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
                                Walling
                            </Typography>
                        </Link>
                    </Box>
                    <Box className="w-1/7">
                        <Link href="/about">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
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
                                Paving
                            </Typography>
                        </Link>
                    </Box>
                    <Box className="w-1/7">
                        <Link href="/portfolio">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
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
                                Projects
                            </Typography>
                        </Link>
                    </Box>
                    <Box className="w-1/7">
                        <Link href="/contact">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
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
                                Contact US
                            </Typography>
                        </Link>
                    </Box>
                    <Box className="w-1/7">
                        <Link href="/faq">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
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
                                Consultations
                            </Typography>
                        </Link>
                    </Box>
                    <Box className="w-1/7">
                        <Image
                            src="/images/Home/search.png"
                            alt="Logo"
                            width={18}
                            height={18}
                        />
                    </Box>
                </Box>
                <Box className="w-1/126">

                </Box>

            </Box>
        </Box>
    );
};

export default Header;
