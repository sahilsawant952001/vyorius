import React from "react";
import { useParams } from "react-router-dom"

const style = {
    fontSize:"55px",
    textAlign:"center",
    color:"#ff914d",
    margin:"100px"
}

function Page()
{
    const params = useParams();
    const data = params.page;
    console.log(data);

    return <div>
                <h1 style={style}>{data}</h1>
           </div>
}

export default Page;