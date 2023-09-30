import React from 'react';
import Post from '../post/Post';
import { Link } from 'react-router-dom';
import './posts.css';

export default function Posts() {
  return (
    <div className="posts">
      <Link to="/post/1" className="link">
        <Post 
          title="Salt Toy"
          imageUrl="https://www.acetestravel.com/tour-image/troy.webp"
          description="Whoever dared to pass this verdict
          That love can no longer exist here?
          Where can love move away to
          When we welcomed her in with lighted lamp?
          All those who know her will let her in"
        />
      </Link>
      <Link to="/post/2" className="link">
        <Post 
          title="Meeting you"
          imageUrl="https://0.soompi.io/wp-content/uploads/2021/07/05205949/Meeting-You-Xia-Rui-and-Nan-Xi.jpg"
          description="It was good that you came
          When I had such a need for you!
          This time I got ready to learn
          The lessons only you could teach.
          How could I get so used to you
          Blocking air to breathe,to speak!
          You were so used to victory
          And always saw birds form V in sky."
        />
      </Link>
      <Link to="/post/3" className="link">
        <Post 
          title="Challenges"
          imageUrl="https://media.licdn.com/dms/image/D4E12AQH0-WE3_sKOCg/article-cover_image-shrink_423_752/0/1669560026432?e=1701302400&v=beta&t=yL_k1qpmeokB_h-OqPkRMl2np5PvXkf6EHxgjgeht4k"
          description="Challenges are rough handcuffs
          They bind you away from everything else
          This is not meant for those
          Who only catch fish without wetting hands!
          This will need rolling up your sleeve
          And tasting the sting of tears and sweat in eyes."
        />
      </Link>
      <Link to="/post/4" className="link">
        <Post 
          title="Talkanoisseur"
          imageUrl="https://www.ancient-origins.net/sites/default/files/field/image/Tower-of-Babel.jpg"
          description="When you get lost in the tower of Babel
          Where some rising cacophony blurs
          Everything else to puny nothingness
          What a lark they can make of you!
          You can either collect all of it,save and leave
          Or learn to cast off griping and sniping and be a talkanoisseur!"
        />
      </Link>
      {/* Add more posts as needed */}
    </div>
  );
}
