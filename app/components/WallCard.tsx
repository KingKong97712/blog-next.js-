import * as React from 'react';

import { Box, Card, CardContent, Typography } from '@mui/material';

interface CustomWallCardProps {
    product_image_src: string,
    product_subname: string
}

const CustomWallCard: React.FC<CustomWallCardProps> = ({ product_image_src, product_subname }) => {
    return (
        <Card className='w-full rounded-lg aspect-[1.23/1]' style={{ backgroundImage: `url(${product_image_src})`, }}>
            <CardContent sx={{ display: 'flex', alignContent: 'space-between', flexWrap: 'wrap', height: '100%', paddingY: '10%' }}>
                <Box sx={{ width: '100%', height: '100%', padding: '3%', alignContent: 'flex-end' }}>
                    {/* <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white', fontSize: '40px', fontFamily: 'Montserrat', fontWeight: '500px' }}>
                        {product_subname}
                    </Typography> */}
                    <Typography
                        variant="h3"
                        color="white"
                        sx={{
                            fontWeight: 500,
                            alignContent: 'flex-start',
                            fontFamily: 'Montserrat',
                            fontSize: {
                                xs: "15px",
                                sm: "20px",  // Small screens
                                md: "30px",  // Medium screens
                                lg: "40px"
                            }
                        }}
                    >
                        {product_subname}
                    </Typography>
                </Box>

            </CardContent>
        </Card>
    );
}

export default CustomWallCard;
