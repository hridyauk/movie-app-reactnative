import { Button, ButtonText, HStack } from "@gluestack-ui/themed";

const TopTab = ({ OnTabChange, currentTab }) => {
  return (
    <HStack borderBottomColor="$trueGray300" borderBottomWidth={2}>
      <Button
        size="md"
        variant="link"
        action="primary"
        flex={1}
        borderBottomColor={currentTab === "movie" ? "#2c3e50" : ""}
        borderBottomWidth={currentTab === "movie" ? 3 : 0}
        onPress={() => OnTabChange("movie")}
      >
        <ButtonText>Movies</ButtonText>
      </Button>
      <Button
        size="md"
        variant="link"
        action="primary"
        flex={1}
        borderBottomColor={currentTab === "search" ? "#2c3e50" : ""}
        borderBottomWidth={currentTab === "search" ? 3 : 0}
        onPress={() => OnTabChange("search")}
      >
        <ButtonText>Search Results</ButtonText>
      </Button>
      <Button
        size="md"
        variant="link"
        action="primary"
        flex={1}
        borderBottomColor={currentTab === "tv" ? "#2c3e50" : ""}
        borderBottomWidth={currentTab === "tv" ? 3 : 0}
        onPress={() => OnTabChange("tv")}
      >
        <ButtonText>TV Show</ButtonText>
      </Button>
    </HStack>
  );
};

export default TopTab;
