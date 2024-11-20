"use client"

import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";

import Home from "./components/Home";

import Splendours_header_level from "./components/Splendours_header_level";
import SplenderoursProductsCarousel from "./components/SplenderoursProductsCarousel";
import CustomDivider from "./components/Divider";
import CustomWallCard from "./components/WallCard";
import Carousel from "./components/Carousel";
import CarouselPart from "./components/CarouselPart";
import CustomButton from "./components/Button";
import WhiteCustomButton from "./components/WhiteButton";
import DateCarousel from "./components/DateCarousel";
import CustomTextField from "./components/CustomTextField";
import CalendarControl from "./components/CalendarControl";
import TimeCarousel from "./components/TimeCarousel";
import ServiceCarousel from "./components/ServiceCarousel";
import ProductCarousel from "./components/ProductCarousel";
import PhaseCarousel from "./components/PhaseCarousel";

import MeasurementAccordion from "./components/MeasurementAccordion";

import Footer from "./components/Footer";
import TechnicalAccordion from "./components/Home/Accordion/TechnicalAccordion";
import ProductionAccordion from "./components/Home/Accordion/ProductionAccordion";
import InstallationAccordion from "./components/Home/Accordion/InstallationAccordion";


const PARTDATA = [
    { image: '/images/carousel_interactive/image1.png' },
    { image: '/images/carousel_interactive/card1.png' },
    { image: '/images/carousel_interactive/card2.png' },
]
const DATA = [
    { image: '/images/Interactive_slider/slide1.svg' },
    { image: '/images/Interactive_slider/slide2.svg' },
    { image: '/images/Interactive_slider/slide3.svg' },
]


const HomePage = () => {

    const inputRef = useRef<HTMLInputElement | null>(null); // Create a ref for the input element

    const [resources, setResources] = useState<{ date: string; day: string }[]>([]); // State for resources

    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // 1 - 12 for Jan - Dec
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Current year

    // Function to get month abbreviation
    const getMonthAbbreviation = (month: number): string => {
        const monthMap = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        return monthMap[month - 1]; // Adjust for zero-based index
    };

    // Function to generate month resources based on selected year and month
    const generateResources = (year: number, month: number) => {
        const daysInMonth = new Date(year, month, 0).getDate(); // Get number of days in the month
        const newResources: { date: string; day: string }[] = [];

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month - 1, day);
            const dayName = date.toLocaleString('default', { weekday: 'short' }).toUpperCase();
            newResources.push({ date: day.toString(), day: dayName });
        }

        // Update the resources state with the new array
        // setResources(newResources);
        return newResources;
    };

    // Function to handle the click on the CalendarControl
    const handleCalendarControlClick = () => {
        if (inputRef.current) {
            inputRef.current.showPicker(); // Trigger the click event on the inputi
        }
    };

    // Handle month input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value; // e.g., "2024-05"
        const [year, month] = value.split('-').map(Number); // Split into year and month
        setSelectedYear(year);
        setSelectedMonth(month);

        const newResources = generateResources(year, month);
        setResources(newResources); // Update the resources state

    };

    // Initialize with current month and year resources
    useEffect(() => {
        const initialResources = generateResources(selectedYear, selectedMonth);
        setResources(initialResources);
    }, [selectedYear, selectedMonth]); // Dependency array only includes selectedMonth and selectedYear


    return (
        <Box className="container mx-auto max-w-screen-2xl">
            <Home />
            <Box className="p-12 space-y-24">
                <Splendours_header_level />

                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <Box sx={{ width: "40%" }}>
                        <Typography
                            variant="h3"
                            color="white"
                            sx={{
                                fontWeight: 200,
                                fontSize: {
                                    xs: "40px",
                                    sm: "50px",
                                    md: "65px",
                                    lg: "80px"
                                }
                            }}
                        >
                            SPLENDOURS PRODUCTS
                        </Typography>
                    </Box>
                    <Box>
                        <WhiteCustomButton label={'View all'} iconSrc={'/images/vector.svg'} />
                    </Box>
                </Box>

                <SplenderoursProductsCarousel />

                {/* <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <CustomCard product_image_src="images/cards/card1.png" product_name="PARK ON PARK" product_subname="JAMIESON" product_content="Available in our freeform style, the Charlotte sandstone is made up of beautiful soft hues such as cream, yellow and pink." />
                    <CustomCard product_image_src="images/cards/card2.png" product_name="SPLENDOURS PROJECTS" product_subname="CHARLOTTE" product_content="Available in our freeform style, the Charlotte sandstone is made up of beautiful soft hues such as cream, yellow and pink." />
                    <CustomCard product_image_src="images/cards/card3.png" product_name="SPLENDOURS PROJECTS" product_subname="SILVER TRAVERTINE" product_content="Available in our freeform style, the Charlotte sandstone is made up of beautiful soft hues such as cream, yellow and pink." />
                    <CustomCard product_image_src="images/cards/card4.png" product_name="STELLA MARIS" product_subname="ATLANTIC MARBLE" product_content="Available in our freeform style, the Charlotte sandstone is made up of beautiful soft hues such as cream, yellow and pink." />
                </Box> */}

                <CustomDivider />

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="body1" color="white" sx={{ fontFamily: "Montserrat", fontSize: { xs: '20px', sm: '30px', md: '45px', lg: '60px' }, fontWeight: "600", opacity: '10%' }}>SAME DAY QUOTES</Typography>
                    <Typography variant="body1" color="#DBC6BC" sx={{ fontFamily: "Montserrat", fontSize: { xs: '20px', sm: '30px', md: '45px', lg: '60px' }, fontWeight: "600", textAlign: 'center' }}>STATE OF THE ART SHOWROOM</Typography>
                    <Typography variant="body1" color="white" sx={{ fontFamily: "Montserrat", fontSize: { xs: '20px', sm: '30px', md: '45px', lg: '60px' }, fontWeight: "600", opacity: '10%', textAlign: "right" }}>SUPPLY & INSTALL PACKAGES</Typography>
                </Box>

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
                                    xs: "25px",
                                    sm: "45px",  // Small screens
                                    md: "55px",  // Medium screens
                                    lg: "70px"
                                }
                            }}
                        >
                            WALING RANGE
                        </Typography>
                    </Box>
                    <Box className="flex flex-col w-1/4 gap-3">
                        <Box>
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

                                We believe that in a new age world filled with gadgets, noise and pace that a moment to stop, reflect and connect with something pure
                            </Typography>
                        </Box>
                        <Box>
                            <WhiteCustomButton label={'View all'} iconSrc={'images/vector.svg'} />
                        </Box>

                    </Box>
                </Box>


                <CustomDivider />

                <Box className="flex w-full flex-col gap-3">
                    <Box className="flex w-full justify-between gap-3">
                        <CustomWallCard product_image_src="images/Home/WallingRange/product1.png" product_subname="CHARLOTTE" />
                        <CustomWallCard product_image_src="images/Home/WallingRange/product2.png" product_subname="JAMIESON" />
                        <CustomWallCard product_image_src="images/Home/WallingRange/product3.png" product_subname="BUFFALO" />
                    </Box>
                    <Box className="flex w-full justify-between gap-3">
                        <CustomWallCard product_image_src="images/Home/WallingRange/product4.png" product_subname="BELOKA" />
                        <CustomWallCard product_image_src="images/Home/WallingRange/product5.png" product_subname="SHOREHAM" />
                        <CustomWallCard product_image_src="images/Home/WallingRange/product6.png" product_subname="BEACHPORT" />
                    </Box>
                </Box>

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
                                    xs: "25px",
                                    sm: "45px",  // Small screens
                                    md: "55px",  // Medium screens
                                    lg: "70px"
                                }
                            }}
                        >
                            3D INTERACTIVE VIEWER
                        </Typography>
                    </Box>
                    <Box className="flex flex-col w-1/4 justify-start gap-3 ">
                        <Box>
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
                                We believe that in a new age world filled with gadgets, noise and pace that a moment to stop, reflect and connect with something pure
                            </Typography>
                        </Box>
                        <Box>
                            <WhiteCustomButton label={'View all'} iconSrc={'images/vector.svg'} />
                        </Box>

                    </Box>
                </Box>

                <Box className="w-full flex flex-col aspect-[3.77/1] bg-white rounded-lg p-8" style={{ marginTop: '270px' }}>
                    <Box className="flex w-1/4 justify-between">
                        <CarouselPart data={PARTDATA} />
                        <Box className='flex flex-col w-2/3 h-[127px] justify-around'>
                            <Typography
                                variant="h3"
                                color="#17181C"
                                sx={{
                                    fontWeight: 700,
                                    alignContent: 'flex-start',
                                    fontFamily: 'Montserrat',
                                    fontSize: {
                                        xs: "10px",
                                        sm: "15px",  // Small screens
                                        md: "25px",  // Medium screens
                                        lg: "30px"
                                    }
                                }}
                            >
                                CHARLOTTE
                            </Typography>
                            <Typography
                                variant="h3"
                                color="#17181C"
                                sx={{
                                    width: '80%',
                                    fontWeight: 300,
                                    alignContent: 'flex-start',
                                    fontFamily: 'Montserrat',
                                    fontSize: {
                                        xs: "8px",
                                        sm: "10px",  // Small screens
                                        md: "12px",  // Medium screens
                                        lg: "15px"
                                    }
                                }}
                            >
                                Available in our freeform style, the Charlotte sandstone is made up of beautiful soft hues such as cream, yellow and pink.
                            </Typography>
                        </Box>

                    </Box>
                    <Box className="flex w-full justify-center">
                        <Carousel data={DATA} />
                    </Box>
                    <Box className="flex w-full justify-between">
                        <Box>
                            <Typography>Category: <span style={{ color: "#DBC6BC" }} > Stairs</span></Typography>
                            <Typography>Tag: <span style={{ color: "#DBC6BC" }}> Exclusive</span></Typography>
                        </Box>
                        <Box>
                            <CustomButton label={'Enquire Now!'} iconSrc={'/images/Vector/vector.svg'} borderColor={'#17181C'} />
                        </Box>
                    </Box>
                </Box>

                <CustomDivider />

                <Box className="flex w-full justify-between">
                    <Box className="flex flex-col w-1/4 gap-3 justify-center ">
                        <Box>
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
                                We believe that in a new age world filled with gadgets, noise and pace that a moment to stop, reflect and connect with something pure
                            </Typography>
                        </Box>
                        <Box>
                            <WhiteCustomButton label={'View all'} iconSrc={'images/vector.svg'} />
                        </Box>

                    </Box>

                    <Box className="flex w-1/2 justify-end items-start">
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
                                    md: "55px",  // Medium screens
                                    lg: "70px"
                                }
                            }}
                        >
                            PAVING RANGE
                        </Typography>
                    </Box>
                </Box>

                <Box className="flex w-full flex-col gap-3">
                    <Box className="flex w-full justify-between gap-3">
                        <CustomWallCard product_image_src="images/Home/PavingRange/product1.png" product_subname="PORPHYRY" />
                        <CustomWallCard product_image_src="images/Home/PavingRange/product2.png" product_subname="QUARTZITE" />
                        <CustomWallCard product_image_src="images/Home/PavingRange/product3.png" product_subname="MARBLE" />
                    </Box>
                    <Box className="flex w-full justify-between gap-3">
                        <CustomWallCard product_image_src="images/Home/PavingRange/product4.png" product_subname="LIMESTONE" />
                        <CustomWallCard product_image_src="images/Home/PavingRange/product5.png" product_subname="GRANTE" />
                        <CustomWallCard product_image_src="images/Home/PavingRange/product6.png" product_subname="BLUESTONE" />
                    </Box>
                </Box>

                <CustomDivider />

                <Box className="flex flex-col w-full">
                    <Box className="w-1/3">
                        <Typography
                            variant="h3"
                            color="white"
                            sx={{
                                fontWeight: 300,
                                alignContent: 'flex-start',
                                fontFamily: 'Raleway',
                                fontSize: {
                                    xs: "30px",
                                    sm: "50px",  // Small screens
                                    md: "65px",  // Medium screens
                                    lg: "90px"
                                }
                            }}
                        >
                            SERVICES
                        </Typography>
                    </Box>
                    <Box className="flex w-full">
                        <Box className="w-full sm:w-full md:w-full lg:w-4/5">
                            <Typography
                                variant="h3"
                                color="white"
                                sx={{
                                    fontWeight: 300,
                                    alignContent: 'flex-start',
                                    fontFamily: 'Montserrat',
                                    fontSize: {
                                        xs: "8px",
                                        sm: "10px",  // Small screens
                                        md: "12px",  // Medium screens
                                        lg: "15px"
                                    }
                                }}
                            >
                                We offer a wide range of services that focus on the use of stone materials. Our clients can expect top-notch service that includes design, manufacturing, delivery and assembly. Our team of experts use state-of-the-art technology and equipment to ensure that every project is built to the highest quality standards. The client's experience is at the heart of our motivation. We provide support throughout the entire project. Our products are unique and adapted to the specifics of each client, and our clients can choose from a wide range of materials and colors. Also, our clients can rely on our support and advice throughout the process to ensure that their projects are successfully implemented. Our goal is to create products that will not only meet, but also exceed the expectations of our customers.
                            </Typography>
                        </Box>
                        <Box className="w-0 lg:w-1/5">

                        </Box>

                    </Box>
                </Box>

                <MeasurementAccordion />

                <TechnicalAccordion />

                <ProductionAccordion />

                <InstallationAccordion />

                {/* <Box>
                    <Box className="flex w-full justify-between">
                        <Box sx={{ width: { xs: '50%', sm: '80%', md: '80%', lg: '80%' }, alignContent: 'flex-start' }}>
                            <Typography
                                variant="h3"
                                color="#dbc6bc"
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
                                01
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
                                MEASUREMENT
                            </Typography>
                        </Box>
                        <Box>
                            <Image
                                src="/images/icons/Plus.svg"
                                alt="Plus"
                                width={30}
                                height={30}
                            />
                        </Box>
                    </Box>
                    <FullCustomDivider />
                    <Box className="flex w-full justify-between">
                        <Box className="flex flex-col w-1/3 justify-around">
                            <Typography
                                variant="h3"
                                color="white"
                                sx={{
                                    fontWeight: 300,
                                    alignContent: 'flex-start',
                                    fontFamily: 'Montserrat',
                                    fontSize: {
                                        xs: "8px",
                                        sm: "10px",  // Small screens
                                        md: "12px",  // Medium screens
                                        lg: "15px"
                                    }
                                }}
                            >
                                Define your target mEvery project begins with well-taken measures. We will visit the construction site in order to take the exact dimensions needed to create the technical drawings.arket and approach for the market
                            </Typography>
                            <WhiteCustomButton label={'Learn More'} iconSrc={'/images/vector.svg'} />
                        </Box>
                        <Box className="flex w-1/2">
                            <img
                                src="/images/background.png"
                                alt="Plus"
                                className="flex w-full"
                            />
                        </Box>
                    </Box>
                    <FullCustomDivider />
                </Box> */}

                {/* <Box>
                    <Box className="flex w-full justify-between">
                        <Box sx={{ width: { xs: '50%', sm: '80%', md: '80%', lg: '80%' }, alignContent: 'flex-start' }}>
                            <Typography
                                variant="h3"
                                color="#dbc6bc"
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
                                02
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
                                TECHNICAL DRAWINGS
                            </Typography>
                        </Box>
                        <Box>
                            <Image
                                src="/images/icons/Plus.svg"
                                alt="Plus"
                                width={30}
                                height={30}
                            />
                        </Box>
                    </Box>
                    <FullCustomDivider />

                </Box>

                <Box>
                    <Box className="flex w-full justify-between">
                        <Box sx={{ width: { xs: '50%', sm: '80%', md: '80%', lg: '80%' }, alignContent: 'flex-start' }}>
                            <Typography
                                variant="h3"
                                color="#dbc6bc"
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
                                03
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
                                PRODUCTION
                            </Typography>
                        </Box>
                        <Box>
                            <Image
                                src="/images/icons/Plus.svg"
                                alt="Plus"
                                width={30}
                                height={30}
                            />
                        </Box>
                    </Box>
                    <FullCustomDivider />

                </Box>

                <Box>
                    <Box className="flex w-full justify-between">
                        <Box sx={{ width: { xs: '50%', sm: '80%', md: '80%', lg: '80%' }, alignContent: 'flex-start' }}>
                            <Typography
                                variant="h3"
                                color="#dbc6bc"
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
                                04
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
                                INSTALLATION
                            </Typography>
                        </Box>
                        <Box>
                            <Image
                                src="/images/icons/Plus.svg"
                                alt="Plus"
                                width={30}
                                height={30}
                            />
                        </Box>
                    </Box>
                    <FullCustomDivider />
                </Box> */}

                <CustomDivider />

                <Box className="flex w-full justify-between">
                    <Box className="flex w-1/2 flex-col justify-around">
                        <Typography
                            variant="h3"
                            color="white"
                            sx={{
                                fontWeight: 300,
                                alignContent: 'flex-start',
                                fontFamily: 'Raleway',
                                fontSize: {
                                    xs: "30px",
                                    sm: "50px",  // Small screens
                                    md: "65px",  // Medium screens
                                    lg: "90px"
                                }
                            }}
                        >
                            BOOKING
                        </Typography>

                        <CalendarControl onClick={handleCalendarControlClick} month={getMonthAbbreviation(selectedMonth)} year={selectedYear} />
                        <input
                            ref={inputRef} // Attach the ref to the input
                            type="month" // Specify the type
                            id="id"
                            name="name"
                            placeholder="placeholder"
                            className="bg-inherit text-inherit opacity-0"
                            onChange={handleChange} //Handle date change
                        />

                    </Box>
                    <Box className="flex flex-col w-1/2 justify-around">
                        <Box className="flex w-full justify-end">
                            <WhiteCustomButton label={'Book'} iconSrc="/images/vector.svg" />
                        </Box>
                        <Box className="flex w-full justify-between">
                            <WhiteCustomButton label={'Video Call'} iconSrc="/images/icons/VideoCall.svg" />
                            <WhiteCustomButton label={'Call'} iconSrc="/images/icons/Call.svg" />
                            <WhiteCustomButton label={'Email'} iconSrc="/images/icons/Email.svg" />
                        </Box>
                    </Box>
                </Box>

                {/* <TrendingSlider /> */}
                <Box className="flex flex-col w-full space-y-2">
                    <DateCarousel initialResources={resources} />

                    <TimeCarousel />

                    <ServiceCarousel />

                    <ProductCarousel />

                    <PhaseCarousel />
                </Box>
                <CustomDivider />
                <Box className="flex w-full justify-between items-end">
                    <Box className="flex flex-col w-1/4 justify-end">
                        <Typography
                            variant="h3"
                            color="white"
                            sx={{
                                fontWeight: 400,
                                alignContent: 'flex-start',
                                fontFamily: 'Raleway',
                                fontSize: {
                                    xs: "10px",
                                    sm: "15px",  // Small screens
                                    md: "18px",  // Medium screens
                                    lg: "23px"
                                }
                            }}
                        >
                            NEWSLETTER
                        </Typography>
                        <Typography
                            variant="h3"
                            color="white"
                            sx={{
                                fontWeight: 600,
                                alignContent: 'flex-start',
                                justifyContent: 'flex-end',
                                fontFamily: 'Montserrat',
                                fontSize: {
                                    xs: "20px",
                                    sm: "30px",  // Small screens
                                    md: "50px",  // Medium screens
                                    lg: "80px"
                                }
                            }}
                        >
                            STAY TUNED
                        </Typography>
                    </Box>
                    <Box className="w-1/2">
                        <CustomTextField />
                    </Box>
                    <Box className="flex w-1/4 justify-end">
                        <WhiteCustomButton label={'Send'} iconSrc={'/images/vector.svg'} />
                    </Box>
                </Box>
                <CustomDivider />
                <Footer />
            </Box>

        </Box>



    );
}


export default HomePage;