import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../utils/constants";

export const getFlights = createAsyncThunk("flight/getFlights", async () => {
  const res = await axios.request(options);

  //api'dan gelen veriyi formatla
  // aircraft dizisi içindeki dizileri nesnelere çevirme
  const formatted = res.data.aircraft.map((item) => ({
    id: item[0],
    code: item[1],
    lat: item[2],
    lng: item[3],
  }));

  //aksiyonun payload'ı olucak değeri return et
  return formatted;
});
