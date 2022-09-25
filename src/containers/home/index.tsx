import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import getCurrentTabInfo from "../../modules/getCurrentTabInfo";
import Button from "../../components/button";
import Chip from "../../components/chip";
import Input from "../../components/input";
import Link from "../../components/link";
import Switch from "../../components/switch";
import Textarea from "../../components/textarea";
import TabInfoProps from "./TabInfoProps";
import getUrl from "../../services/getUrl";
import addUrl from "../../services/addUrl";
import { v4 } from "uuid";
import deleteUrl from "../../services/deleteUrl";
import spinner from "../../assets/spinner.gif";
import SpaceBetween from "./SpaceBetween";
import SpaceEvenly from "./SpaceEvenly";
import Close from "./Close";

export default function Home({ user }: { user: User }) {
  const [tabInfo, setTabInfo] = useState<TabInfoProps>({
    title: "",
    favicon: "",
    url: "",
    tags: [],
    description: "",
    pinned: false,
    id: "",
  });

  const [tag, setTag] = useState("");

  const [showDesc, setShowDesc] = useState(false);

  const [isNewUrl, setIsNewUrl] = useState(true);

  const [loading, setLoading] = useState(true);

  const [modified, setModified] = useState(true);

  useEffect(() => {
    let currentInfo = { ...tabInfo };
    getCurrentTabInfo((data) => {
      currentInfo = { ...tabInfo, ...data };

      getUrl(user.uid, currentInfo.url, (list) => {
        const data = list[0] as TabInfoProps;
        if (data) {
          setIsNewUrl(false);

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
  const { title, url, description, tags, pinned } = tabInfo;
  if (loading) return <img src={spinner} alt="loading" />;
  return (
    <div style={{ margin: 8 }}>
      <SpaceBetween>
        <Link href="https://bookmarker-one.vercel.app/" target="_blank">
          {user.displayName || user.email}
        </Link>
        <Close onClick={() => window.close()}>×</Close>
      </SpaceBetween>
      <hr />
      <div style={{ textAlign: "center" }}>{url}</div>
      <Input
        label="Name"
        value={title}
        onChange={(e) => {
          setTabInfo({ ...tabInfo, title: e.target.value });
          setModified(true);
        }}
      />
      <Input
        label="Tags"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        onKeyDown={(e) => {
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
            onClick={() =>
              setTabInfo({
                ...tabInfo,
                tags: [
                  ...tabInfo.tags.slice(0, idx),
                  ...tabInfo.tags.slice(idx + 1),
                ],
              })
            }
            key={idx}
          />
        ))}
      </SpaceEvenly>
      <Switch
        label="Pin site"
        checked={pinned}
        style={{ marginTop: 8, marginBottom: 4 }}
        onClick={() => {
          setTabInfo({
            ...tabInfo,
            pinned: !tabInfo.pinned,
          });
          setModified(true);
        }}
      />
      <div style={{ marginTop: 8, marginBottom: 8 }}>
        {showDesc ? (
          <Textarea
            label="Description"
            cols={15}
            rows={4}
            value={description}
            onChange={(e) => {
              setTabInfo({ ...tabInfo, description: e.target.value });
              setModified(true);
            }}
          />
        ) : (
          <Button onClick={() => setShowDesc(true)}>Add description</Button>
        )}
      </div>
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
