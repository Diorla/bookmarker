import { SetStateAction } from "react";
import { Input, Button, SelectItem, Select } from "bookmarker-ui";
import addToCollection from "../../services/addToCollection";
import SelectCollectionProps from "./SelectCollectionProps";
import styled from "styled-components";

const StyledSelect = styled(Select)`
  & > ul {
    width: 100%;
  }
`;

export default function SelectCollection({
  collection,
  addNewCollection,
  newCollection,
  setNewCollection,
  userId,
  setAddNewCollection,
  collections,
  setTabInfo,
  tabInfo,
  setModified,
}: SelectCollectionProps) {
  return (
    <StyledSelect
      title={collection || "Select a collection"}
      style={{ width: "100%" }}
    >
      <div style={{ padding: 4 }} onClick={(e) => e.stopPropagation()}>
        {addNewCollection ? (
          <Input
            label="New collection"
            value={newCollection}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setNewCollection(e.target.value)
            }
            onKeyDown={(e: { key: string }) => {
              if (e.key === "Enter") {
                if (newCollection) {
                  addToCollection(userId, newCollection)
                    .then(() => setNewCollection(""))
                    .then(() => setAddNewCollection(false));
                }
              }
            }}
            placeholder="Press enter to add new collection"
          />
        ) : null}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button onClick={() => setAddNewCollection(!addNewCollection)}>
            {addNewCollection ? "Cancel" : "Add new Collection"}
          </Button>
        </div>
      </div>
      {collections
        .sort((a, b) => (a > b ? 1 : -1))
        .map((item) => (
          <SelectItem
            onClick={() => {
              setTabInfo({ ...tabInfo, collection: item });
              setModified(true);
            }}
            active={collection === item}
            key={item}
          >
            {item}
          </SelectItem>
        ))}
    </StyledSelect>
  );
}
