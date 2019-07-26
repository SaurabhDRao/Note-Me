import React from "react";
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';
import SnackbarContent from '@material-ui/core/SnackbarContent';

export default function MySnackbarContentWrapper(props) {
    const { classes, className, message, onClose, variant, ...other } = props;
    const Icon = ErrorIcon;
  
    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
            <span id="client-snackbar" className={classes.message}>
                <Icon className={clsx(classes.icon, classes.iconVariant)} />
                {message}
            </span>
            }
            action={[
            <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                <CloseIcon className={classes.icon} />
            </IconButton>,
            ]}
            {...other}
        />
    );
}
  