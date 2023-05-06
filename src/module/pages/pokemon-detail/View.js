import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function PokemonDetail({ getPokemonDetail, pokemon }) {
  const { name } = useParams();
  const pokemonDetail = pokemon.getPokemonDetailResponse;

  // Fetch Pokemon Detail
  useEffect(() => {
    getPokemonDetail({
      name,
    });
  }, [name]);

  const header = () => {
    return (
      <div className="fw-bold fs-5 text-secondary">
        {name?.toUpperCase()}
        <div className="fs-6 fw-normal text-start mt-3">
          <li>Height: {pokemonDetail?.height}</li>
          <li>Weight: {pokemonDetail?.weight}</li>
          <li>Base Experience: {pokemonDetail?.base_experience}</li>
        </div>
      </div>
    );
  };

  const description = () => {
    return (
      <div className="">
        <div className="mt-3">
          <div className="bg-info fw-semibold text-white rounded">Stats</div>
          <div className="justify-content-center col my-3">
            {pokemonDetail?.stats?.map((element) => (
              <div className="text-start">
                {element?.stat?.name?.replace("-", " ")} : {element?.base_stat}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3">
          <div className="bg-info text-white rounded fw-semibold">
            Abilities
          </div>
          {pokemonDetail?.abilities?.map((element) => (
            <div>
              <li>{element?.ability?.name}</li>
            </div>
          ))}
        </div>
        <div className="mt-3">
          <div className="bg-info text-white fw-semibold rounded ">Moves</div>
          <div className="d-flex flex-wrap">
            {pokemonDetail?.moves?.map((element) => (
              <li className="" style={{ marginRight: 10 }}>
                {element?.move?.name?.replace("-", " ")}
              </li>
            ))}
          </div>
        </div>
      </div>
    ); 
  };
  return (
    <div className="container">
      <div className="fs-1 fw-bold text-primary my-5">Pokemon Detail</div>
      <div className="row justify-content-center mt-5">
        <div className="border border-1 col-lg-5 p-3">
          {header()}
          <img
            width={300}
            height={300}
            src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
          />
          {description()}
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
