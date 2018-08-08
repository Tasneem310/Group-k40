import React from 'react';

const SignIn = () => (
    <React.Fragment>
        <div>
        <h2>Sign In</h2>
        <form onSubmit={#}>
          <FormGroup bsSize="large">
            <ControlLabel>Email or Username</ControlLabel>
            <FormControl autoFocus type="Email or Username" />
          </FormGroup>
          <FormGroup bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password} type="Password" />
          </FormGroup>
          <Button block bsSize="large" type="submit" >
            Login
          </Button>
        </form>
        <p>Not a member?</p>
        <Link to = "/SignUp"><p>SIGN UP</p></Link>
      </div>
    </React.Fragment>
);

export default SignIn;