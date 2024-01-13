import { Profile } from "./components/Profile/Profile";
import { FriendList } from "./components/FriendList/FriendList";
import userData from "./Data/userData.json";
import friends from "./Data/friendsList.json";
import "./App.css";

const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App;
