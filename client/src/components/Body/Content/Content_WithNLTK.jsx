import React from 'react'
import { IpynbRenderer } from "react-ipynb-renderer";

// import ipynb file as json
import ipynb4 from "../../../files/TTL_Sankalp_usingNLTK.json";

// Jupyter theme
import "react-ipynb-renderer/dist/styles/monokai.css";

function Content_WithNLTK({serverActive}) {
  return (
    <div className='min-h-[400px] p-2 md:p-8'>
      <IpynbRenderer ipynb={ipynb4} />
    </div>
  )
}

export default Content_WithNLTK