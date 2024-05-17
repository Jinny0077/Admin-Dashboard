import { useTheme } from "@emotion/react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequesntly Asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcond={<ExpandMoreOutlinedIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            nesciunt a voluptas repellat fugit assumenda neque enim ipsam eaque
            dignissimos, facilis id quidem blanditiis! Doloribus molestiae esse
            ipsum obcaecati numquam.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcond={<ExpandMoreOutlinedIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            nesciunt a voluptas repellat fugit assumenda neque enim ipsam eaque
            dignissimos, facilis id quidem blanditiis! Doloribus molestiae esse
            ipsum obcaecati numquam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcond={<ExpandMoreOutlinedIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Favourite question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            nesciunt a voluptas repellat fugit assumenda neque enim ipsam eaque
            dignissimos, facilis id quidem blanditiis! Doloribus molestiae esse
            ipsum obcaecati numquam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcond={<ExpandMoreOutlinedIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Random question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            nesciunt a voluptas repellat fugit assumenda neque enim ipsam eaque
            dignissimos, facilis id quidem blanditiis! Doloribus molestiae esse
            ipsum obcaecati numquam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcond={<ExpandMoreOutlinedIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Final question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            nesciunt a voluptas repellat fugit assumenda neque enim ipsam eaque
            dignissimos, facilis id quidem blanditiis! Doloribus molestiae esse
            ipsum obcaecati numquam.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
