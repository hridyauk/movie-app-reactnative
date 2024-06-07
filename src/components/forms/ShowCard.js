import {
  Button,
  ButtonText,
  Card,
  FlatList,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@gluestack-ui/themed";

const ShowCard = (props) => {
  const { showList, navigation } = props;
  // console.log("card: ", showList);
  return (
    <FlatList
      data={showList}
      renderItem={({ item }) => {
        return (
          <Card m={10}>
            <HStack flex={1}>
              <Image
                source={{ uri: item.poster_path }}
                alt={item.title || item.name}
                width={100}
                height={100}
              />
              <VStack flex={1}>
                <Heading>{item.title || item.name}</Heading>
                <Text>Popularity: {item.popularity}</Text>
                <Text>
                  Release Date: {item.release_date || item.first_air_date}
                </Text>
                <Button
                  onPress={() => navigation.navigate("ShowDetail", { item })}
                >
                  <ButtonText>More Details</ButtonText>
                </Button>
              </VStack>
            </HStack>
          </Card>
        );
      }}
    />
  );
};

export default ShowCard;
