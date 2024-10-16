"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Formulario() {
  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCity, setSelectedCity] = useState("0");

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
      .then((response) => {
        setUfs(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        setCities(response.data);
      });
  }, [selectedUf]);

  function handleSelectedUf(event) {
    const uf = event.target.value;
    setSelectedUf(uf);
  }

  function handleSelectedCity(event) {
    const city = event.target.value;
    setSelectedCity(city);
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-32 bg-black">
      <h1 className="font-semibold mb-12 text-center text-white">
        Torne-se um King e transforme sua jornada!
      </h1>

      <form className="bg-gray-700 p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
          <label className="block text-white mb-1">Nome completo</label>
          <input
            type="text"
            className="w-full p-2 rounded border border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite seu nome"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 rounded border border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite seu email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-1">Telefone</label>
          <input
            type="text"
            className="w-full p-2 rounded border border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite seu telefone"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-1">Estado</label>
          <select
            name="uf"
            id="uf"
            onChange={handleSelectedUf}
            className="w-full p-2 rounded border border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite seu telefone"
          >
            <option value="0">Selecione o seu estado</option>
            {ufs.map((uf) => (
              <option key={uf.id} value={uf.sigla}>
                {uf.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-white mb-1">Cidade</label>
          <select
            name="cities"
            id="cities"
            value={selectedCity}
            onChange={handleSelectedCity}
            className="w-full p-2 rounded border border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite seu telefone"
          >
            <option value="0">Selecione a sua cidade</option>
            {cities.map((city) => (
              <option key={city.id} value={city.nome}>
                {city.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            className="mr-2 focus:ring-2 focus:ring-blue-500"
          />
          <label className="text-white">Aceito os termos de serviço</label>
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-white text-white hover:text-gray-800 font-bold py-2 rounded transition duration-300"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
