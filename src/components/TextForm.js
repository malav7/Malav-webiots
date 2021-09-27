import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = ()=>{
        
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Your text is converted to uppercase Successfully", "success")
    }

    const handleLoClick = ()=>{
        
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Your text is converted to lowercase Successfully", "success")
    }

    const handleClear = ()=>{
        
        
        setText('');
        props.showAlert("Text is cleared", "success")
    }

    const handleExtraSpace =() =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra space Removed", "success")
    }

    const handleOnChange = (event)=>{
        
        setText(event.target.value);
    }
    return (
        <>
        <div className="container" style={{color : props.mode === 'dark'?'white':'black'}}>
            <h1>{props.title}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'#343a40':'white' , color: props.mode === 'dark'?'white':'black' }} id="myBox" rows="8"></textarea>
            </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space </button>

        </div>

        <div className="container"style={{color : props.mode === 'dark'?'white':'black'}}>
            <h1>Text Summary</h1>
            <p>{text.split (" ").filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
            <p>{0.008 *text.split (" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
