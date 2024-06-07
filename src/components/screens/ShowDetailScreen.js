import { Heading, Image, Text, VStack } from "@gluestack-ui/themed";

const ShowDetailScreen = ({ route }) => {
  // const { movie } = props;

  // console.log("inside detail: ", route.params.item);

  return (
    <VStack mx={30} my={20}>
      <Heading textAlign="center">
        {route.params.item.title || route.params.item.name}
      </Heading>
      <Image
        source={{ uri: route.params.item.poster_path }}
        alt="no pic"
        width={250}
        height={250}
      />
      <Text>{route.params.item.overview}</Text>
      <Text my={10} fontSize={14}>
        Popularity: {route.params.item.popularity} | Release Date:{" "}
        {route.params.item.release_date || route.params.item.first_air_date}
      </Text>
    </VStack>
  );
};

export default ShowDetailScreen;
