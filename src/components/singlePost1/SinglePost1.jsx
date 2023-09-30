import "./singlePost1.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img
            src="https://www.acetestravel.com/tour-image/troy.webp"
            alt=""
            className="singlePostImg"
            />
            <h1 className="singlePostTitle">
            Salt Toy
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
            Whoever dared to pass this verdict
That love can no longer exist here?
Where can love move away to
When we welcomed her in with lighted lamp?
All those who know her will let her in
At the very first knock,with folded arms!
I see her at dawn,waiting at the threshold
A little hesitant,for being morning's first face.
Where can love leave us and go?
She is here found hiding,somewhere behind the corners.
Though she scares like a snake among leaves
We know she has dried a lot in the sun.
Love has its own morality that lust has not!
It knows the trick to drench some dunes!
If doubt hadn't been it's alter face
What a world winner it would have gone to been!
There can be nothing more to hurt and hide
When this sack of sweetness has burst open in you!
This is a little bubble in the sea of you
And you have rainbow pupils forever and for good!
When all your strings are singing this tune
You can join the chorus to sing the song of life.
Would you care to join this swim
And be a salt toy to go and fathom the sea?
            </p>
        </div>
    </div>
  )
}
