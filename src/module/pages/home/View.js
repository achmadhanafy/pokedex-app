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
  const [filterHabitat, setFilterHabitat] = useState(null);
  const [search, setSearch] = useState("");
  const [pagination, setPagination] = useState({
    offset: 0,
    limit: 20,
  });
  const [submitSearch, setSubmitSearch] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    getHabitats();
  }, []);

  useEffect(() => {
    if (filterHabitat) {
      getHabitatDetail({
        name: filterHabitat,
      });
    }
  }, [filterHabitat]);

  useEffect(() => {
    if (!search?.length) {
      getPokemons(pagination);
      setSubmitSearch(null);
    }
  }, [pagination, search]);

  const pokemonData = useMemo(() => {
    const allPokemons = pokemon.getPokemonsResponse?.results;
    const pokemonByHabitat = habitat.getHabitatDetailResponse?.pokemon_species;
    const pokemonBySearch = () =>
      pokemon.getPokemonsResponse?.results?.filter((element) => {
        return element?.name?.includes(submitSearch);
      });
    if (submitSearch) {
      return pokemonBySearch();
    }

    if (pokemonByHabitat) {
      return pokemonByHabitat;
    }

    if (allPokemons) {
      return allPokemons;
    }
  }, [
    pokemon.getPokemonsResponse?.results,
    habitat.getHabitatDetailResponse?.pokemon_species,
    submitSearch,
  ]);

  return (
    <div className="container">
      <div className="">
        <div className="mt-5 fs-1 fw-bold bg-blue text-primary">
          Pokedex App
        </div>{" "}
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
            {habitat.getHabitatsResponse?.results?.map((element) => (
              <Dropdown.Item eventKey={element?.name}>
                {element?.name}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
      </div>
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
                onClick={()=> navigate(`${PAGES.PokemonDetail}/${element?.name}`)}
              >
                Detail
              </Button>
            </Cardx>
          </div>
        ))}
      </div>
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
