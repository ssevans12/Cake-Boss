import { Layer } from "../../models/Layer";
import { LayerForm } from "../LayerForm/LayerForm";




export function LayerAdd(props: {onAdd: (newLayer: Layer) => void}) {
//a button that, when clicked, displays a LayerForm to add a layer
        return (
            <div>
                <button onClick={() => {}}>Add</button>
                <LayerForm onAdd={(newLayer: Layer) => {props.onAdd(newLayer)}} onClose={() => {}}></LayerForm>
            </div>
        )
    }