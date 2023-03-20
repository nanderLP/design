import styles from "./Navigation.module.scss";

import { atomWithStorage } from "jotai/utils";
import { FC, useState } from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Separator from "@radix-ui/react-separator";
import { useAtom } from "jotai";

const Navigation: FC = () => {
  return (
    <ScrollArea.Root className={styles.ScrollAreaRoot}>
      <h1 className={styles.title}>Files</h1>
      <Separator.Root className={styles.separator} />
      <ScrollArea.Viewport className={styles.ScrollAreaViewport}>
        <Tree />
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className={styles.ScrollAreaScrollbar}
        orientation="vertical"
      >
        <ScrollArea.Thumb className={styles.ScrollAreaThumb} />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        className={styles.ScrollAreaScrollbar}
        orientation="horizontal"
      >
        <ScrollArea.Thumb className={styles.ScrollAreaThumb} />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className={styles.ScrollAreaCorner} />
    </ScrollArea.Root>
  );
};

type TreeItem<Variant extends "folder" | "file"> = {
  type: Variant;
  id: string;
  name: string;
  // children if type is folder
  // funky typescript type
  children?: Variant extends "folder" ? TreeItem<Variant>[] : never;
};

// wtf type guards are annoying as fuck
// why can't i inline the condition
const isFolder = (
  item: TreeItem<"folder" | "file">
): item is TreeItem<"folder"> => {
  return item.type === "folder";
};

const isFile = (
  item: TreeItem<"folder" | "file">
): item is TreeItem<"file"> => {
  return item.type === "file";
};

const treeAtom = atomWithStorage<TreeItem<"file" | "folder">[]>("tree", []);

const Tree: FC = () => {
  const [tree, setTree] = useAtom(treeAtom);
  return (
    <div>
      <button
        onClick={() => {
          setTree([
            ...tree,
            { id: crypto.randomUUID(), type: "file", name: "new file" },
          ]);
        }}
      >
        Add File
      </button>
      <button
        onClick={() => {
          setTree([
            ...tree,
            {
              id: crypto.randomUUID(),
              type: "folder",
              name: "new folder",
              children: [],
            },
          ]);
        }}
      >
        Add Folder
      </button>
      <button
        onClick={() => {
          setTree([]);
        }}
      >
        Clear
      </button>
      {tree.map((v) => {
        if (isFolder(v)) {
          return <Folder key={v.id} data={v} />;
        } else if (isFile(v)) {
          return <File key={v.id} data={v} />;
        }
      })}
    </div>
  );
};

const Folder: FC<{ data: TreeItem<"folder"> }> = () => {
  return <div>folder</div>;
};

const File: FC<{ data: TreeItem<"file"> }> = () => {
  return <div>file</div>;
};

export { Folder, File, Navigation };
