import { FriendListItem } from "./FriendListItem";
import css from "./FriendList.module.css";
import clsx from "clsx";

export const FriendList = ({ friends }) => {
  return (
    <ul className={clsx(css.friend_list)}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className="A" key={id}>
          <FriendListItem name={name} isOnline={isOnline} avatar={avatar} />
        </li>
      ))}
    </ul>
  );
};
