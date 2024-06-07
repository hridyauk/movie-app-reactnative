import {
  Button,
  ButtonText,
  HStack,
  Heading,
  Link,
  Text,
  VStack,
  View,
} from "@gluestack-ui/themed";
import Dropdown from "../forms/Dropdown";
import TopTab from "../layout/TopTab";
import { useEffect, useState } from "react";
import { getMovies } from "../../services/getMovies";
import ShowCard from "../forms/ShowCard";

const MovieContainer = (props) => {
  const [activeValue, setActiveValue] = useState("popular");

  const movieDropdown = [
    { label: "Popular", value: "popular" },
    { label: "Now Playing", value: "now_playing" },
    { label: "Top rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" },
  ];
  const [movie, setMovie] = useState([]);
  const { navigation } = props;

  const handleDropdownChange = (currentSelection) => {
    setActiveValue(currentSelection);
    // console.log("drop: ", currentSelection, activeValue);
    fetchMovies(currentSelection);
  };

  const fetchMovies = async (currentSelection) => {
    try {
      const movieList = await getMovies("movie", currentSelection);
      //   console.log("inside fetch: ", movieList.results);
      setMovie(movieList.results);
    } catch (error) {
      console.log("error in movies page ", error);
    }
  };

  useEffect(() => {
    fetchMovies(activeValue);
  }, []);

  useEffect(() => {}, []);

  return (
    <VStack>
      <VStack mx="$20" my="$5">
        <Dropdown
          dropdownList={movieDropdown}
          onDropdownChange={handleDropdownChange}
        />
      </VStack>
      <ShowCard showList={movie} navigation={navigation} />
    </VStack>
  );
};

export default MovieContainer;
