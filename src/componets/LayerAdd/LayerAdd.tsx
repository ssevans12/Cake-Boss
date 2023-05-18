import  Modal  from "react-modal";
import { Layer } from "../../models/Layer";
import { LayerForm } from "../LayerForm/LayerForm";
import { useState } from "react";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: "40px"
        
    },
    overlay: {zIndex: 1000}
};

Modal.setAppElement('#root')


export function LayerAdd(props: { onAdd: (newLayer: Layer) => void}) {
//a button that, when clicked, displays a LayerForm to add a layer
    const [modalOpen, setIsOpen] = useState(false);
    const [layer, setLayer] = useState<Layer[]>([])

    function closeModal() {
        setIsOpen(false)
    }    

    return (
            <div>
                <button onClick={() => setIsOpen(true)} style={{width: 100 + "%", backgroundColor: "pink", padding: 7 + "px"}}>Add</button>
                
                <Modal isOpen={modalOpen} onRequestClose={closeModal} style={customStyles}>
                    <LayerForm onAdd={(newLayer: Layer) => {props.onAdd(newLayer)}} onClose={closeModal}></LayerForm>
                </Modal>
            </div>
        )
    }