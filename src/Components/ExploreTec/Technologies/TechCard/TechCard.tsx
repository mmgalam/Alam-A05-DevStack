import { FaStar } from "react-icons/fa";
import type { TechCardProps } from "../../../../Type/Technologies";
import toast from "react-hot-toast";

export function TecCard({
  technology,
  selectedTech,
  setSelectedTech,
}: TechCardProps) {
  const isSelected = selectedTech.some((tech) => tech.id === technology.id);

  const handleAdd = () => {
    setSelectedTech([...selectedTech, technology]);
    toast.success(`${technology.name} added succesfully!`);
  };

  return (
    <div className="border-2 border-blue-100 p-6 rounded-2xl shadow-2xl">
      <div className="flex justify-between">
        <img src={technology.icon} alt={technology.name} className="w-12" />

        <p className="bg-blue-100 px-6 py-0.5 rounded-3xl border-blue-300 border-2 font-semibold text-blue-500 text-1xl flex items-center">
          {technology.badge}
        </p>
      </div>

      <h3 className="text-4xl font-semibold py-3">{technology.name}</h3>

      <p>{technology.description}</p>

      <div className="flex justify-between py-3">
        <p>{technology.category}</p>
        <p>{technology.difficulty}</p>

        <p className="flex items-center gap-2">
          <FaStar className="text-yellow-500" />
          {technology.rating}
        </p>
      </div>

      <button
        onClick={handleAdd}
        disabled={isSelected}
        className="bg-black rounded text-white mt-2 w-full py-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isSelected ? "Selected" : "Add to Stack"}
      </button>
    </div>
  );
}
