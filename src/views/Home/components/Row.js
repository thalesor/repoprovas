import React, { useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `0`,
    '&:hover': {
      backgroundColor: '#FAFAFA'
    },
    '&:before': {
      display: 'none',
    },
    '.css-ta84vm-MuiAccordionDetails-root': {
      padding: 0
    }
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      'rgba(255, 255, 255, .05)',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

  const Row = (props) => {
   
    const { identifier, title } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = () => (event, newExpanded) => {
    setExpanded(newExpanded ? true : false);
  };

    return (
        <Accordion expanded={expanded} onChange={handleChange()}>
                    <AccordionSummary aria-controls={`panel${identifier}d-content`} id={`panel${identifier}d-header`}>
                    <Typography>{title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {props.children}
                    </AccordionDetails>
                </Accordion>
    )

}

export default Row;