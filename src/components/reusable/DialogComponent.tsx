import React, { ReactNode } from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DialogComponentProps } from '../../lib/types/DialogComponentProps';

// A generic dialog component styled with a given 'selectedColor'
const DialogComponent: React.FC<DialogComponentProps> = ({ title, onClose, selectedColor, open, children }) => {
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="xl">
            <DialogTitle 
                sx={{ 
                    backgroundColor: selectedColor, 
                    color: 'white', 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
                <IconButton 
                    edge="end" 
                    color="inherit" 
                    onClick={onClose} 
                    aria-label="close"
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: 'primary.main', color: 'text.primary' }}>
                {children}
            </DialogContent>
        </Dialog>
    );
};

export default DialogComponent;
