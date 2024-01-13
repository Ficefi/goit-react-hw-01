import clsx from "clsx";
import css from "./FriendListItem.module.css";

export const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <div className={clsx(css.item)}>
      <img className={clsx(css.avatar)} src={avatar} alt={name} width="72" />
      <p className={clsx(css.name)}>{name}</p>
      <p className={clsx(css.status, css[isOnline])}>
        {status ? "Online" : "Offline"}
      </p>
    </div>
  );
};
