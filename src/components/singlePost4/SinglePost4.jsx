import "./singlePost4.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img
            src="https://www.ancient-origins.net/sites/default/files/field/image/Tower-of-Babel.jpg"
            alt=""
            className="singlePostImg"
            />
            <h1 className="singlePostTitle">
            Talkanoisseur
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
            When you get lost in the tower of Babel
Where some rising cacophony blurs
Everything else to puny nothingness
What a lark they can make of you!
You can either collect all of it,save and leave
Or learn to cast off griping and sniping and be a talkanoisseur!
With pulls and triggers all around
Have a hard time wielding your tongue
A chance to match pleasure and pain
Now eke out a gospel dripping tears and sweat!
Listen to this gobbledygook for long
To vandalise you and uproot your world!
You will need a lot of might to untie this knot
To raise your voice and make you heard!
Now fly you back from neverending tricky routes
Bare a good deal of heart and settle down.
Ditch the half awake -half asleep mode
For guileless love is flawless dialect!
            </p>
        </div>
    </div>
  )
}
