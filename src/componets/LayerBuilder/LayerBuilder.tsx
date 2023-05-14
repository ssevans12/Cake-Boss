import { Layer } from "../../models/Layer";
import { CakeLayer } from "../CakeLayer/CakeLayer";

export function LayerBuilder(prop: {layers: Layer[], onDelete: (layer: Layer) => void}) {
    return (

    //displays information about a layer. Includes a delete button
        <div className="layerBuilder">
            {
                prop.layers.map(layer => <CakeLayer layer={layer}></CakeLayer>)
            }
            <div className="cakeInfo">
            <p></p>
            </div>
            <button>Delete</button>
        </div>
    )
}