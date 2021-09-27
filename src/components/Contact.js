import React,{useState} from 'react'

export default function Contact(props) {

    const [text, setText] = useState('')
    const [email, setEmail] = useState('')
    const [que, setQue] = useState('')
    const [tnc, setTnc] = useState('')

    const onSubmit = (event) =>{
         event.preventDefault();
         console.log(text,email,que,tnc)
         props.showAlert("Your Query is submitted Successfully", "success")
    }

    

    return (

        <div className="container" style={{color : props.mode === 'dark'?'white':'black'}}>

            <h2 className="mt-5">Contact Us</h2>
            <form onSubmit={onSubmit}>
            <div className="my-1">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" value={text} onChange={(event)=> setText(event.target.value)} style={{backgroundColor: props.mode ==='dark'?'#343a40':'white' , color: props.mode === 'dark'?'white':'black' }}/>
            </div>

            <div className="my-3">
                <label htmlFor="exampleFormControlInput1" className="form-label" >Email Address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Email" value={email} onChange={(event)=> setEmail(event.target.value)} style={{backgroundColor: props.mode ==='dark'?'#343a40':'white' , color: props.mode === 'dark'?'white':'black' }}/>
            </div>

            <div className="my-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your Question</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"  value={que} onChange={(event)=> setQue(event.target.value)} style={{backgroundColor: props.mode ==='dark'?'#343a40':'white' , color: props.mode === 'dark'?'white':'black' }}></textarea>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" onChange={(event)=> setTnc(event.target.checked)} style={{backgroundColor: props.mode ==='dark'?'#343a40':'blue' , color: props.mode === 'dark'?'white':'black' }} id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Accept Terms And Condition
                </label>
            </div>

            <button type="Submit" className="btn btn-primary my-3">Submit</button>
            </form>
        </div>
    )
}
