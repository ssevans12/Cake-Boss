import { useState } from "react";
import { LayerAdd } from "../LayerAdd/LayerAdd";
import { LayerBuilder } from "../LayerBuilder/LayerBuilder";
import { LayerForm } from "../LayerForm/LayerForm";
import { Layer } from "../../models/Layer";



export function CakeBuilder() {

    const [layers, setLayers] = useState<Layer[]>([])
    
    return (
      
        <div>
            <LayerAdd></LayerAdd>
            <LayerBuilder layers={layers}></LayerBuilder>
        </div>
    )
}