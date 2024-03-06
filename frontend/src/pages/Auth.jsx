import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {signUpUser,signInUser} from '../actions/user'
import {
  Container,
  FormContainer,
  Title,
  AuthForm,
  StyledTextField,
  StyledButton,
  AuthLink,
  StyledLinkText,
} from './styles/Auth.styles';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signUpUser(userData, history));
    } else {
      dispatch(signInUser(userData, history));
    }
  };

  return (
    <>
      <Container>
        <FormContainer>
          <Title>{isSignUp ? 'SignUp' : 'Login'}</Title>
          <AuthForm>
            {isSignUp && (
              <StyledTextField
                value={userData.name}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                type="text"
                placeholder="Your name"
              />
            )}
            <StyledTextField
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              type="email"
              placeholder="Email address"
            />
            <StyledTextField
              value={userData.password}
              onChange={(e) => setUserData({ ...userData, password: e.target.value })}
              type="password"
              placeholder="Your password"
            />
            <StyledButton variant="contained" onClick={handleSubmit}>
              {isSignUp ? 'Register' : 'Login'}
            </StyledButton>
            {isSignUp ? (
              <AuthLink onClick={() => setIsSignUp((prev) => !prev)}>
                Already have an account?
                <StyledLinkText>Login here</StyledLinkText>
              </AuthLink>
            ) : (
              <AuthLink onClick={() => setIsSignUp((prev) => !prev)}>
                Don't have an account?
                <StyledLinkText>Register here</StyledLinkText>
              </AuthLink>
            )}
          </AuthForm>
        </FormContainer>
      </Container>
    </>
  );
};

export default Auth;