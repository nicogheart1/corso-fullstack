import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormWithState = ({ email: extEmail, password: extPassword, onSubmit: extOnSubmit }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(extEmail);
  const [password, setPassword] = useState(extPassword);
  //const [formData, setFormData]= useState({ email: "", password: ""});

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("data", email, password);
    extOnSubmit({ email, password });

    //console.log("data", formData);
    //extOnSubmit(formData);

    navigate("/list");
  };

  return (
    <div>
      <h2>Form Whit State</h2>
      <div>
        <form onSubmit={handleOnSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Inssert e-mail"
            onChange={(event) => setEmail(event.target.value)}
            //onChange={(event) => setFormData({...formData, email: event.target.value})}
            value={email}
          />
          <input
            type="password"
            name="password"
            placeholder="Insert password"
            onChange={(event) => setPassword(event.target.value)}
            //onChange={(event) => setFormData({...formData, password: event.target.value})}
            value={password}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default FormWithState;
