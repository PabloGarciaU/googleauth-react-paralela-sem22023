import {GoogleLogin} from 'react-google-login';

const clientId = '32644728196-qs8nr857m20s5ornv5akv34v837gs6ge.apps.googleusercontent.com';

function Login() {
    
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
    }

    const onFailure = (res) => {
        console.log('[Login Failed] res:', res);
    }
    
    return(
        <div id="singInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{marginTop: '100px'}}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;