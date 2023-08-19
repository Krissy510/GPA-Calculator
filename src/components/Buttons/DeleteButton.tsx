import {IconButton} from "@mui/material";
import {ButtonProps} from "../../Interfaces.ts";
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteButton = ({disabled, onClick}: ButtonProps) => {
    return (
        <IconButton
            aria-label={'delete'}
            sx={{
                width: '50px',
                height: '50px',
                backgroundColor: '#ff1744',
                color: 'white',
                '&:hover': {
                    backgroundColor: '#b2102f',
                },
                '&:disabled': {
                    backgroundColor: 'grey',
                },
            }}
            disabled={disabled}
            onClick={onClick}
        >
            <DeleteIcon/>
        </IconButton>
    );
};

export default DeleteButton;