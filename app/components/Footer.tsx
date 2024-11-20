// components/Footer.tsx
"use client"; // This line makes this file a client component in Next.js

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import FullCustomDivider from "./FullDivider";

const Footer = () => {
    return (
        <Box className="flex flex-col w-full">

            <FullCustomDivider />

            <Box className="flex w-full justify-between py-7">
                <Box className="flex w-1/4">
                    <Box>
                        <Image
                            src="/images/main-logo.svg"
                            alt="Logo"
                            width={468}
                            height={174}
                        />
                    </Box>
                </Box>
                <Box className="flex flex-col w-1/4 justify-center gap-3">
                    <Box className="flex w-1/2">
                        <Typography
                            variant="h3"
                            color="white"
                            sx={{
                                fontWeight: 400,
                                alignContent: 'flex-start',
                                fontFamily: 'Montserrat',
                                fontSize: {
                                    xs: "12px",
                                    sm: "25px",  // Small screens
                                    md: "30px",  // Medium screens
                                    lg: "30px"
                                }
                            }}
                        >
                            LINKS
                        </Typography>
                    </Box>
                    <Box className="flex w-full">
                        <Box className="flex w-1/2">
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'white' }}>
                                <li>
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        sx={{
                                            fontFamily: 'Montserrat',
                                            fontSize: {
                                                xs: '8px',
                                                sm: '10px',
                                                md: '12px',
                                                lg: '15px',
                                            },
                                            fontWeight: 300,
                                            textAlign: 'start',
                                        }}
                                    >HOME</Typography>
                                </li>
                                <li>
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        sx={{
                                            fontFamily: 'Montserrat',
                                            fontSize: {
                                                xs: '8px',
                                                sm: '10px',
                                                md: '12px',
                                                lg: '15px',
                                            },
                                            fontWeight: 300,
                                            textAlign: 'start',
                                        }}
                                    >
                                        WALLING
                                    </Typography>
                                </li>
                            </ul>
                        </Box>
                        <Box className="flex w-1/2">

                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'white' }}>
                                <li>
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        sx={{
                                            fontFamily: 'Montserrat',
                                            fontSize: {
                                                xs: '8px',
                                                sm: '10px',
                                                md: '12px',
                                                lg: '15px',
                                            },
                                            fontWeight: 300,
                                            textAlign: 'start',
                                        }}
                                    >
                                        PAVING
                                    </Typography>
                                </li>
                                <li>
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        sx={{
                                            fontFamily: 'Montserrat',
                                            fontSize: {
                                                xs: '8px',
                                                sm: '10px',
                                                md: '12px',
                                                lg: '15px',
                                            },
                                            fontWeight: 300,
                                            textAlign: 'start',
                                        }}
                                    >
                                        BLOG
                                    </Typography>
                                </li>
                            </ul>
                        </Box>
                    </Box>


                </Box>
                <Box className="flex flex-col w-1/4 justify-center gap-3">
                    <Box className="flex w-1/2">
                        <Typography
                            variant="h3"
                            color="white"
                            sx={{
                                fontWeight: 400,
                                alignContent: 'flex-start',
                                fontFamily: 'Montserrat',
                                fontSize: {
                                    xs: "12px",
                                    sm: "25px",  // Small screens
                                    md: "30px",  // Medium screens
                                    lg: "30px"
                                }
                            }}
                        >
                            LINKS
                        </Typography>
                    </Box>
                    <Box className="flex w-full">
                        <Box className="flex w-1/2">

                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'white' }}>
                                <li>
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        sx={{
                                            fontFamily: 'Montserrat',
                                            fontSize: {
                                                xs: '8px',
                                                sm: '10px',
                                                md: '12px',
                                                lg: '15px',
                                            },
                                            fontWeight: 300,
                                            textAlign: 'start',
                                        }}
                                    >HOME</Typography>
                                </li>
                                <li>
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        sx={{
                                            fontFamily: 'Montserrat',
                                            fontSize: {
                                                xs: '8px',
                                                sm: '10px',
                                                md: '12px',
                                                lg: '15px',
                                            },
                                            fontWeight: 300,
                                            textAlign: 'start',
                                        }}
                                    >
                                        WALLING
                                    </Typography>
                                </li>
                            </ul>
                        </Box>
                        <Box className="flex w-1/2">

                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'white' }}>
                                <li>
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        sx={{
                                            fontFamily: 'Montserrat',
                                            fontSize: {
                                                xs: '8px',
                                                sm: '10px',
                                                md: '12px',
                                                lg: '15px',
                                            },
                                            fontWeight: 300,
                                            textAlign: 'start',
                                        }}
                                    >
                                        PAVING
                                    </Typography>
                                </li>
                                <li>
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        sx={{
                                            fontFamily: 'Montserrat',
                                            fontSize: {
                                                xs: '8px',
                                                sm: '10px',
                                                md: '12px',
                                                lg: '15px',
                                            },
                                            fontWeight: 300,
                                            textAlign: 'start',
                                        }}
                                    >
                                        BLOG
                                    </Typography>
                                </li>
                            </ul>
                        </Box>
                    </Box>
                </Box>
            </Box>


            <FullCustomDivider />

            <Box className="flex w-full justify-between py-3">
                <Box className="flex w-1/5 justify-between">
                    <Box className="flex w-1/5">
                        <Image
                            src="/images/FooterIcon/facebook.svg"
                            alt="Plus"
                            width={40}
                            height={40}
                        />
                    </Box>
                    <Box className="flex w-1/5">
                        <Image
                            src="/images/FooterIcon/twitter.svg"
                            alt="Plus"
                            width={40}
                            height={40}
                        />
                    </Box>
                    <Box className="flex w-1/5">
                        <Image
                            src="/images/FooterIcon/linkedin.svg"
                            alt="Plus"
                            width={40}
                            height={40}
                        />
                    </Box>
                    <Box className="flex w-1/5">
                        <Image
                            src="/images/FooterIcon/youtube.svg"
                            alt="Plus"
                            width={40}
                            height={40}
                        />
                    </Box>
                    <Box className="flex w-1/5">
                        <Image
                            src="/images/FooterIcon/instagram.svg"
                            alt="Plus"
                            width={40}
                            height={40}
                        />
                    </Box>
                </Box>
                <Box className="flex">
                    <Typography
                        variant="h3"
                        color="#DBC6BC"
                        sx={{
                            fontWeight: 600,
                            alignContent: 'flex-start',
                            justifyContent: 'flex-end',
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: "8px",
                                sm: "14px",  // Small screens
                                md: "18px",  // Medium screens
                                lg: "20px"
                            }
                        }}
                    >
                        SPLENDOUR IN STONE 2024 © <span className="font-light">ALL RIGHTS RESERVED</span>
                    </Typography>
                </Box>
            </Box>

        </Box>
    );
};

export default Footer;
