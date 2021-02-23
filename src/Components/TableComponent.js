import React from 'react';
import {
    Tooltip,
    IconButton,
} from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import DeleteIcon from '@material-ui/icons/Delete';

function Table({ astronauts, onDelete }) {

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
    
    const astronautArr = astronauts.map( e => { 
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
        <div>
            <DataGrid 
                rows={astronautArr} 
                columns={columns}
                pageSize={7}
                autoHeight
                hideFooterSelectedRowCount
                showCellRightBorder
            />
        </div>
    )
}

export default Table;