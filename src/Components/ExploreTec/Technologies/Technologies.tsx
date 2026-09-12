import { use } from "react";
import type { Itechnology, TechnologiesProps } from "../../../Type/Technologies";
import { TecCard } from "./TechCard/TechCard";


export default function Technologies({ technologiesPromise, selectedTech, setSelectedTech }:TechnologiesProps) {
    
    const Technologies = use(technologiesPromise);

    return (
        <div className="grid grid-cols-3 gap-5">
            {
                Technologies.map((technology:Itechnology, ind:number)=> {
                    
                    return (
                        <TecCard 
                            key={ind} 
                            technology={technology}
                            selectedTech={selectedTech}
                            setSelectedTech={setSelectedTech}
                        >

                        </TecCard>
                    )
                })
            }
        </div>
    )
}