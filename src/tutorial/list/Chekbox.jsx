import { useState } from "react"

const FrameWorks = ['react','anagualar','view']


export const Chekbox = () => {
    const [shipping,setShipping] = useState(false);
    const [framework,setFramework] = useState('react');

    const handleShipping = (e)=>{
        console.log(e.target.checked)
        setShipping(e.target.checked)
    }
    const handleFrameWork = (e)=>{
        console.log(e.target.value)
        setShipping(e.target.value)
    }

  return (
    <div>
        <form action="">
            <h3>other input</h3>
            <div className="" style={{ textAlign:'left'}}>
                <label htmlFor="">free ship</label>
                <input type="checkbox" name="shipping" id="shipping" checked={shipping} onChange={handleShipping}/>
            </div>

            <div className="" style={{ textAlign:'left'}}>
            <label htmlFor="">framework</label>
            <select name="" id="" value={framework} onChange={handleFrameWork}>
                {FrameWorks.map((framework)=>{
                    return <option key={framework}>{framework}</option>
                })}
            </select>
            </div>
            <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default Chekbox