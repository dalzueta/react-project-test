import "./style.css";
import { useState } from "react";

const TwitterFollowCard = ({
  userName,
  name,
  initialIsFollowingState = false,
}) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowingState);
  const imgUrl = "https://unavatar.io/twitter/" + userName;

  return (
    <article className="twitter-followCard">
      <header className="twitter-followCard_header">
        <img
          className="twitter-followCard_avatar"
          alt={userName}
          src={imgUrl}
        />
        <div className="twitter-followCard_info">
          <strong>{name}</strong>
          <span className="twitter-followCard_infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button
          onClick={() => setIsFollowing(!isFollowing)}
          className={
            isFollowing
              ? "twitter-followCard_button isFollowing"
              : "twitter-followCard_button"
          }
        >
          <span className="twitter-followcard_button_text_follow">
            {isFollowing ? "siguiendo" : "seguir"}
          </span>
          <span className="twitter-followcard_button_text_hover">
            dejar de seguir
          </span>
        </button>
      </aside>
    </article>
  );
};

export { TwitterFollowCard };
