import { Add } from "@material-ui/icons";
import React, { useState } from "react";
import { useStateValue } from "../../config/StateProvider";
import Story from "./Story";
import "./StoryReels.css";

function StoryReels() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState(false)

  const addStory = () => {
    document.getElementsByTagName('input')
  };

  return (
    <div className="storyReels">
      <form className="addStoryForm" onClick={addStory}>
        <div
          className="addStory"
          style={{ backgroundImage: `url(${user?.photoURL})` }}
        ></div>
        <div className="addStory__bottom">
          <Add />
          <h4>Create Story</h4>
        </div>
        <input type="file" />
      </form>
      <Story
        image="https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/turner-25_s1-Full-Image_GalleryBackground-en-US-1557355385166._SX1080_.jpg"
        name="Courage"
        profileSrc="https://i.pinimg.com/originals/d9/80/18/d9801898d69e05a9e6c2ea9d42f479ea.png"
      />
      <Story
        image="https://pbs.twimg.com/profile_images/3646744929/c3da82e7a90c72a9f093cc23a08d0156.jpeg"
        name="Eustace Bagge"
        profileSrc="https://i.ytimg.com/vi/sqEpxsqAB5o/maxresdefault.jpg"
      />
      <Story
        image="https://i.ytimg.com/vi/2jf9aNR8ifg/maxresdefault.jpg"
        name="Murial Bagge"
        profileSrc="https://static.wikia.nocookie.net/courage/images/d/d9/Muriel_Bagge.png/revision/latest?cb=20181025053335"
      />
      <Story
        image="https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.6435-9/122410906_3712548115462414_958600201508446074_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEorSF9u6-AUZqpN12U9DOeoBt-uwMZ1y6gG367AxnXLoGXF2Lt8MRpmlJhZQEag3nkXJv2QlW7um4F2CVq2jiY&_nc_ohc=4JhngsvSLMcAX9G9wCb&_nc_ht=scontent.fkhi1-1.fna&oh=0f203bea4557d166dad346a7c9fb1954&oe=60DD7A7F"
        name="Courage"
        profileSrc="https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.6435-9/205516843_969466183821695_3847769374785731037_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=825194&_nc_eui2=AeHxbKEdkd_ASc-Wlw3rHVE1Qe5py60sT1BB7mnLrSxPUL8GhWatCGtWDp6GyQYFgf5qZEdTLgCxfHa1dBDsZoyo&_nc_ohc=0Su1eW9p_V0AX_UpzdG&_nc_ht=scontent.fkhi1-1.fna&oh=342723cc9202ad07c6f70b718f814972&oe=60DEBE11"
      />
    </div>
  );
}

export default StoryReels;
