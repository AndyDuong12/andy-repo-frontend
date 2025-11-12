import axios from 'axios';

export default async function getCountries() {
  try {
    const res = await axios.get(
      'https://restcountries.com/v3.1/region/south%20america'
    );
    //console.log(res.data);
    return res.data;
  } catch (err) {
    console.error(`Error fetching countries: ${err}`);
    return [];
  }
}
