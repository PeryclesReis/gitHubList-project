import React, { useCallback, useEffect, useState } from "react";
import apiGithubSearch from "../services/Api";
import GHSearchContext from "./GHSearchContext";

const GHSearchProvider = ({ children }) => {
  const [ghState, setGhState] = useState({
    loading: false,
    repositories: [],
  });

  const getUser = async () => {
    setGhState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));

    const { data } = await apiGithubSearch.get().finally(() => {
      setGhState((prevState) => ({
        ...prevState,
        loading: !prevState.loading,
      }));
    });

    const { items } = data;

    setGhState((prevState) => ({
        ...prevState,
        repositories: items,
      }));
    return;
  }

  useEffect(() => {
    getUser();
  }, []);

  const contextValue = {
    ghState,
    getUser: useCallback(() => getUser(), []),
  }

  return (
    <GHSearchContext.Provider value={ contextValue }>
      { children }
    </GHSearchContext.Provider>
  );
}

export default GHSearchProvider;
