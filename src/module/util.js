import axios from "axios";

export const BASE_URL = 'https://pokeapi.co/api/v2/';
export const api = axios.create({
 timeout: 35000,
 headers:{
  'X-Requested-With':'XMLHttpRequest',
  'Cache-Control':'no-store'
 },
 baseURL: BASE_URL
})

export const PAGES = {
 Home:'/home',
 PokemonDetail:'/pokemon-detail'
}