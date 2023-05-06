import { api } from "../../util";

const habitatApi = {
  getHabitats: "/pokemon-habitat",
};

export const getHabitatsApi = (payload) => {
  return api.get(habitatApi.getHabitats);
};

export const getHabitatDetailApi = (payload) => {
  const { name } = payload;
  return api.get(`${habitatApi.getHabitats}/${name}`);
};
