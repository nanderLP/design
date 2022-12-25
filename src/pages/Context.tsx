import { FC, useState } from "react";
import styles from "./Context.module.scss";

import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Toast from "@radix-ui/react-toast";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";

const actionAtom = atom("");

const Item: FC<{ icon: string }> = ({ icon }) => {
  const setAction = useSetAtom(actionAtom);
  return (
    <ContextMenu.Item
      className={styles.contextItem}
      onSelect={() => {
        // reset prev action
        setAction("");
        setTimeout(() => {
          setAction(icon);
        }, 100);
      }}
    >
      <span className="material-symbols-outlined">{icon}</span>
    </ContextMenu.Item>
  );
};

function Context() {
  const [action, setAction] = useAtom(actionAtom);

  const [open, setOpen] = useState(false);

  return (
    <Toast.Provider duration={2000} swipeDirection="right">
      <ContextMenu.Root>
        <ContextMenu.Trigger className="trigger">
          <main className={styles.content}>
            <p>right click anywhere</p>

            <Toast.Root
              className={styles.toast}
              open={action !== ""}
              onOpenChange={() => setAction("")}
            >
              <Toast.Description>{action} was clicked</Toast.Description>
            </Toast.Root>

            <Toast.Viewport className={styles.toastContainer} />
          </main>
        </ContextMenu.Trigger>
        <ContextMenu.Portal>
          <ContextMenu.Content className={styles.contextContent}>
            <Item icon="content_copy" />
            <Item icon="content_paste" />
            <Item icon="add_photo_alternate" />
            <Item icon="folder" />
            <Item icon="export_notes" />
            <Item icon="share" />
          </ContextMenu.Content>
        </ContextMenu.Portal>
      </ContextMenu.Root>
    </Toast.Provider>
  );
}

export default Context;
