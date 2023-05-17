import { useState } from "react";
import { LayerAdd } from "../LayerAdd/LayerAdd";
import { LayerBuilder } from "../LayerBuilder/LayerBuilder";
import { Layer } from "../../models/Layer";
import "./CakeBuilder.css";


export function CakeBuilder(props: { layer: Layer[], onAdd: (newLayer: Layer) => void, onDelete: (i: number) => void}) { 
//is the informational side of the app
    
    const [layers, setLayers] = useState<Layer[]>([]);
    
    function handleDelete(layer: number) {
        setLayers(layers => 
            [...layers.slice(0, layer), ...layers.slice(layer + 1)])
    }
    
    return (
      
        <div className="cakeBuilder">
            <LayerAdd onAdd={(newLayer: Layer) => {props.onAdd(newLayer)}}></LayerAdd>
            {
                props.layer.map((layer, i) => <LayerBuilder key={i} layer={layer} onDelete={() => {props.onDelete(i)}}></LayerBuilder>)
            }
        </div>
    )
}