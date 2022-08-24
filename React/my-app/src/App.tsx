import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Title } from "./components/Title";
import { UserCard } from "./components/User";


function App() {
  const onClickLogin = () => {
    alert("Login");
  };

  const onClickSignUp = () => {
    alert("SignUp");
  };

  const onClickLogout = () => {
    alert("Logout");
  };

  return (
    <div className="App">
      <Title text="Hi React"/>
      <Button text="Login" onClick={onClickLogin} />
      <Button text="Sign up" onClick={onClickSignUp} />
      <Button text="Logout" onClick={onClickLogout} />
      <Input  placeholder='Введите логин'/>
      <UserCard UserName={"Ivan Otroshko"} />
    </div>
   
  );
}

export default App;