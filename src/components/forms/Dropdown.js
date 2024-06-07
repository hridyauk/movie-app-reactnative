import {
  ChevronDownIcon,
  Icon,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  SelectVirtualizedList,
} from "@gluestack-ui/themed";
import { useEffect, useState } from "react";

const Dropdown = (props) => {
  const { dropdownList, onDropdownChange } = props;

  // console.log("dropdown ", dropdownList);

  return (
    <Select
      initialLabel={dropdownList[0].label}
      onValueChange={(newValue) => onDropdownChange(newValue)}
    >
      <SelectTrigger variant="outline" size="md">
        <SelectInput placeholder="Select option" />
        <SelectIcon mr="$3">
          <Icon as={ChevronDownIcon} />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          <SelectVirtualizedList
            data={dropdownList}
            renderItem={(list) => {
              // console.log("inside ", list.item);
              return (
                <SelectItem label={list.item.label} value={list.item.value} />
              );
            }}
            keyExtractor={(list) => list.value}
            getItemCount={(data) => data.length}
            getItem={(data, index) => data[index]}
          />
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

export default Dropdown;
