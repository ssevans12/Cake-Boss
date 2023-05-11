import { Layer } from "../../models/Layer";
import { CakeLayer } from "../CakeLayer/CakeLayer";

export function LayerBuilder(prop: {layers: Layer[]}) {
    return (
        <div>
            {
                prop.layers.map(layer => <CakeLayer layer={layer}></CakeLayer>)
            }
            
            <button>Delete</button>
        </div>
    )
}