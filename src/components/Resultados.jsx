import React from "react";

export default function Resultados({ resultados, gravedades }) {
  return (
    <div className="mt-6 w-full max-w-md">
      <h2 className="text-2xl font-semibold text-gray-100 mb-4">Resultados</h2>
      <div className="bg-[#4c3a57] shadow-md rounded-lg p-4 h-[15rem] overflow-y-auto max-md:h-[12rem]">
        {Object.keys(gravedades).map((planeta) => (
          <p
            key={planeta}
            className="text-gray-100 border-b last:border-b-0 py-2"
          >
            Peso en {planeta.charAt(0).toUpperCase() + planeta.slice(1)}:{" "}
            {resultados[planeta] || 0} kg
          </p>
        ))}
      </div>
    </div>
  );
}
