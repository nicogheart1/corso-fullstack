import { useRef } from "react";

const Form = () => {

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("onSubmit", event);
    const data = {
      email: emailRef.current.value,
      password: event.target.elements.password.value,
    };
    console.log("form data", data.email, data.password);
  };

  const emailRef = useRef(null);

  return (
    <div>
      <h2>Form</h2>
      <div>
        <form onSubmit={handleOnSubmit}>
          <input ref={emailRef} type="email" name="email" placeholder="Inssert e-mail" />
          <input
            type="password"
            name="password"
            placeholder="Insert password"
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
