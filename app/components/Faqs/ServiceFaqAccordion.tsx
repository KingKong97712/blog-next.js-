"use client"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Box, Typography } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import Image from 'next/image';
import FullCustomFaqDivider from '../FullCustomFaqDivider';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
    '&:not(:last-child)': {
        borderBottom: 'none',
    },
    '&::before': {
        display: 'none',
    },
    padding: 0, // Set padding to 0 for Accordion
}));

const AccordionSummary = styled(MuiAccordionSummary)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Added justify-content: space-between
    padding: 0, // Remove padding
    '& .MuiAccordionSummary-expandIconWrapper': {
        position: 'relative',
        right: 0,
    },
    '& .MuiAccordionSummary-content': {
        margin: 0, // Remove margin
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
    backgroundColor: '#17181c',
    color: 'white',
    padding: 0, // Remove padding
}));

export default function ServiceFaqAccordion() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div style={{ padding: 0 }}> {/* Root component padding and margin set to 0 */}
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    style={{
                        borderBottom: '2px solid #F9C275',
                        backgroundColor: '#17181c',
                        color: 'white',
                    }}
                    expandIcon={
                        expanded === 'panel1' ? (
                            <IndeterminateCheckBoxIcon sx={{ fontSize: '30px', color: '#F9C275' }} />
                        ) : (
                            <AddBoxIcon sx={{ fontSize: '30px', color: '#F9C275' }} />
                        )
                    }
                >
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography
                            variant="h3"
                            color="white"
                            sx={{
                                fontWeight: 300,
                                fontFamily: 'Raleway',
                                fontSize: { xs: '15px', sm: '20px', md: '25px', lg: '30px' },
                            }}
                        >
                            DO YOU OFFER INSTALLATION SERVICES?
                        </Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Box className="flex w-full justify-between p-5">
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
                                We offer a curated selection of high-quality natural stone cladding, walling, and paving options, including granite, limestone, travertine, sandstone, and bluestone. Explore our website or visit our showroom to discover the full range.
                            </Typography>
                        </Box>
                        <Box className="flex w-1/2 justify-between">
                            <Image
                                src="/images/Faqs/StoneFaqProducts/product1.png"
                                alt="Stone1"
                                width={150}
                                height={150}
                            />
                            <Image
                                src="/images/Faqs/StoneFaqProducts/product2.png"
                                alt="Stone2"
                                width={150}
                                height={150}
                            />
                            <Image
                                src="/images/Faqs/StoneFaqProducts/product3.png"
                                alt="Stone3"
                                width={150}
                                height={150}
                            />
                            <Image
                                src="/images/Faqs/StoneFaqProducts/product4.png"
                                alt="Stone4"
                                width={150}
                                height={150}
                            />
                        </Box>
                    </Box>
                    <FullCustomFaqDivider />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
