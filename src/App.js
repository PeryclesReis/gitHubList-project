import React from "react";
import useGitHub from "./hooks/GHHooks";
import Repositories from "./components/repositories";
import Layout from "./components/layout";

function App() {
  const { ghState } = useGitHub();

  return (
    <main>
      <Layout>
        {
          ghState.loading
          ? 'Loading...'
          :
            <Repositories repos={ghState.repositories} />
        }
      </Layout>
    </main>
  );
}

export default App;
