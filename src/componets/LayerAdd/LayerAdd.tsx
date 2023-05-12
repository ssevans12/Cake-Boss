import { Layer } from "../../models/Layer";
import { LayerForm } from "../LayerForm/LayerForm";




export function LayerAdd(props: {onAdd: (newLayer: Layer) => void}) {

        return (
            <div>
                <button onClick={() => {}}>Add</button>
                <LayerForm onAdd={(newLayer: Layer) => {props.onAdd(newLayer)}} onClose={() => {}}></LayerForm>
            </div>
        )
    }