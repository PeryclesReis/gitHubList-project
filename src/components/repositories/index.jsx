import React, { useEffect, useState } from "react";
import "../../styles/cards.css";
// import { usePagination } from "../../hooks/Pagination";

const Repositories = ({ repos }) => {
  const [pageRepos, setPageRepos] = useState([]);
  const [initialElem, setInitialElem] = useState(0);
  const [endElem, setEndElem] = useState(9);
  const [disableNext, setDisableNext] = useState(false);
  const [disableBack, setDisableBack] = useState(true);

  useEffect(() => {
    const repoSplit = repos.slice(initialElem,endElem);
    setPageRepos(repoSplit);
    if (initialElem > 0) {
      setDisableBack(false);
    } else {
      setDisableBack(true);
    }

    if (endElem > repos.length) {
      setDisableNext(true);
    } else {
      setDisableNext(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialElem, endElem, disableNext, disableBack]);

  const handleClick = ({ target }) => {
    if (target.value === 'next') {
      setInitialElem(initialElem + 9);
      setEndElem(endElem + 9);
      const repoSplit = repos.slice(initialElem,endElem);
      setPageRepos(repoSplit);
    } else {
      if (!(initialElem < 0)) {
        setInitialElem(initialElem - 9);
        setEndElem(endElem - 9);
        const repoSplit = repos.slice(initialElem,endElem);
        setPageRepos(repoSplit);
      }
    }
  }

  if (repos.length < 1) return <h1>Loading...</h1>

  return (
    <div className="page-repos">
      <div className="repositories">
        { pageRepos.map((repo) => (
          <div className="card" key={repo.id}>
            <div className="items-card">
              <div className="avatar">
                <img src={repo.owner.avatar_url} height="100px" alt="profile" />
              </div>
              <div className="description">
                <p>{repo.owner.login}</p>
                <p>{repo.full_name}</p>
                <p>{repo.description}</p>
              </div>
            </div>
          </div>
        )) }
      </div>
      <div className="btns">
        <button onClick={handleClick} value="back" disabled={disableBack}>voltar</button>
        <button onClick={handleClick} value="next" disabled={disableNext}>próximo</button>
      </div>
    </div>
  );
}

export default Repositories;
