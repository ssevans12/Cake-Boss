import { useState } from "react";
import { LayerAdd } from "../LayerAdd/LayerAdd";
import { LayerBuilder } from "../LayerBuilder/LayerBuilder";
import { LayerForm } from "../LayerForm/LayerForm";
import { Layer } from "../../models/Layer";
import "./CakeBuilder.css";



export function CakeBuilder() {

    const [layers, setLayers] = useState<Layer[]>([])


    
    return (
      
        <div>
            <LayerAdd onAdd={newLayer => setLayers([...layers, newLayer])}></LayerAdd>
            <LayerBuilder layers={layers} onDelete={() => {}}></LayerBuilder>
        </div>
    )
}