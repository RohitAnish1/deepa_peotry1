import "./singlePost5.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img
            src="https://as1.ftcdn.net/v2/jpg/02/50/53/02/1000_F_250530225_xTJwtSN71M3aKq8Ume8S3wEbjGKrMuj9.jpg"
            alt=""
            className="singlePostImg"
            />
            <h1 className="singlePostTitle">
                Enigma s road to Dump
            </h1>
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author:<b>Deepa</b> </span>
                <span className="singlePostDate" >1 hours ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Iure, laboriosam! Delectus
                  ipsam tenetur, hic, sint dolore nobis neque aperiam, 
                  alias vero quae enim perferendis corporis 
                  corrupti fuga optio voluptatibus ab.
                  Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Iure, laboriosam! Delectus
                  ipsam tenetur, hic, sint dolore nobis neque aperiam, 
                  alias vero quae enim perferendis corporis 
                  corrupti fuga optio voluptatibus ab.
                  Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Iure, laboriosam! Delectus
                  ipsam tenetur, hic, sint dolore nobis neque aperiam, 
                  alias vero quae enim perferendis corporis 
                  corrupti fuga optio voluptatibus ab.
            </p>
        </div>
    </div>
  )
}
