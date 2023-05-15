import { useState } from "react";
import { LayerAdd } from "../LayerAdd/LayerAdd";
import { LayerBuilder } from "../LayerBuilder/LayerBuilder";
import { Layer } from "../../models/Layer";
import "./CakeBuilder.css";


export function CakeBuilder(props: { onAdd: (newLayer: Layer) => void}, onDelete: (layer: Layer) => void) { 
//is the informational side of the app
    
    const [layers, setLayers] = useState<Layer[]>([]);
    
   
    
    return (
      
        <div className="cakeBuilder">
            <LayerAdd onAdd={(newLayer: Layer) => {props.onAdd(newLayer)}}></LayerAdd>
            <LayerBuilder layers={layers} onDelete={() => {}}></LayerBuilder>
        </div>
    )
}