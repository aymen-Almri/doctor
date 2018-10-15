import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange , onBtnChange}) => {
    
      return (
        <div className='br3 ph3 pv3 shadow-5 center'>
            <input className=' pa2 wi  pv2 ' type='txt' onChange={onInputChange}/>
            <button className='bg-light-purple grow wb   pv2 dib white link ' 
            onClick={onBtnChange} >Get Info</button>
        </div>
      );

    
}

export default ImageLinkForm;