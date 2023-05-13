import { Layer } from "../../models/Layer";

export function CakeLayer(props: {layer: Layer}) {
    //displays one layer of the cake. Takes a layer prop for the specification of the layer
    
    return (
        <div>
            <div className="cakelayer">
                
            </div>

            {/* Height: {props.layer.height}
            Width: {props.layer.width}
            Color: {props.layer.color} */}
        </div>
    )
}