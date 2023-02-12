import React from 'react'
import axios from 'axios';
import {useState} from 'react';
import { toast} from 'react-toastify';

import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

const GetResult = () => {
    const [data, setData] = useState('');
    
    const [details, setDetails] = useState({
        age: 0,
        gender: 0,
        protien1: 0,
        protien2: 0,
        protien3: 0,
        protien4: 0,
        tumour_stage: 1,
        histology: 0,
        er_status: 0,
        pr_status: 0,
        her2_status: 0,
        surgery_type: 0
    });
    
    let arr = [];
    const ok = async() => {
        let arr2 = [];
        
        Object.entries(details).forEach(([key, value]) => {
            arr2.push(parseFloat(value));
        });
        
        arr = arr2;
        toast.success('Data Saved Successfully');
        console.log(arr.length);
    }

    const handleChange = (e) => {
        e.preventDefault();
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if(arr.length === 0) {
            toast.error('Please confirm before submitting;');
            return ;
        }
        setData('Wait a moment...');
        
        axios.get('http://localhost:4500/result', {
            params: {ans: arr}
        }).then(data => setData(data.data[2] === 'A' ? 'Alive' : 'Dead'));

        arr = [];
    }
    const {age, gender, protien1, protien2, protien3, protien4, tumour_stage, histology, er_status, pr_status, her2_status, surgery_type } = details;
  return (
    <>
    <h1 className='header-bro'>Breast Cancer Survival Detection</h1>
    <div className='App-header'>
        <h3>Your Age:</h3>
        <input name="age" type="range" min="10" max="90" defaultValue="15" step="1" onChange={handleChange}/> 
        {age}

        <label>
            <h5 style={{display: 'inline', margin: '20px'}}>Gender</h5> 
            <input type="radio" name="gender" value="0" onChange={handleChange}/> Male 
            <input type="radio" name="gender" value="1" onChange={handleChange}/> Female <br/>
        </label>
        
        <label>
            <h5 style={{display: 'inline', margin: '20px'}}>Protien 1</h5> 
            <input name="protien1" type="range" min="-1" max="1" defaultValue="0" step="0.1" onChange={handleChange}/> 
            {protien1}
        </label>
        
        <label>
            <h5 style={{display: 'inline', margin: '20px'}}>Protien 2</h5> 
            <input name="protien2" type="range" min="-1" max="1" defaultValue="0" step="0.1" onChange={handleChange}/> 
            {protien2}
        </label>
        
        <label>
        <h5 style={{display: 'inline', margin: '20px'}}>Protien 3</h5> 
            <input name="protien3" type="range" min="-1" max="1" defaultValue="0" step="0.1" onChange={handleChange}/> 
            {protien3}
        </label>
        
        <label>
            <h5 style={{display: 'inline', margin: '20px'}}>Protien 4</h5> 
            <input name="protien4" type="range" min="-1" max="1" defaultValue="0" step="0.1" onChange={handleChange}/> 
            {protien4}
        </label>
        
        <h3>Tumour Stage</h3>
        <input name="tumour_stage" type="range" min="1" max="3" defaultValue="1" step="1" onChange={handleChange}/> 
        {tumour_stage}

            <h3>Histology</h3>
        <label>
            <label>
                Infiltrating Ductal Carcinoma
            <input type="checkbox" name="histology" value="1" onChange={handleChange}/> <br/>
            </label>

            <label>
                Infiltrating Lobular Carcinoma
                <input type="checkbox" name="histology" value="2" onChange={handleChange}/> <br/>
            </label>
            
            <label>
            Mucinous Carcinoma
            <input type="checkbox" name="histology" value="3" onChange={handleChange}/> <br/>
            </label>
        </label>

        <label>
            <h3>ER Status:</h3>
            <input type="radio" name="er_status" value="1" onChange={handleChange}/> Postive <br/>
            <input type="radio" name="er_status" value="2" onChange={handleChange}/> Negative <br/>
        </label>
        
        <label>
            <h3>PR Status:</h3>
            <input type="radio" name="pr_status" value="1" onChange={handleChange}/> Postive <br/>
            <input type="radio" name="pr_status" value="2" onChange={handleChange}/> Negative <br/>
        </label>
        
        <label>
            <h3>HER2 Status:</h3>
            <input type="radio" name="her2_status" value="1" onChange={handleChange}/> Postive <br/>
            <input type="radio" name="her2_status" value="2" onChange={handleChange}/> Negative <br/>
        </label>
        
            <h3>Surgery Type:</h3>
        <label>
            <input type="radio" name="surgery_type" value="2" onChange={handleChange}/> Modified Radical Mastectomy <br/>
            <input type="radio" name="surgery_type" value="3" onChange={handleChange}/> Lumpectomy <br/>
            <input type="radio" name="surgery_type" value="4" onChange={handleChange}/> Simple Mastectomy <br/>
            <input type="radio" name="surgery_type" value="1" onChange={handleChange}/> Other <br/>
            <br/>
        </label>
        <div className="buttonContainer">
            <button className='buttonBro' onClick={ok}>Confirm </button>
        </div>
        <div className="buttonContainer">
            <button className='buttonBro' onClick={handleSubmit}>Submit </button>
        </div>
        <h1>{data}</h1>
    </div>
    </>
  )
}

export default GetResult;