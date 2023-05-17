import { Layer } from "../../models/Layer";
import "./CakeLayer.css";

export function CakeLayer(props: {layer: Layer, index: number}) {
    //displays one layer of the cake. Takes a layer prop for the specification of the layer
    
    return (
        <div>
            <div className="cakelayer" style={{zIndex: props.index, width: props.layer.width * 30 + "px", height: props.layer.height * 20 + "px", backgroundColor: props.layer.color, marginLeft: "auto", marginRight: "auto"}}>
             <div className="top" style={{width: props.layer.width * 30 + "px"}}></div>
             </div>
           
        </div>
    )
}