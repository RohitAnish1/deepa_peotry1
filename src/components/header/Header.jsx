import  "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">Deepa's</span>
          <span className="headerTitleLg">Poetry</span>
        </div>
        <img
        className="headerImg"
        src="https://as1.ftcdn.net/v2/jpg/02/87/90/92/1000_F_287909239_K8bMpb0M9oUyOI8zrdqpKPQnIlC73WfD.jpg"
        alt=""
        />
    </div>
  )
}
