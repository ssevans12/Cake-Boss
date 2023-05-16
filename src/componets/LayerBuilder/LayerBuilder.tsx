import { useState } from "react";
import { Layer } from "../../models/Layer";
import { CakeBuilder } from "../CakeBuilder/CakeBuilder";
import { CakeLayer } from "../CakeLayer/CakeLayer";
import { LayerAdd } from "../LayerAdd/LayerAdd";
import { LayerForm } from "../LayerForm/LayerForm";

export function LayerBuilder(prop: { layer: Layer, onDelete: (layer: Layer) => void}) {
   

    return (

    //displays information about a layer. Includes a delete button
        <div className="layerBuilder">
            
            <p>{prop.layer.height}</p>
            <p>{prop.layer.width}</p>
            <p>{prop.layer.color}</p>
            
            <button onClick={() => prop.onDelete(prop.layer)}>Delete</button>
            
            
        </div>
    )
}