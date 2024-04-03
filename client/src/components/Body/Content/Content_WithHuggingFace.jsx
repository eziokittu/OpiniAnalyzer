import React from 'react'
import { IpynbRenderer } from "react-ipynb-renderer";

// import ipynb file as json
import ipynb2 from "../../../files/TTL_HuggingFace.json";

// Jupyter theme
import "react-ipynb-renderer/dist/styles/monokai.css";

function Content_WithHuggingFace({serverActive}) {
  return (
    <div className='min-h-[400px] p-2 md:p-8'>
      <IpynbRenderer ipynb={ipynb2} />
    </div>
  )
}

export default Content_WithHuggingFace