import { useNavigate } from "react-router-dom";
import GoogleButton from 'react-google-button'



function GoogleComponent() {
  const usenavigate = useNavigate();


  return (
    <a href = "http://localhost:8000/auth/google">
    <GoogleButton/>
    </a>
  );
}

export default GoogleComponent;







