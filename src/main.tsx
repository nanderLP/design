import React from "react";
import ReactDOM from "react-dom/client";
import { Link, Route, Switch } from "wouter";

import styles from "./main.module.scss";
import "./index.scss";

import Context from "./pages/Context";
import Animation from "./pages/Animation";
import Dock from "./pages/Dock";
import FileManager from "./pages/FileManager";

const pages = [
  { name: "context menu", path: "/context", component: Context },
  { name: "animation", path: "/animation", component: Animation },
  { name: "dock", path: "/dock", component: Dock },
  { name: "file manager", path: "/files", component: FileManager },
];

ReactDOM.createRoot(document.getElementById("💜") as HTMLElement).render(
  <React.StrictMode>
    <Switch>
      {pages.map(({ name, path, component }) => (
        <Route key={name} path={path} component={component} />
      ))}
      <Route>
        <main className={styles.container}>
          <h1 className={styles.title}>💜</h1>
          <div className={styles.links}>
            {pages.map(({ name, path }) => (
              <Link key={name} href={path} className={styles.link}>
                {name}
              </Link>
            ))}
          </div>
        </main>
      </Route>
    </Switch>
  </React.StrictMode>
);
