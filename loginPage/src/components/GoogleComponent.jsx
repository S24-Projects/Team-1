import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
const clientID =
  "262889882503-oacf0knn91ga7u4lmnoau4g0aege32ek.apps.googleusercontent.com";

function GoogleButton() {
  const usenavigate = useNavigate();

//   const onSuccess = (res) => {
//     console.log("Login Success", res);
//     usenavigate("./TestHome");
//   };

//   const onFailure = (res) => {
//     console.log("Login Failed", res);
//   };
  return (
    <div id="singInButton">
      <GoogleOAuthProvider clientId={clientID}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            usenavigate("./TestHome");
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        
      </GoogleOAuthProvider>
    </div>
  );
}

export default GoogleButton;

{
  /* <GoogleLogin
            clientId = {clientID}
            buttonText = "Login"
            onSuccess = {onSuccess}
            onFailure = {onFailure}
            cookiePolicy = {'single-host-origin'}
            isSignedIn = {true}
        /> */
}
