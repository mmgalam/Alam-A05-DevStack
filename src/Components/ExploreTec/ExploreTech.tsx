
import { useState } from "react";
import { type Itechnology, type ExploreTecProps } from "../../Type/Technologies";
import Technologies from "./Technologies/Technologies";
import { YourStack } from "./YourStack";



export function ExploreTech({ technologiesPromise }:ExploreTecProps){

    const [selectedTech, setSelectedTech] = useState<Itechnology[]>([]);

    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold">Explore the <span className="gradient-text">Technologies</span></h2>
            <p>Pick one technology per category to build your ideal stack.</p>
            
            <div className="grid grid-cols-12 gap-10 py-8">
                <div className="col-span-10">
                    <Technologies 
                        technologiesPromise={technologiesPromise} selectedTech={selectedTech}
                        setSelectedTech={setSelectedTech}
                    ></Technologies>
                </div>
                <div className="col-span-2">
                    <YourStack selectedTech={selectedTech}
                        setSelectedTech={setSelectedTech}></YourStack>
                </div>
            </div>
        </div>
    )
}