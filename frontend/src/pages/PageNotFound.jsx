import React from 'react';
import p404 from '../assets/404.webp'
const PageNotFound = () => {
  return (
    <>
    <div>
        <img src={p404} alt="404" style={{width:'100%',height:'100vh'}}/>
    </div>
    </>
  )
}

export default PageNotFound