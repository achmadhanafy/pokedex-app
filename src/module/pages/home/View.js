import React, { useEffect, useMemo, useState } from "react";
import {
  Button,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
} from "react-bootstrap";
import Cardx from "../../../components/Cardx";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../util";

function Home({
  pokemon,
  getPokemons,
  getHabitats,
  habitat,
  getHabitatDetail,
}) {
  // HOOKS
  const [filterHabitat, setFilterHabitat] = useState(null);
  const [search, setSearch] = useState("");
  const [pagination, setPagination] = useState({
    offset: 0,
    limit: 20,
  });
  const [submitSearch, setSubmitSearch] = useState(null);
  const navigate = useNavigate();

  // Fetch Habitats
  useEffect(() => {
    getHabitats();
  }, []);

  // Fetch Pokemon By Habitat
  useEffect(() => {
    if (filterHabitat) {
      getHabitatDetail({
        name: filterHabitat,
      });
    }
  }, [filterHabitat]);

  // Handler Search Bar
  useEffect(() => {
    if (!search?.length) {
      getPokemons(pagination);
      setSubmitSearch(null);
    }
  }, [pagination, search]);

  // Pokemon Data Memo
  const pokemonData = useMemo(() => {
    const allPokemons = pokemon.getPokemonsResponse?.results;
    const pokemonByHabitat = habitat.getHabitatDetailResponse?.pokemon_species;
    const pokemonBySearch = () =>
      pokemon.getPokemonsResponse?.results?.filter((element) => {
        return element?.name?.includes(submitSearch?.toLowerCase());
      });
    if (submitSearch) {
      return pokemonBySearch();
    }

    if (pokemonByHabitat && filterHabitat) {
      return pokemonByHabitat;
    }

    if (allPokemons) {
      return allPokemons;
    }
  }, [
    pokemon.getPokemonsResponse?.results,
    habitat.getHabitatDetailResponse?.pokemon_species,
    submitSearch,
    filterHabitat
  ]);
  console.log('test')
  const filter = () => {
    return (
      <div className="d-flex mt-5 justify-content-between">
        <InputGroup className="mb-3" style={{ maxWidth: 500 }}>
          <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Pokemon Name"
            aria-label="Pokemon username"
          />
          <Button
            onClick={() => {
              setSubmitSearch(search);
              if (!submitSearch) {
                getPokemons({
                  limit: 1500,
                });
              }
            }}
            variant="outline-secondary"
            id="button-addon2"
          >
            Search
          </Button>
        </InputGroup>
        <DropdownButton
          onSelect={(e) => setFilterHabitat(e)}
          title={filterHabitat ? filterHabitat : "Habitat"}
        >
           <Dropdown.Item eventKey={null}>
              all
            </Dropdown.Item>
          {habitat.getHabitatsResponse?.results?.map((element) => (
            <Dropdown.Item eventKey={element?.name}>
              {element?.name}
            </Dropdown.Item>
          ))}
          
        </DropdownButton>
      </div>
    );
  };

  const main = () => {
    return (
      <div className="row p-5">
        {pokemonData?.map((element) => (
          <div className="col col-lg-3 pb-3">
            <Cardx
              img={`https://img.pokemondb.net/artwork/large/${element?.name}.jpg`}
              title={element?.name.toUpperCase()}
            >
              <Button
                className="mt-3"
                variant="outline-primary"
                id="button-addon2"
                onClick={() =>
                  navigate(`${PAGES.PokemonDetail}/${element?.name}`)
                }
              >
                Detail
              </Button>
            </Cardx>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="">
        <div className="mt-5 fs-1 fw-bold bg-blue text-primary">
          Pokedex App
        </div>{" "}
        {filter()}
      </div>
      {main()}
      <Button
        onClick={() =>
          setPagination({
            ...pagination,
            limit: pagination.limit + 20,
          })
        }
        className="mb-3"
        variant="primary"
        id="button-addon2"
      >
        Load More
      </Button>
    </div>
  );
}

export default Home;
