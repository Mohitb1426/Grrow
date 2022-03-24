import * as React from 'react';
import Modal from '@mui/material/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import './LoginForm.css';



function LoginForm() {
    return (
        <React.Fragment>
        <Modal
        hideBackdrop
        open={true}
        //onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <form className='loginform'>

        <h1 className='continueWithGoogle'>Welcome to Groww</h1>

        <Button variant="outlined"  startIcon={<GoogleIcon/>} className='googlebutton'>Continue with Google</Button>

        

        
        <TextField id="standard-basic" label="Your Email Address" variant="standard" />
      

         
          <Button>Continue</Button>
          <p>By proceeding ,I agree to <span>T&C</span>and <span>Privacy Policy</span></p>
        </form>
      </Modal>
      </React.Fragment>
    );
}
export default LoginForm;

