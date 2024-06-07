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

const ShowContainer = (props) => {
  const [activeValue, setActiveValue] = useState("popular");
  const [tv, setTv] = useState([]);
  const { navigation } = props;

  const TvDropdown = [
    { label: "Popular", value: "popular" },
    { label: "Airing Today", value: "airing_today" },
    { label: "Top rated", value: "top_rated" },
    { label: "On The Air", value: "on_the_air" },
  ];

  const handleDropdownChange = (currentSelection) => {
    setActiveValue(currentSelection);
    // console.log("drop: ", currentSelection, activeValue);
    fetchMovies(currentSelection);
  };

  const fetchMovies = async (currentSelection) => {
    try {
      const tvList = await getMovies("tv", currentSelection);
      console.log("inside tv fetch: ", tvList.results);
      setTv(tvList.results);
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
          dropdownList={TvDropdown}
          onDropdownChange={handleDropdownChange}
        />
      </VStack>
      <ShowCard showList={tv} navigation={navigation} />
    </VStack>
  );
};

export default ShowContainer;
