import {GoogleLogout} from 'react-google-login';

const clientId = '32644728196-qs8nr857m20s5ornv5akv34v837gs6ge.apps.googleusercontent.com';

function Logout() {
    
    const onSuccess = () => {
        alert('Logout made successfully');
        // this.props.history.push('/');
        // window.location.reload();
    }
    
    return(
        <div id="singInButton">
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;