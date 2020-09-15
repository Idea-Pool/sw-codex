import React from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertDismissable(props) {
    const { type = 'success', message, onClose } = props;

    return (
        <Alert variant={type} onClose={onClose} dismissible>{message}</Alert>
    );
}

export default AlertDismissable;