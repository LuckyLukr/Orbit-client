import React from 'react';
import { 
    Card,
    Grid,
    makeStyles,
    Typography,
    Fab,
    Tooltip,
    IconButton,
    Button
} from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import useScrollPosition from '@react-hook/window-scroll';
import AddingForm from './AddingFormComponent';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';

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

function Register({ astronauts, onAdd, onExpandAdd, onDelete, addingData }) {
    const classes = useStyles();
    const scrollY = useScrollPosition(60 /*fps*/);
    const columns = [
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        { field: 'birth', headerName: 'Birth', width: 130 },
        { field: 'superpower', headerName: 'Superpower', width: 300,  },
        {  
            field: ' ', 
            headerName: null,
            renderCell: (params) => (
                <Tooltip title='Delete' >
                    <IconButton onClick={()=> onDelete(params.row.id)} color='primary' > 
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            )
        },
    ];
    
    const nautArr = astronauts.map( e => { 
        return({
            id: e._id || e.id,
            key: e._id,
            firstName: e.firstName,
            lastName: e.lastName,
            birth: e.birth,
            superpower: e.superpower
        })
     });


    return(
        <Grid container justify='center'>
            <Card elevation={10} className={scrollY === 0 ? classes.root : classes.rootScroll}>

                <Typography align='center' variant='h4' color='textSecondary' >
                    REGISTER OF ASTRONAUTS
                </Typography>

                <div>
                    <DataGrid 
                        rows={nautArr} 
                        columns={columns}
                        pageSize={7}
                        autoHeight
                        hideFooterSelectedRowCount
                        showCellRightBorder
                        />
                </div>

                {addingData 
                ?
                <Grid container justify='center'>               
                    <Card elevation={0} className={classes.addform}>
                        <Grid container justify='flex-end'>
                            <IconButton onClick={()=> onExpandAdd()} variant='text' color='primary'>
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                        <AddingForm onExpandAdd={onExpandAdd} onAdd={onAdd} />
                    </Card>
                </Grid>  
                :
                <Tooltip title='Add' >
                    <Fab onClick={()=> onExpandAdd()} style={{marginTop: '1%'}} color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </Tooltip>
                }
            </Card>
        </Grid>
    )
}

export default Register;