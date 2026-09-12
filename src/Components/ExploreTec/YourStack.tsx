import { IoClose } from "react-icons/io5";
import type { YourStackProps } from "../../Type/Technologies";
import toast from "react-hot-toast";

export function YourStack({
    selectedTech,
    setSelectedTech
}: YourStackProps) {

    const handleRemove = (id: string) => {

        const newStack = selectedTech.filter(
            (technology) => technology.id !== id
        );

        setSelectedTech(newStack);
        toast.error(`Item removed!`);
    };

    const handleRemoveAll = () => {
        setSelectedTech([]);
        toast.error(`Removed All`);
    };

    return (
        <div>

            <h2 className="text-2xl font-semibold">
                Your Stack
            </h2>

            <p>
                {selectedTech.length} Technology Selected
            </p>

            {selectedTech.length === 0 ? (
                <p className="text-gray-400 mt-5 border-2 rounded text-center py-8">
                    Your Stack is Empty
                </p>
            ) : (

                <div>
                    {selectedTech.map((technology) => (

                        <div
                            key={technology.id}
                            className="flex justify-between items-center border p-3 rounded-xl mb-2"
                        >

                            <div className="flex items-center gap-3">

                                <img
                                    src={technology.icon}
                                    alt={technology.name}
                                    className="w-10"
                                />

                                <div>
                                    <p className="font-bold">
                                        {technology.name}
                                    </p>

                                    <small>
                                        {technology.category}
                                    </small>
                                </div>

                            </div>

                            <button
                                className="text-3xl"
                                onClick={() => handleRemove(technology.id)}
                            >
                                <IoClose />
                            </button>

                        </div>

                    ))}

                    <button
                        onClick={handleRemoveAll}
                        className="w-full border border-red-400 text-red-500 py-2 rounded-xl mt-5"
                    >
                        Remove All
                    </button>
                </div>
            )}

        </div>
    );
}