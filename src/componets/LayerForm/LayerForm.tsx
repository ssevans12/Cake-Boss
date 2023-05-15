import { Layer } from "../../models/Layer";
import { useState } from "react";


export function LayerForm(props: { onAdd: (newLayer: Layer) => void, onClose: () => void }) {

    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [color, setColor] = useState('');
    const [yellow, setYellow] = useState('yellow');
    const [pink, setPink] = useState('pink')
    const [chocolate, setChocolate] = useState('chocolate')
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
                    color: color
                }

                props.onAdd(newLayer);
                props.onClose()
            }}
            >

                <label>Height</label>
                <input value={height} onChange={e => setHeight(e.target.value)} type="number" min="0.5" max="10" step=".5" required></input>

                <label>Width</label>
                <input value={width} onChange={e => setWidth(e.target.value)} type="number" min="1" max="10" required></input>

                <label>Color</label>
                <select id="Color" value={color} onChange={handleChange} required>
                    <option value="">Select a flavor</option>
                    <option value={yellow} onClick={() => setYellow}>Yellow</option>
                    <option value={pink} onClick={() => setPink}>Pink</option>
                    <option value={chocolate} onClick={() => setChocolate}>Chocolate</option>
                </select>
                <button >Save</button>
                <button onClick={() => props.onClose()}>Cancel</button>
            </form>
        </div>
    )
}