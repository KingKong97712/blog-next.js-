// components/CustomDivider.tsx
"use client"; // This line makes this file a client component in Next.js

import CustomDivider from "./Divider";
import { Typography } from "@mui/material";


const Splendours_header_level = () => {
    return (
        <div>
            <CustomDivider />
            <div className="flex justify-center">
                <Typography variant="h5" color="#DBC6BC" sx={{ fontFamily: "Constantia", fontSize: "20px", fontWeight: "700px", margin: "auto" }}>SUPPLIERS OF STONE AUSTRALIA WIDE & INTERNATIONAL</Typography>
            </div>
            <CustomDivider />
        </div>
    );
};

export default Splendours_header_level;
