import AddIcon from "@mui/icons-material/Add";
import {IconButton} from "@mui/material";
import {ButtonProps} from "../../Interfaces.ts";

const AddButton = ({disabled, onClick}: ButtonProps) => {
    return (
        <IconButton
            aria-label={'add'}
            sx={{
                width: '50px',
                height: '50px',
                backgroundColor: 'primary.main',
                color: 'white',
                '&:hover': {
                    backgroundColor: 'primary.dark',
                },
                '&:disabled': {
                    backgroundColor: 'grey',
                },
            }}
            disabled={disabled}
            onClick={onClick}
        >
            <AddIcon/>
        </IconButton>
    );
};

export default AddButton;