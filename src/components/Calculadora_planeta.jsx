import React, { useState } from "react";
import FormularioPeso from "./FormularioPeso";
import Resultados from "./Resultados";

export default function Calculadora_planeta() {
  const [peso, setPeso] = useState("");
  const [resultados, setResultados] = useState({});

  const gravedades = {
    tierra: 1,
    luna: 0.165,
    marte: 0.38,
    jupiter: 2.34,
    saturno: 1.06,
    urano: 0.92,
    neptuno: 1.19,
    pluton: 0.06,
    mercurio: 0.38,
    venus: 0.91,
  };

  const calcularPesos = (e) => {
    e.preventDefault();
    const nuevosResultados = {};
    for (const planeta in gravedades) {
      nuevosResultados[planeta] = (peso * gravedades[planeta]).toFixed(2);
    }
    setResultados(nuevosResultados);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-[#302636] min-h-screen">
      <h1 className="text-3xl font-bold text-purple-600 mb-4">
        Calculadora de Planeta
      </h1>
      <p className="text-gray-100 text-center mb-6">
        Esta calculadora te ayudará a determinar tu peso en diferentes planetas
        del sistema solar.
      </p>
      <FormularioPeso
        peso={peso}
        setPeso={setPeso}
        calcularPesos={calcularPesos}
      />
      <Resultados resultados={resultados} gravedades={gravedades} />
    </div>
  );
}
