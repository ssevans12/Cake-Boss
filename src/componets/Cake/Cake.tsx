import { useState } from "react";
import "./Cake.css";
import { Layer } from "../../models/Layer";
import { CakeLayer } from "../CakeLayer/CakeLayer";

export function Cake(prop: {layers: Layer[]}) {
//given an array of layers, displays a cake
    const [layers, setLayers] = useState<Layer[]>([])

    return (
      
        <div className="cakeDisplay">
            <div className="layer">
            {
                prop.layers.map(layer => <CakeLayer layer={layer}></CakeLayer>)
            }
            </div>
        </div>
    )
}