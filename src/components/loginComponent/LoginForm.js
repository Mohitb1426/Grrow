import * as React from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import './LoginForm.css';

function LoginForm() {
  return (
    <React.Fragment>
      <Modal
        className="login-form-modal"
        hideBackdrop
        open={true}
        //onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Grid container
          direction="row"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '50vh' }} columns={16}>
          <Grid style={{ "height": "20em" }} item xs={8}>
            <div className="loginform-imagediv">
              {/* <P className="login-form-left-title" >Simple ,Free <Br/>
              Investing</P> */}
            </div>
          </Grid>
          <Grid item xs={8}>
            <form   >
              <h1 className='continueWithGoogle'>Welcome to Groww</h1>
              <div>
                <Button variant="outlined" startIcon={<GoogleIcon />} className='googlebutton'>Continue with Google</Button>
              </div>
              <div>
                <TextField id="standard-basic" label="Your Email Address" variant="standard" />
              </div>
              <div>
                <Button className='absolutecenter' style={{ padding: "25px 25px" }}>Continue</Button>
              </div>
              <div>
                <p>By proceeding ,I agree to <span>T&C</span>and <span>Privacy Policy</span></p>
              </div>
            </form>
          </Grid>
        </Grid>

      </Modal>
    </React.Fragment>
  );
}
export default LoginForm;

