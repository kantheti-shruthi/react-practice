import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from './ErrorModal.module.css';
import Card from "./Card";
import Button from "./Button";

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.closemodal}></div>;
}

const ModalOverlay = props => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.closemodal}>Ok</Button>
            </footer>
        </Card>
    );
}

const ErrorModal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop closemodal={props.closemodal}/>, 
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay 
                    title={props.title} 
                    message={props.message} 
                    closemodal={props.closemodal}/>, 
                    document.getElementById('overlay-root')
            )}
        </Fragment>
    );
};

export default ErrorModal;