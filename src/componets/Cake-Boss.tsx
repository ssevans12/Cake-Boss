import { useState } from "react";
import { Cake } from "./Cake/Cake";
import { CakeBuilder } from "./CakeBuilder/CakeBuilder";
import { Layer } from "../models/Layer";

export function CakeBoss() {
    
    const [cake, setCake] = useState<Layer[]>([])
    
    return (
    <div>
        <CakeBuilder></CakeBuilder>
        <Cake></Cake>
    </div>
    )
}