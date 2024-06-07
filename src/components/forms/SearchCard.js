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
import Dropdown from "./Dropdown";
import { StyleSheet } from "react-native";

const SearchCard = (props) => {
  const { onInputChange, SearchDropdown, onDropdownChange, handleSearch } =
    props;

  return (
    <FormControl isRequired>
      <VStack gap={2}>
        <FormControl.Label fontSize="sm">
          <FormControlLabelText>Search Movie/TV Show Name</FormControlLabelText>
        </FormControl.Label>

        <HStack width="100%" space={2}>
          <Input style={styles.inputStyles} mr={10} px={5}>
            <InputIcon>
              <Icon as={SearchIcon} size="sm" />
            </InputIcon>
            <InputField
              onChangeText={(value) => onInputChange(value)}
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
              onDropdownChange={onDropdownChange}
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
  );
};

export default SearchCard;

const styles = StyleSheet.create({
  inputStyles: {
    flex: 1,
    alignItems: "center",
  },
});
