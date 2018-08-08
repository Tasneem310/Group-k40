import React from 'react';

const SignUp = () => (
    <React.Fragment>
        <form onSubmit={#}>
        <FormGroup bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl autoFocus type="Username" />
          </FormGroup>
        <FormGroup bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl autoFocus type="Email" value={this.state.email} />
        </FormGroup>
        <FormGroup bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl value={this.state.password} type="Password"
          />
        </FormGroup>
        <FormGroup bsSize="large">
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl value={this.state.confirmPassword} type="Confirm Password" />
        </FormGroup>
        <FormGroup bsSize="large">
            <ControlLabel>Sign as</ControlLabel>
            



        <p>By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p>
        <LoaderButton block bsSize="large" type="submit" text="Signup" loadingText="Signing up…" />
      </form>
      <p>Already member?</p>
      <Link to = "/SignIn"><p>SIGN In</p></Link>
    </React.Fragment>
);

export default SignUp;
