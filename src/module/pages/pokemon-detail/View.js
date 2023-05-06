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
      <div className="fw-bold fs-5 mb-3 text-secondary">
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
                <hr />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3">
          <div className="bg-info text-white rounded fw-semibold">
            Abilities
          </div>
         <div className="mt-3">
         {pokemonDetail?.abilities?.map((element) => (
            <div className="text-success fw-semibold">
              {element?.ability?.name}
              <hr />
            </div>
          ))}
         </div>
        </div>
        <div className="mt-3">
          <div className="bg-info text-white fw-semibold rounded ">Moves</div>
          <div className="d-flex flex-wrap p-3">
            {pokemonDetail?.moves?.map((element) => (
              <div className="bg-success m-2 p-1 rounded text-white">
                {element?.move?.name?.replace("-", " ")}
              </div>
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
        <div className="border border-1 col-lg-5 p-4">
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
