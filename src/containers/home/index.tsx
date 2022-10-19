import { User } from "firebase/auth";
import { SetStateAction, useEffect, useState } from "react";
import getCurrentTabInfo from "../../modules/getCurrentTabInfo";
import TabInfoProps from "./TabInfoProps";
import getUrl from "../../services/getUrl";
import addUrl from "../../services/addUrl";
import { v4 } from "uuid";
import deleteUrl from "../../services/deleteUrl";
import SpaceBetween from "./SpaceBetween";
import SpaceEvenly from "./SpaceEvenly";
import Close from "./Close";
import {
  Link,
  Input,
  Chip,
  Textarea,
  Button,
  Loader,
  Select,
  SelectItem,
} from "bookmarker-ui";
import { UpdatedUser } from "../../hooks/useUser";
import addToCollection from "../../services/addToCollection";
import styled from "styled-components";

const StyledSelect = styled(Select)`
  & > ul {
    width: 100%;
  }
`;

export default function Home({ user }: { user: UpdatedUser }) {
  const [tabInfo, setTabInfo] = useState<TabInfoProps>({
    title: "",
    favicon: "",
    url: "",
    tags: [],
    description: "",
    pinned: false,
    id: "",
    collection: "",
  });

  const [tag, setTag] = useState("");

  const [isNewUrl, setIsNewUrl] = useState(true);

  const [loading, setLoading] = useState(true);

  const [modified, setModified] = useState(true);

  const [addNewCollection, setAddNewCollection] = useState(false);
  const [newCollection, setNewCollection] = useState("");

  useEffect(() => {
    let currentInfo = { ...tabInfo };
    getCurrentTabInfo((data) => {
      currentInfo = { ...tabInfo, ...data };

      getUrl(user.uid, currentInfo.url, (list) => {
        const data = list[0] as TabInfoProps;
        if (data) {
          setIsNewUrl(false);
          setModified(false);
          currentInfo = {
            ...currentInfo,
            ...data,
          };
        }

        setTabInfo({ ...currentInfo, id: currentInfo.id || v4() });
        setLoading(false);
      });
    });
  }, []);

  const save = () => {
    addUrl(user.uid, { ...tabInfo }, tabInfo.id)
      .then(() => {
        setIsNewUrl(false);
        setModified(false);
      })
      .catch((err) => console.log(err));
  };
  const remove = () => {
    deleteUrl(user.uid, tabInfo.id)
      .then(() => {
        setIsNewUrl(true);
        setModified(true);
      })
      .catch((err) => console.log(err));
  };

  const { title, url, description, tags, collection } = tabInfo;

  const { collections = [] } = user;
  console.log(Array.isArray(collections));
  if (loading) return <Loader style={{ height: 300 }} />;
  return (
    <div style={{ margin: 8 }}>
      <SpaceBetween>
        <Link href="https://bookmarker-one.vercel.app/" target="_blank">
          {user.displayName || user.email}
        </Link>
        <Close onClick={() => window.close()}>×</Close>
      </SpaceBetween>
      <hr />
      <div style={{ textAlign: "center", overflowWrap: "anywhere" }}>{url}</div>
      <Input
        label="Name"
        value={title}
        onChange={(e: { target: { value: string } }) => {
          setTabInfo({ ...tabInfo, title: e.target.value });
          setModified(true);
        }}
      />
      <StyledSelect
        title={collection || "Select a collection"}
        style={{ width: "100%" }}
      >
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
                    addToCollection(user.uid, newCollection)
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
      </StyledSelect>
      <Input
        label="Tags"
        value={tag}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setTag(e.target.value)
        }
        onKeyDown={(e: { key: string }) => {
          if (e.key === "Enter") {
            if (tag) {
              setTabInfo({
                ...tabInfo,
                tags: [...tabInfo.tags, tag.trim()],
              });
              setTag("");
              setModified(true);
            }
          }
        }}
        placeholder="Press enter to add tag"
      />
      <SpaceEvenly
        style={{
          margin: 4,
          flexWrap: "wrap",
        }}
      >
        {tags.map((item, idx) => (
          <Chip
            title={item}
            style={{ margin: 2 }}
            onClick={() => {
              setTabInfo({
                ...tabInfo,
                tags: [
                  ...tabInfo.tags.slice(0, idx),
                  ...tabInfo.tags.slice(idx + 1),
                ],
              });
              setModified(true);
            }}
            key={idx}
            disabled={false}
          />
        ))}
      </SpaceEvenly>
      <Textarea
        label="Description"
        cols={15}
        rows={3}
        value={description}
        onChange={(e: { target: { value: string } }) => {
          setTabInfo({ ...tabInfo, description: e.target.value });
          setModified(true);
        }}
      />
      <SpaceBetween style={{ margin: 4 }}>
        <Button variant="primary" onClick={save} disabled={!modified}>
          Save
        </Button>
        <Button variant="secondary" disabled={isNewUrl} onClick={remove}>
          Remove
        </Button>
      </SpaceBetween>
    </div>
  );
}
