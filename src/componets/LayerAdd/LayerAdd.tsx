import { Layer } from "../../models/Layer";
import { LayerForm } from "../LayerForm/LayerForm";




export function LayerAdd(props: {}) {

        return (
            <div>
                <button onClick={() => {}}>Add</button>
                <LayerForm onAdd={(newLayer: Layer) => (props)}></LayerForm>
            </div>
        )
    }