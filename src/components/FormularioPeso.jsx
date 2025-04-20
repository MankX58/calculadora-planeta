import React from "react";

export default function FormularioPeso({ peso, setPeso, calcularPesos }) {
  return (
    <form
      onSubmit={calcularPesos}
      className="bg-[#4c3a57] shadow-md rounded-lg p-6 w-full max-w-md"
    >
      <label htmlFor="peso" className="block text-gray-100 font-medium mb-2">
        Ingresa tu peso en kg:
      </label>
      <input
        type="number"
        id="peso"
        name="peso"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        required
        className="text-gray-100 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
      >
        Calcular
      </button>
    </form>
  );
}
