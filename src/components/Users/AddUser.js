import React, {useState} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = event => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            });
            return;
        }

        if(enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)'
            });
            return;
        }

        setEnteredAge('');
        setEnteredUsername('');
        props.onAddUser(enteredUsername, enteredAge);
    }

    const usernameChangleHandler = event => {
        setEnteredUsername(event.target.value);
    }

    const ageChangleHandler = event => {
        setEnteredAge(event.target.value);
    }

    const onCloseModal = event => {
        setError();
    }

    return( 
        <div> 
           { error && (<ErrorModal 
                key="error-modal"
                title={error.title}
                message={error.message}
                closeModal = {onCloseModal}/> )}
            <Card key="add-user" className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username" 
                        type="text" 
                        value={enteredUsername} 
                        onChange={usernameChangleHandler}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input 
                        id="age" 
                        type="text" 
                        value={enteredAge} 
                        onChange={ageChangleHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;