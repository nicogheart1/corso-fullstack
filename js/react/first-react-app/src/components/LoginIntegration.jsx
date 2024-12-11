const LoginIntegration = () => {
  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          username: "pippo",
          password: "pippo123",
        }),
      });
      const result = await response.json();
      console.log("result", result);
      localStorage.setItem("auth", result.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input placeholder="username" />
      <input placeholder="password" type="password" />
      <button type="submit">Accedi</button>
    </form>
  );
};

export default LoginIntegration;
