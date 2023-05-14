import { Layer } from "../../models/Layer";
import "./CakeLayer.css";

export function CakeLayer(props: {layer: Layer}) {
    //displays one layer of the cake. Takes a layer prop for the specification of the layer
    
    return (
        <div>
            <div className="cakelayer" style={{width: props.layer.width, height: props.layer.height, backgroundColor: props.layer.color}}>
            {/* Height: {props.layer.height}
            Width: {props.layer.width}
            Color: {props.layer.color} */}
            </div>


        </div>
    )
}