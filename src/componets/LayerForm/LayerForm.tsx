import { Layer } from "../../models/Layer";
import { useState } from "react";


export function LayerForm(props: {onAdd: (newLayer: Layer) => void, onClose: () => void}) {

    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [color, setColor] = useState('');
    const [yellow, setYellow] = useState('');



    return (
        //includes inputs to customize a layer. Has a save and cancel buttons. When cancel is clicked, LayerAdd just hides the form.
        <div>
            <form onSubmit={e => {e.preventDefault();
            const newLayer = {
                height: +height,
                width: +width,
                color: color
            }

            props.onAdd(newLayer)
        }}
            >

               <label>Height</label>
               <input value={height} onChange={e => setHeight(e.target.value)} type="number"></input>

               <label>Width</label>
               <input value={width} onChange={e => setWidth(e.target.value)} type="number"></input>

               <label>Color</label>
               <select id="Color">
               <option value={yellow} onChange={e => setYellow}>Yellow</option>
               <option value="Pink">Pink</option>
               <option value="Chocolate">Chocolate</option>
               </select>
               <button>Save</button>
               <button onClick={() => props.onClose()}>Cancel</button>
            </form>
        </div>
    )
}