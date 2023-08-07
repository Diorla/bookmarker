import { SetStateAction, useEffect, useState } from "react";
import getCurrentTabInfo from "./getCurrentTabInfo";
import TabInfoProps from "./TabInfoProps";
import getUrl from "../../services/getUrl";
import addUrl from "../../services/addUrl";
import { v4 } from "uuid";
import deleteUrl from "../../services/deleteUrl";
import SpaceBetween from "./SpaceBetween";
import SpaceEvenly from "./SpaceEvenly";
import Close from "./Close";
import { Link, Input, Chip, Textarea, Button, Loader } from "bookmarker-ui";
import SelectCollection from "./SelectCollection";
import { useUser } from "../../userContext";
import truncateText from "./truncateText";

export default function Home() {
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

  const { user } = useUser();
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

  const {
    title = "",
    url = "",
    description = "",
    tags = [],
    collection = "",
  } = tabInfo || {};
  const { collections = [] } = user;

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
      <div
        style={{ textAlign: "center", overflowWrap: "anywhere" }}
        title={url}
      >
        {truncateText(url)}
      </div>
      <Input
        label="Name"
        value={title}
        onChange={(e: { target: { value: string } }) => {
          setTabInfo({ ...tabInfo, title: e.target.value });
          setModified(true);
        }}
      />
      <SelectCollection
        collection={collection}
        addNewCollection={addNewCollection}
        newCollection={newCollection}
        setNewCollection={setNewCollection}
        userId={user.uid}
        setAddNewCollection={setAddNewCollection}
        collections={collections}
        setTabInfo={setTabInfo}
        tabInfo={tabInfo}
        setModified={setModified}
      />
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
