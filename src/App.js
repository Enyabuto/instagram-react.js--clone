import React, {useState} from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState ([
    {
      username: "elisha_on",
      caption: "WOW it works",
      imageUrl: "https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
    },
    {
      username: "joabn30",
      caption: "Damn! Those are beautiful",
      imageUrl: "https://asset.bloomnation.com/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1605352255/vendor/2183/catalog/product/2/0/20200424092013_file_5ea3580d59716_5ea35828e648b.jpg"
    },
    {
      username: "NBAonTNT",
      caption: "LBJ is on fire",
      imageUrl: "https://pyxis.nymag.com/v1/imgs/847/0f7/504c63a03d8a751a5cbeda0bc064306bb4-lebron-james.rsquare.w1200.jpg"
    },
  ]);

  

  return (
    <div className="app">
      <div className="app_header">
        <img className="app_headerImage" 
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
          alt=""
        />
      </div>

      {
        posts.map(post => (
            <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
          ))
      };
      
      
    </div>
  );
}

export default App;
