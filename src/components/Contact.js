const Contact=()=>{
    return (
        <div>
           <h1 className="font-bold text-2xl p-4 m-4">This is contact page;</h1> 
       
        <form>
            <input type="text" placeholder="name" className="border border-black p-2 m-2"/>
            <input type="text" className="border border-black p-2 m-2" placeholder="message"/>
            <button className="border border-black bg-black text-white">Submit</button>
        </form> </div>
    )
}
export default Contact;