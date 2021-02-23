import React from 'react';
import {Grid,
        makeStyles,
        Box,
        Typography
} from '@material-ui/core/';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        left: 0,
        bottom: 0,
        width: '100%',
        height: '5vh',
        background: '#000826b0',
    },
    link: {
        color: 'grey',
    }
})

function Footer() {
    const classes = useStyles();

    return(
        <Box className={classes.root} >
             <Grid container justify='space-evenly' alignItems='center' style={{ height:'100%'}}>

                 <Grid item>
                    <Typography color='textSecondary'>
                       NASA | ORBIT | 2021 | All rights reserved ®
                    </Typography>
                 </Grid>

                 <Grid item>
                    <Typography color='textSecondary'>
                        Websites created by <a  className={classes.link} 
                                                target='_blank' 
                                                href='https://www.linkedin.com/in/luk%C3%A1%C5%A1-klime%C5%A1-385b07204/'
                                            >
                                                Lukáš Klimeš
                                            </a>
                    </Typography>
                 </Grid>

             </Grid>
        </Box>
    )
}

export default Footer;