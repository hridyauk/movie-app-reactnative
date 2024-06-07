import {
  Button,
  ButtonIcon,
  ButtonText,
  FormControl,
  FormControlLabelText,
  HStack,
  Heading,
  Icon,
  Input,
  InputField,
  InputIcon,
  SearchIcon,
  Text,
  VStack,
  View,
} from "@gluestack-ui/themed";
import { useEffect, useState } from "react";
import { getSeacrh } from "../../services/getSearch";
import ShowCard from "../forms/ShowCard";
import SearchCard from "../forms/SearchCard";

const SearchContainer = (props) => {
  const { navigation } = props;
  const [activeValue, setActiveValue] = useState("multi");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCount, setSearchCount] = useState(0);
  const [searchResult, setSearchResult] = useState([]);

  const SearchDropdown = [
    { label: "Multi", value: "multi" },
    { label: "Movie", value: "movie" },
    { label: "TV", value: "tv" },
  ];

  const handleDropdownChange = (currentSelection) => {
    setActiveValue(currentSelection);
    // console.log("drop: ", currentSelection, activeValue);
    // fetchSearch(currentSelection);
  };

  const fetchSearch = async (currentSelection) => {
    // console.log("fetching search results");
    try {
      const searchList = await getSeacrh(
        "search",
        currentSelection,
        searchQuery
      );
      //   console.log("inside search fetch: ", searchList);
      setSearchResult(searchList.results);
    } catch (error) {
      console.log("error in movies page ", error);
    }
  };

  const handleSearch = () => {
    setSearchCount((count) => count + 1);
    // console.log("button search", setSearchCount);
    fetchSearch(activeValue);
  };

  const handleInputChange = (searchText) => {
    setSearchQuery(searchText);
  };

  useEffect(() => {
    fetchSearch(activeValue);
  }, []);

  return (
    <View>
      <VStack m={20}>
        <SearchCard
          onInputChange={handleInputChange}
          SearchDropdown={SearchDropdown}
          onDropdownChange={handleDropdownChange}
          handleSearch={handleSearch}
        />
      </VStack>
      {searchResult.length > 0 ? (
        <ShowCard showList={searchResult} navigation={navigation} />
      ) : searchQuery.length > 0 && searchCount > 0 ? (
        <Heading textAlign="center" my="$20">
          No Movies/TV shows found...
        </Heading>
      ) : (
        <Heading textAlign="center" my="$20">
          Please initiate a search..
        </Heading>
      )}
    </View>
  );
};

export default SearchContainer;
