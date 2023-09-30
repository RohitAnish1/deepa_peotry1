import "./write.css"

export default function Write() {
  return (
    <div className="write"> 
    <img
     className="writeImg"
     src="https://as1.ftcdn.net/v2/jpg/01/87/38/72/1000_F_187387289_48XlM3JSHLM9rkEJvMBPmoGnGs1zo6ei.jpg"></img>
      <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>  
            </label>
            <input  id="fileInput" type="file" style={{display:"none"}} />
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
         <textarea
         placeholder="Tell your Story..."
         type="text"
         className="writeInput writeText"
         ></textarea> 
        </div>
        <button className="writeSubmit">Publish</button>
    </form>
    </div>
  )
}
