import React from 'react';
import { Grid,
         makeStyles,
         Card,
         CardMedia,
         Typography,        
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SpaceOrbitImg from '../Images/SpaceOrbit.jpeg';

const useStyles = makeStyles((theme)=>({
    headerImg: {
        width: '100vw',
        height: '100vh',
    },
    headerFilter: {
        width: '100%',
        height: '100%',
        backgroundColor: '#110818a3',
    },
    headerTypo: {
        letterSpacing: '12vw',
        textIndent: '8vw',
        color: 'white',
        fontSize: '90px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '60px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '35px',
        },
    },
    subTypo: {
        color: 'white',
        letterSpacing: '2vw',
        textAlign: 'center',
    },
    expandIcon: {
        color: '#ffffffad',
        position: 'absolute',
        bottom: 0,
        animation: `$expandIcon 5s infinite`,
    },
    "@keyframes expandIcon": {
        "0%": {
            bottom: '0px',
        },
        "25%": {
            bottom: '10px',
        },
        "50%": {
            bottom: '0px',
        },
        "75%": {
            bottom: '0px',
        },
        "100%": {
            bottom: '0px',
        }
      },
}))

function Header() {
    const classes = useStyles();

    return(
        <Card square >
            <CardMedia className={classes.headerImg} image={SpaceOrbitImg}>
                <Grid className={classes.headerFilter} container direction='column' justify='center' alignItems='center' >
                    <Typography variant='h1' className={classes.headerTypo}>ORBIT</Typography>
                    <Typography variant='caption' className={classes.subTypo} >INTERNATIONAL REGISTER OF ASTRONAUTS</Typography>
                    
                    <ExpandMoreIcon fontSize='large' className={classes.expandIcon} />
                </Grid>
            </CardMedia>
        </Card>
    )
}

export default Header;