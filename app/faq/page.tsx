
"use client"
// app/about/page.tsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import StoneTypesFaqAccordion from "../components/Faqs/StoneTypesFaqAccordion";
import ConsultationFaqAccordion from '../components/Faqs/ConsultationFaqAccordion';
import CostFaqAccordion from '../components/Faqs/CostFaqAccordion';
import ServiceFaqAccordion from '../components/Faqs/ServiceFaqAccordion';
import StoneCareFaqAccordion from '../components/Faqs/StoneCareFaqAccordion';
import StoneBenefitsFaqAccordion from '../components/Faqs/StoneBenefitsFaqAccordion';
import ShowRoomFaqAccordion from '../components/Faqs/ShowRoomFaqAccordion';

import CustomDivider from '../components/Divider';
import FullCustomDivider from '../components/FullDivider';


const FaqPage = () => {
    return (
        <Box className="container mx-auto space-y-12">

            <Header />

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
                                xs: "25px",
                                sm: "45px",  // Small screens
                                md: "65px",  // Medium screens
                                lg: "80px"
                            }
                        }}
                    >
                        AT SPLENDOUR IN STONE,
                    </Typography>
                </Box>
                <Box className="flex w-1/4 items-center">
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
                        we appreciate our clients’ need for the correct information to make informed decisions about your stone design project. Here are some answers to frequent questions asked:
                    </Typography>
                </Box>
            </Box>

            <StoneTypesFaqAccordion />

            <ConsultationFaqAccordion />

            <CostFaqAccordion />

            <ServiceFaqAccordion />

            <StoneCareFaqAccordion />

            <StoneBenefitsFaqAccordion />

            <ShowRoomFaqAccordion />

            <CustomDivider />

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
                        I HAVE A QUESTION NOT ANSWERED HERE. HOW CAN I REACH YOU?
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
                        No problem! Our team is always ready to assist you. Contact us by phone at (03) 9873 4941, email us at info@splendourinstone.com, or visit our Contact Us page for details. We're happy to answer any questions you may have.
                    </Typography>
                </Box>
            </Box>

            <FullCustomDivider />

            <Box className="flex justify-between w-full gap-6">
                <Box className="flex w-1/3">
                    <Image
                        src="/images/Faqs/image1.png"
                        alt="Image1"
                        width={552}
                        height={480}
                    />
                </Box>
                <Box className="flex w-2/3">
                    <Image
                        src="/images/Faqs/image2.png"
                        alt="image2"
                        width={1136}
                        height={480}
                    />
                </Box>
            </Box>

            <Footer />
        </Box>
    );
};

export default FaqPage;
