import React, { useEffect, useState } from 'react'
import { data } from './data';
import Lorem from './Lorem';

const Generator = () => {
    const [number,setNumber] = useState('')
    const [lorem,setLorem] = useState([]);
    const [error,setError] = useState(false);
    const [errMessage,setErrMessage] = useState('')


    useEffect(()=>{
        if (number > data.length-1) {
            setLorem(data)
            setError(true);
            setErrMessage('Number Should be Less than 24')
        }else if (number < 0) {
            setError(true);
            setErrMessage('Number should be greater than 0')
        }
        else{
            let newData = data.slice(0,number);
            setLorem(newData);
            setError(false);
        }
    },[number])

    const generateLorem = (e) => {
        e.preventDefault();
    }
return (
    <>
    <div className="container p-5 shadow border col-lg-5 mx-auto my-5 rounded">
        <form>
            <h4 className='text-center display-4'>
                Lorem Generator
            </h4>
            <label>Number</label>
            <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)} className='form-control' placeholder='Enter any number within Range....'/>
            {
                error && <p className='text-danger fw-bolder'>
                    {errMessage}
                </p>
            }
            <button onClick={generateLorem} className='btn btn-dark my-2 w-100'>
                Generate Lorem
                </button>
        </form>
    </div>
    <div className="container col-lg-5 mx-auto my-3">
        {lorem.map((item)=>{
            return <Lorem text = {item} />
        })}
    </div>
    </>
)
}

export default Generator