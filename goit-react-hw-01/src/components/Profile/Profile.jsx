import css from "./Profile.module.css";
import clsx from "clsx";

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={clsx(css.profile)}>
      <div className={clsx(css.description)}>
        <img
          src={avatar}
          alt={username}
          className={clsx(css.avatar)}
          width={150}
          height={150}
        />
        <p className={clsx(css.name)}>{username}</p>
        <p className={clsx(css.tag)}>@{tag}</p>
        <p className={clsx(css.location)}>{location}</p>
      </div>

      <ul className={clsx(css.stats)}>
        <li>
          <span className={clsx(css.label)}>Followers</span>
          <span className={clsx(css.value)}>{stats.followers}</span>
        </li>
        <li>
          <span className={clsx(css.label)}>Views</span>
          <span className={clsx(css.value)}>{stats.views}</span>
        </li>
        <li>
          <span className={clsx(css.label)}>Likes</span>
          <span className={clsx(css.value)}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
