import "./App.scss";
import { useState, useEffect } from "react";
import ListCast from "./components/ListCast";
import Modal from "./components/Modal";
import TheNav from "./components/TheNav";

function App() {
  const [cast, setCast] = useState([]);
  const [memberInfo, setMemberInfo] = useState(null);

  async function fetchCast() {
    const response = await fetch("cast.json");
    setCast(await response.json());
  }

  const findCast = (id, increment) => {
    let index = cast.findIndex((member) => member.id === id);
    index = (index + increment + cast.length) % cast.length;
    console.log({ index });
    setMemberInfo(cast[index]);
  };

  useEffect(() => {
    fetchCast();
  }, []);

  return (
    <>
      <TheNav cast={cast} onChoice={(member) => setMemberInfo(member)} />
      <div className="container">
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
          <h1>Meet the Stargazers</h1>
          <p>
            Members of an <b>intergalactic alliance</b> paving the way for peace
            and benevolence among all species. They are known for their
            enthusiasm for science, for their love of fun, and their dedication
            to education.
          </p>
          <ListCast cast={cast} onChoice={(member) => setMemberInfo(member)} />
          {memberInfo && (
            <Modal
              member={memberInfo}
              handleClose={() => setMemberInfo(null)}
              handleChange={(id, increment) => findCast(id, increment)}
            />
          )}
        </hgroup>
      </div>
    </>
  );
}

export default App;
