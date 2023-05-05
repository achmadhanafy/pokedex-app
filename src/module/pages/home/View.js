import React, { useEffect, useState } from "react";
import {
  Button,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
} from "react-bootstrap";
import Cardx from "../../../components/Cardx";

function Home({ pokemon, getPokemons }) {
  const [habitat, setHabitat] = useState(null);
  const [search, setSearch] = useState("");
  const [pagination, setPagination] = useState({
    offset: 0,
    limit: 20,
  });

  useEffect(() => {
    getPokemons(pagination);
  }, [pagination]);

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
            <Button variant="outline-secondary" id="button-addon2">
              Search
            </Button>
          </InputGroup>
          <DropdownButton title="Habitat">
            <Dropdown.Item eventKey={1}>Action</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <div className="row p-5">
        {pokemon.getPokemonsResponse?.results?.map((element) => (
          <div className="col col-lg-3 pb-3">
            <Cardx
              img={`https://img.pokemondb.net/artwork/large/${element?.name}.jpg`}
              title={element?.name.toUpperCase()}
            >
              <Button
                className="mt-3"
                variant="outline-primary"
                id="button-addon2"
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
