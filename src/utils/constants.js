export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.654293",
    bl_lng: "25.514642",
    tr_lat: "42.793449",
    tr_lng: "43.185981",
    limit: "300",
  },
  headers: {
    "x-rapidapi-key": "9e13f939c6mshec3979ba5839793p1cd636jsnf537eb604fd2",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
};

export const headers = {
  "x-rapidapi-key": "9e13f939c6mshec3979ba5839793p1cd636jsnf537eb604fd2",
  "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  "Content-Type": "application/json",
};
