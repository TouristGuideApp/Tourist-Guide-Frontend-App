import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import * as React from "react";
import {Checkbox} from "@mui/material";

export default function EditCollectionModal({onClose, name, nameChange, description, descriptionChange, isPublic, isPublicChange, saveClick}){
    return (
        <div>
            <Dialog open={true} onClose={onClose}>
                <DialogTitle>Edit Collection</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        value={name}
                        onChange={nameChange}
                        margin="dense"
                        id="name"
                        label="Collection Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        required={true}
                    />
                    <TextField
                        value={description}
                        onChange={descriptionChange}
                        margin="dense"
                        id="description"
                        label="Collection Description"
                        type="text"
                        multiline={true}
                        fullWidth
                        variant="standard"
                        required={true}
                    />
                    Is Public ? *
                    <Checkbox
                        defaultChecked
                        value={isPublic}
                        onChange={isPublicChange}
                        required={true}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Close</Button>
                    <Button onClick={saveClick}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}