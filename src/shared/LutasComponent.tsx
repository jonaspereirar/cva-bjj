
import { useEffect, useState } from 'react';

interface Atleta {
  nome: string;
  faixa: string;
  peso: string;
  categoria: string;
  sexo: string;
  equipe: string;
}

interface Luta {
  chave: string;
  atletas: Atleta[];
}

interface Props {
  atletas: Atleta[];
}

function LutasComponent({ atletas }: { atletas: Atleta[] }) {
  const [nome, setNome] = useState<string | undefined>(undefined);
  const [faixa, setFaixa] = useState<string | undefined>(undefined);
  const [peso, setPeso] = useState<string | undefined>(undefined);
  const [categoria, setCategoria] = useState<string | undefined>(undefined);
  const [sexo, setSexo] = useState<string | undefined>(undefined);
  const [equipe, setEquipe] = useState<string | undefined>(undefined);
  const [lutas, setLutas] = useState<Luta[]>([]);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const atletasFiltrados = atletas.filter((atleta) => {
      // const nomeValido = nome === undefined || nome === '' || atleta.nome.toLowerCase().includes(nome.toLowerCase());
      const faixaValida = faixa === undefined || faixa === '' || atleta.faixa === faixa;
      const pesoValido = peso === undefined || peso === '' || atleta.peso === peso;
      const categoriaValida = categoria === undefined || categoria === '' || atleta.categoria === categoria;
      const sexoValida = sexo === undefined || sexo === '' || atleta.sexo === sexo;
      const equipeValida = equipe === undefined || equipe === '' || atleta.equipe === equipe;
      return faixaValida && pesoValido && categoriaValida && sexoValida && equipeValida;
    });

    

    const lutasPorChave = atletasFiltrados.reduce((acc, atleta) => {
      const chave = `${atleta.faixa}-${atleta.peso}-${atleta.categoria}-${atleta.sexo}`;
      if (!acc[chave]) {
        acc[chave] = { chave, atletas: [] };
      }
      acc[chave].atletas.push(atleta);
      return acc;
    }, {} as { [chave: string]: Luta });

    const lutasOrdenadas = Object.values(lutasPorChave).sort((a, b) => {
      const aPeso = a.chave.split('-')[1];
      const bPeso = b.chave.split('-')[1];
      return Number(aPeso) - Number(bPeso);
    });

    setLutas(lutasOrdenadas);
    setShowButton(false);
  }, [atletas, faixa, peso, categoria, sexo, equipe]);

  const handleShowLutas = () => {
    setShowButton(true);
  }

  return (
    <>
      <div>
        <label>
          Faixa:
          <select className="px-4 py-2 w-full border rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-600 
              bg-gray-100 text-gray-700 placeholder-gray-500 animate-pulse"
              value={faixa} onChange={(e) => setFaixa(e.target.value)}>
            <option value=""></option>
            <option value="Branca">Branca</option>
            <option value="Azul">Azul</option>
            <option value="Roxa">Roxa</option>
            <option value="Marrom">Marrom</option>
            <option value="Preta">Preta</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Peso:
          <select className="px-4 py-2 w-full border rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-600 
              bg-gray-100 text-gray-700 placeholder-gray-500 animate-pulse"
              value={peso} onChange={(e) => setPeso(e.target.value)}>
            <option value={""}></option>
            <option value={"Galo"}>Até 57,50 (Galo)</option>
            <option value={"Pluma"}>Até 64 (Pluma)</option>
            <option value={"Pena"}>Até 70 (Pena)</option>
            <option value={"Leve"}>Até 76 (Leve)</option>
            <option value={"Médio"}>Até 74 (Médio)</option>
            <option value={"Meio-Pesado"}>Até 88,30 (Meio-Pesado)</option>
            <option value={"Pesado"}>Até 94,30 (Pesado)</option>
            <option value={"Super-Pesado"}>Até 100,50 (Super-Pesado)</option>
            <option value={"Pesadíssimo"}>Acima de 100,50 (Pesadíssimo)</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Categoria:
          <select className="px-4 py-2 w-full border rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-600 
              bg-gray-100 text-gray-700 placeholder-gray-500 animate-pulse"
              value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option value=""></option>
            <option value="Adulto">Adulto</option>
            <option value="Master 1">Master 1</option>
            <option value="Master 2">Master 2</option>
            <option value="Master 3">Master 3</option>
            <option value="Master 4">Master 4</option>
            <option value="Master 5">Master 5</option>
            <option value="Master 6">Master 6</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Sexo:
          <select className="px-4 py-2 w-full border rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-600 
              bg-gray-100 text-gray-700 placeholder-gray-500 animate-pulse"
              value={sexo} onChange={(e) => setSexo(e.target.value)}>
            <option value=""></option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </select>
        </label>
      </div>
      <div>
  {showButton ? (
    <div className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 ml-0 relative">
        {lutas.map((luta, index) => (
          <ul key={index}>
            {luta.atletas.slice(0, Math.ceil(luta.atletas.length / 2)).map((atleta, index) => (
              <li key={index}>
                <div className="w-64 h-12 border-2 border-gray-400 rounded-lg flex flex-col justify-center items-center bg-gray-100 shadow-md rounded-lg p-4 mt-4 mb-1">
                <span className="text-sm text-gray-500">{atleta.equipe}</span>
                <span className="text-lg font-bold">{atleta.nome}</span>
                </div>
              </li>
            ))}
            {/* {luta.atletas.length > 2 ? (
              <div className="top-0 mt-10 ml-64 absolute">
              <div className="col-start-2">
                <li key={luta.atletas.length}>
                  <div className="w-64 h-12 border-2 border-gray-400 rounded-lg flex flex-col justify-center items-center bg-gray-100 shadow-md rounded-lg p-4 mt-2 mb-1">
                    <span className="text-sm font-medium">1º Resultado</span>
                  </div>
                </li>
              </div>
            </div>
            
            ) : null} */}
          </ul>
        ))}
      </div>

      <div className="grid grid-cols-1 ml-0 relative">
        {lutas.map((luta, index) => (
          <ul key={index}>
            {luta.atletas.slice(Math.ceil(luta.atletas.length / 2), luta.atletas.length).map((atleta, index) => (
              <li key={index}>
                <div className="w-64 h-12 border-2 border-gray-400 rounded-lg flex flex-col justify-center items-center bg-gray-100 shadow-md rounded-lg p-4 mt-4 mb-1">
                <span className="text-sm text-gray-500">{atleta.equipe}</span>
                <span className="text-lg font-bold">{atleta.nome}</span>
                </div>
              </li>
            ))}
            {/* {luta.atletas.length > 2 ? (
              <div className="top-0 mt-10 ml-64 absolute">
                <li key={luta.atletas.length + 1}>
                  <div className="w-64 h-12 border-2 border-gray-400 rounded-lg flex flex-col justify-center items-center bg-gray-100 shadow-md rounded-lg p-4 mt-2 mb-1 semifinal-box">
                    <span className="text-sm font-medium">2º Resultado</span>
                  </div>
                </li>
              </div>
            ) : null}
            {luta.atletas.length == 1 ? (
            <div className="top-0 relative top-[-64px] ml-96 absolute">
                <div className="w-64 h-12 border-2 border-gray-400 rounded-lg flex flex-col justify-center items-center bg-gray-100 shadow-md rounded-lg p-4 mt-4 mb-1 col-span-2">
                  <span className="text-sm font-medium">Final</span>
                </div>
              </div>
            ) : null}
            {luta.atletas.length == 2 ? (
            <div className="top-0 relative top-[-116px] ml-96 absolute">
                <div className="w-64 h-12 border-2 border-gray-400 rounded-lg flex flex-col justify-center items-center bg-gray-100 shadow-md rounded-lg p-4 mt-4 mb-1 col-span-2">
                  <span className="text-sm font-medium">Final</span>
                </div>
              </div>
            ) : null}
            {luta.atletas.length == 3 ? (
            <div className="top-0 relative top-[-116px] ml-96 absolute">
                <div className="w-64 h-12 border-2 border-gray-400 rounded-lg flex flex-col justify-center items-center bg-gray-100 shadow-md rounded-lg p-4 mt-4 mb-1 col-span-2">
                  <span className="text-sm font-medium">Final</span>
                </div>
              </div>
            ) : null}
            {luta.atletas.length == 4 ? (
            <div className="top-0 ml-96 relative top-[-164px] absolute">
                <div className="w-64 h-12 border-2 border-gray-400 rounded-lg flex flex-col justify-center items-center bg-gray-100 shadow-md rounded-lg p-4 mt-4 mb-1 col-span-2">
                  <span className="text-sm font-medium">Final</span>
                </div>
              </div>
            ) : null} */}
          </ul>

        ))}
      </div>
    </div>

  ) : (
          <button 
            className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white mt-10 "
            disabled={!nome && !faixa && !peso && !categoria && !sexo} 
            onClick={() => setShowButton(true)}>
            Mostrar Chave
          </button>
        )}
      </div>
    </>
  );
};

export default LutasComponent;

