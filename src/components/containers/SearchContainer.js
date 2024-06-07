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
import { StyleSheet } from "react-native";
import Dropdown from "../forms/Dropdown";
import { useEffect, useState } from "react";
import { getSeacrh } from "../../services/getSearch";
import ShowCard from "../forms/ShowCard";

const SearchContainer = (props) => {
  const { navigation } = props;
  const [activeValue, setActiveValue] = useState("multi");
  const [searchQuery, setSearchQuery] = useState("");
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
    console.log("button search");
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
        <FormControl isRequired>
          <VStack gap={2}>
            <FormControl.Label fontSize="sm">
              <FormControlLabelText>
                Search Movie/TV Show Name
              </FormControlLabelText>
            </FormControl.Label>

            <HStack width="100%" space={2}>
              <Input style={styles.inputStyles} mr={10} px={5}>
                <InputIcon>
                  <Icon as={SearchIcon} size="sm" />
                </InputIcon>
                <InputField
                  onChangeText={(value) => handleInputChange(value)}
                  placeholder="i.e James Bond, CSI..."
                />
              </Input>
            </HStack>
            <FormControl.Label fontSize="sm">
              <FormControlLabelText>Choose Search Type</FormControlLabelText>
            </FormControl.Label>
            <HStack gap={5}>
              <VStack flex={1}>
                <Dropdown
                  dropdownList={SearchDropdown}
                  onDropdownChange={handleDropdownChange}
                />
                <Text fontSize="$sm">Please select a search type</Text>
              </VStack>
              <Button onPress={handleSearch} bgColor="$cyan500">
                <ButtonIcon as={SearchIcon} mr="$2" />
                <ButtonText>Search</ButtonText>
              </Button>
            </HStack>
          </VStack>
        </FormControl>
      </VStack>
      {searchResult.length > 0 ? (
        <ShowCard showList={searchResult} navigation={navigation} />
      ) : (
        <Heading textAlign="center" my="$20">
          Please initiate a search..
        </Heading>
      )}
    </View>
  );
};

export default SearchContainer;

const styles = StyleSheet.create({
  inputStyles: {
    flex: 1,
    alignItems: "center",
  },
});
