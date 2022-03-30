import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import './LoginForm.css';
import swal from 'sweetalert';
import { Box } from '@mui/material';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
function LoginForm({ closeModal }) {
  const [Email, setEmail] = useState('')

  const onContinue = () => {
    const emailRegax = /\S+@\S+\.\S+/
    if (Email !== '' && Email.match(emailRegax)) {
      swal("Welcome");
    }
    else {
      swal("Please Enter a Valid Email");

    }
  }
  return (
    <React.Fragment>
      <Modal
        className="login-form-modal"
        open={true}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Grid container className='loginForm-mainGrid'
          direction="row"
          alignItems="center"
          justifyContent="center"
          columns={16}>
          <Grid item xs={8}>
            <div className="loginForm-imageDiv">
              Simple, Free <br /> Investing.
              <div className="loginform-imagediv-downside">US Stocks</div>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className="login-formDiv">
            <Box className='login-closeButton' >
              <IconButton onClick={closeModal}>
                <CloseIcon />
              </IconButton>
            </Box>
              <form>
                <h1 className='continueWithGoogle'>Welcome to Groww</h1>
                <div >
                  <Button variant="outlined" startIcon={<GoogleIcon />} className='googlebutton'>Continue with Google</Button>
                </div>

                <div className='loginForm-or-line'>Or</div>
                <div>
                  <TextField id="standard-basic"
                    label="Your Email Address"
                    variant="standard"
                    className='loginForm-email-field'
                    value={Email}
                    onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                  <Button onClick={onContinue} className='login-form-continue-button' >Continue</Button>
                </div>
                <div>
                  <p className='login-form-privacypolicy-text'>By proceeding ,I agree to <span className='bold-policy-login'>T&C</span>and <span className='bold-policy-login'>Privacy Policy</span></p>
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
      </Modal>
    </React.Fragment>
  );
}
export default LoginForm;

