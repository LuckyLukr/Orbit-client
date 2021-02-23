import React from 'react';
import { 
    Card,
    Grid,
    makeStyles,
    Typography,
    Fab,
    Tooltip,
    IconButton,
} from '@material-ui/core';
import useScrollPosition from '@react-hook/window-scroll';
import AddingForm from './AddingFormComponent';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import Table from './TableComponent';

const useStyles = makeStyles(()=>({
    root: {
        width: '80vw',
        minHeight: '75vh',
        marginBottom: '5%',
        padding: '10px',
        transition: '1s',
        textAlign: 'center',
        zIndex: 1,
    },
    rootScroll: {
        width: '80vw',
        margin: '-5% 0% 5% 0%',
        padding: '10px',
        transition: '1s',
        textAlign: 'center',
        zIndex: 1,
    },
    addform: {
        maxWidth: 600,
        padding: '1%',
        margin: '2%',
    },
}))

function Register({ astronauts, onAdd, onExpandRegisterForm, onDelete, showRegisterForm }) {
    const classes = useStyles();
    const scrollY = useScrollPosition(60 /*fps*/);

    return(
        <Grid container justify='center'>
            <Card elevation={10} className={scrollY === 0 ? classes.root : classes.rootScroll}>
                <Typography align='center' variant='h4' color='textSecondary' >
                    REGISTER OF ASTRONAUTS
                </Typography>
                <Table 
                    astronauts={astronauts} 
                    onDelete={onDelete} 
                />

                {showRegisterForm 
                    ?
                    <Grid container justify='center'>               
                        <Card elevation={0} className={classes.addform}>
                            <Grid container justify='flex-end'>
                                <Tooltip title='Close' >
                                    <IconButton onClick={()=> onExpandRegisterForm()} variant='text' color='primary'>
                                        <CloseIcon />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                            <AddingForm 
                                onExpandRegisterForm={onExpandRegisterForm} 
                                onAdd={onAdd} 
                            />
                        </Card>
                    </Grid>  
                    :
                    <Tooltip title='Add' >
                        <Fab onClick={()=> onExpandRegisterForm()} style={{marginTop: '1%'}} color="primary" aria-label="add">
                            <AddIcon />
                        </Fab>
                    </Tooltip>
                }
            </Card>
        </Grid>
    )
}

export default Register;