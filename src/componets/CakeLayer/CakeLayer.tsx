import { Layer } from "../../models/Layer";
import "./CakeLayer.css";

export function CakeLayer(props: {layer: Layer}) {
    //displays one layer of the cake. Takes a layer prop for the specification of the layer
    
    return (
        <div>
            <div className="cakelayer" style={{width: props.layer.width * 10 + "vw", height: props.layer.height * 2 + "vh", backgroundColor: props.layer.color, marginLeft: "auto", marginRight: "auto"}}>
            </div>


        </div>
    )
}