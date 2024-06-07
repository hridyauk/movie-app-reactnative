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
import TopTab from "../layout/TopTab";
import { useEffect, useState } from "react";
import MovieContainer from "../containers/MovieContainer";
import SearchContainer from "../containers/SearchContainer";
import ShowContainer from "../containers/ShowContainer";
import Loading from "../layout/Loading";

const ShowScreen = (props) => {
  const { navigation } = props;

  const [activeTab, setActiveTab] = useState("movie");
  const [movie, setMovie] = useState("movie");

  const handleTabChange = (currentTab) => {
    setActiveTab(currentTab);
    // console.log("tab ", activeTab);
  };

  return (
    <VStack>
      <TopTab OnTabChange={handleTabChange} currentTab={activeTab} />
      {activeTab === "movie" ? (
        <MovieContainer navigation={navigation} />
      ) : activeTab === "search" ? (
        <SearchContainer navigation={navigation} />
      ) : activeTab === "tv" ? (
        <ShowContainer navigation={navigation} />
      ) : (
        <Loading />
      )}
    </VStack>
  );
};

export default ShowScreen;
