import { Layer } from "../../models/Layer";

export function CakeLayer(props: {layer: Layer}) {
    
    
    return (
        <div>
            Height: {props.layer.height}
            Width: {props.layer.width}
            Color: {props.layer.color}
        </div>
    )
}