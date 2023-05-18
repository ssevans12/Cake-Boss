import { Layer } from "../../models/Layer";
import { useState } from "react";


export function LayerForm(props: { onAdd: (newLayer: Layer) => void, onClose: () => void }) {

    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [color, setColor] = useState('');
    const [yellow, setYellow] = useState('Yellow');
    const [pink, setPink] = useState('Pink')
    const [chocolate, setChocolate] = useState('Chocolate')
    const handleChange = (event: any) => {
        setColor(event.target.value);
    }


    return (
        //includes inputs to customize a layer. Has a save and cancel buttons. When cancel is clicked, LayerAdd just hides the form.
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                const newLayer = {
                    height: +height,
                    width: +width,
                    color: color,
    
                }

                props.onAdd(newLayer);
                props.onClose()
            }}
            >

                <label>Height: </label>
                <input style={{margin: 5 +"px"}} value={height} onChange={e => setHeight(e.target.value)} type="number" min="0.5" max="10" step=".5" required></input>

                <label>Width: </label>
                <input style={{margin: 5 +"px"}} value={width} onChange={e => setWidth(e.target.value)} type="number" min="1" max="10" required></input>

                <label>Color: </label>
                <select style={{margin: 5 +"px"}} id="Color" value={color} onChange={handleChange} required>
                    <option value="">Select a color</option>
                    <option value={yellow} onClick={() => setYellow}>Yellow</option>
                    <option value={pink} onClick={() => setPink}>Pink</option>
                    <option value={chocolate} onClick={() => setChocolate}>Chocolate</option>
                </select>
                <button style={{padding: 5 + "px", width: 70+"px", margin: 5 + "px"}}>Save</button>
                <button style={{padding: 5 + "px", width: 70+"px", margin: 5 + "px"}} onClick={() => props.onClose()}>Cancel</button>
            </form>
        </div>
    )
}