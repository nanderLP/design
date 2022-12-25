import React from "react";
import ReactDOM from "react-dom/client";
import { Link, Route, Switch } from "wouter";

import styles from "./main.module.scss";
import "./index.scss";

import Context from "./pages/Context";
import Animation from "./pages/Animation";

ReactDOM.createRoot(document.getElementById("💜") as HTMLElement).render(
  <React.StrictMode>
    <Switch>
      <Route path="/context" component={Context}></Route>
      <Route path="/animation" component={Animation}></Route>
      <Route>
        <main className={styles.container}>
          <h1 className={styles.title}>💜</h1>
          <div className={styles.links}>
            <Link href="/context">context menu</Link>
            <Link href="/animation">animation</Link>
          </div>
        </main>
      </Route>
    </Switch>
  </React.StrictMode>
);
