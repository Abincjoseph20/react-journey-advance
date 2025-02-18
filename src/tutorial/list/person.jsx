import React from "react";

export function Person({name,images,nickName}){
    // const img = images && images[0] && images[0].small && images[0].small.url;
    const img = images ?.[0]?.small?.url;
    return <div>
        <h1>{name}</h1>
        <h2>{nickName}</h2>
        <img src={img} alt={name} style={{width:'50px'}}/>
    </div>;
}