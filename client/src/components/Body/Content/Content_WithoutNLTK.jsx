import React from 'react';
import { IpynbRenderer } from "react-ipynb-renderer";

// import ipynb file as json
import ipynb3 from "../../../files/TTL_Anish_WithoutNLTK.json";

// Jupyter theme
import "react-ipynb-renderer/dist/styles/monokai.css";

function Content_WithoutNLTK({serverActive}) {
  return (
    <div className='min-h-[400px] p-2 md:p-8'>
      <IpynbRenderer ipynb={ipynb3} />
    </div>
  )
}

export default Content_WithoutNLTK