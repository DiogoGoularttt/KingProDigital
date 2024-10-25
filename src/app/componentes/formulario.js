"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";

export default function Formulario() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedUf, setSelectedUf] = useState("0");

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
      .then((response) => {
        setUfs(response.data);
      });
  }, []);

  useEffect(() => {
    if (selectedUf !== "0") {
      axios
        .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
        .then((response) => {
          setCities(response.data);
          setCity(""); // Resetando a cidade ao selecionar um novo estado
        });
    } else {
      setCities([]); // Limpa as cidades se nenhuma UF for selecionada
      setCity(""); // Limpa a cidade
    }
  }, [selectedUf]);

  function handleSelectedUf(event) {
    const uf = event.target.value;
    setSelectedUf(uf);
    setState(uf); // Assume que o estado é a UF
  }

  function handleSelectedCity(event) {
    setCity(event.target.value);
  }

  function sendEmail(e) {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      state === "" ||
      city === ""
    ) {
      alert("Preencha todos os campos");
      return;
    }
    const templateParams = {
      from_name: name,
      email: email,
      phone: phone,
      state: state,
      city: city,
    };
    emailjs
      .send(
        "service_xkpmp2v",
        "template_owoh6pf",
        templateParams,
        "WcvlDueUa9OoR5LnD"
      )
      .then((response) => {
        console.log("Email enviado!", response.status, response.text);
        setName('');
        setEmail('');
        setPhone('');
        setState('');
        setCity('');
        setSelectedUf("0"); // Resetando a UF
      }, (err) => {
        console.log("Erro: ", err)
      });
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-32 bg-black">
      <h1 className="font-semibold mb-12 text-center text-white">
        Torne-se um King e transforme sua jornada!
      </h1>

      <form
        onSubmit={sendEmail}
        className="bg-gray-700 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        {/* Inputs do formulário */}
        <div className="mb-4">
          <label className="block text-white mb-1">Nome completo</label>
          <input
            type="text"
            className="w-full p-2 rounded border border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 rounded border border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-1">Telefone</label>
          <input
            type="text"
            className="w-full p-2 rounded border border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite seu telefone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-1">Estado</label>
          <select
            name="uf"
            id="uf"
            className="w-full p-2 rounded border border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSelectedUf}
            value={selectedUf}
            required
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
            value={city}
            className="w-full p-2 rounded border border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSelectedCity}
            required
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
            required
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
