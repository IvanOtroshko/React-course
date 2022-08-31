import "./App.css";
import { Button } from "./components/Button";
import { Clicker } from "./components/Clicker";
import { EmojiList } from "./components/Emoji/List";
import { Input } from "./components/Input";
import { PostList } from "./components/Posts/List";
import { Title } from "./components/Title";
import { UserCard } from "./components/User";
import { posts } from "./mocks";


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
      {/* <Title text="Hi React"/>
      <Button text="Login" onClick={onClickLogin} />
      <Button text="Sign up" onClick={onClickSignUp} />
      <Button text="Logout" onClick={onClickLogout} /> */}
      {/* <Input value="hi" placeholder='Введите логин' onChange={()=>{}}/> */}
      {/* <UserCard UserName={"Ivan Otroshko"} />  */}
      {/* <Clicker/> */}
      <PostList posts={posts}/>
      <EmojiList></EmojiList>
    </div>
   
  );
}

export default App;