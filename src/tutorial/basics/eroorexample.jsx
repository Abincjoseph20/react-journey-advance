function EroorExample(){

let count = 0;

let handLeClick=()=>{
    count = count + 1;
    console.log(count);
    
};

return(
    <>
    <h1>{count}</h1>
    <button onClick={handLeClick} type="button">increase</button>
    </>
    );
};

export default EroorExample;