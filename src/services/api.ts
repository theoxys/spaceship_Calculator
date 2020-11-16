import axios from 'axios';

interface ShipData {
    MGLT: number;
    cargo_capacity: number;
    name: string;
    model: string;
    passengers: number;
    manufacturer: string;
    consumables: string;
    distance: number;
}

const api = axios.create({
  baseURL: 'https://swapi.dev/api',
});

export const getAllShips = async (page = 1) => {
  try {
    const { data } = await api.get('starships/', {
      params: {
        page,
      },
    });

    if (data.next) {
      const starships: ShipData[] = await getAllShips(page + 1);
      return [...data.results, ...starships];
    }
    return data.results;
  } catch (error) {
    return [];
  }
};
