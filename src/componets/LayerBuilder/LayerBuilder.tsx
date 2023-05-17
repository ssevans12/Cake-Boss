import { useState } from "react";
import { Layer } from "../../models/Layer";
import { CakeBuilder } from "../CakeBuilder/CakeBuilder";
import { CakeLayer } from "../CakeLayer/CakeLayer";
import { LayerAdd } from "../LayerAdd/LayerAdd";
import { LayerForm } from "../LayerForm/LayerForm";
import "./LayerBuilder.css"

export function LayerBuilder(prop: { layer: Layer, onDelete: () => void}) {
    const [layers, setLayers] = useState<Layer[]>([]);
    

    return (

    //displays information about a layer. Includes a delete button
        <div className="layerBuilder">
            
            <p>Height: {prop.layer.height}</p>
            <p>Width: {prop.layer.width}</p>
            <p>Color: {prop.layer.color}</p>
            
            <button onClick={() => prop.onDelete()}>Delete</button>
            
            
        </div>
    )
}