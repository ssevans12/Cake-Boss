import { useState } from "react";
import { Cake } from "./Cake/Cake";
import { CakeBuilder } from "./CakeBuilder/CakeBuilder";
import { Layer } from "../models/Layer";

export function CakeBoss() {

    
    const [cake, setCake] = useState<Layer[]>([

        {
          height: 4,
          width: 7,
          color: "yellow"
        }
    ]);
    console.log(cake)
    return (
    <div>
        <CakeBuilder></CakeBuilder>
        <Cake></Cake>
    </div>
    )
}