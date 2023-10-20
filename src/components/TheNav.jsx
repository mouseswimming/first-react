const TheNav = ({ cast, onChoice }) => {
  return (
    <nav className="container" style={{ zIndex: 100 }}>
      <ul>
        <li>
          <a href="#">
            <img
              style={{ height: "50px" }}
              src="images/logo_bug_stargazers.svg"
              alt="Stargazers Logo"
            />
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <details role="list" dir="rtl">
            <summary aria-haspopup="listbox" role="link">
              cast
            </summary>
            <ul role="listbox">
              {cast.map((member) => (
                <li key={member.id}>
                  <a
                    onClick={() => {
                      onChoice(member);
                    }}
                  >
                    {member.name}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </li>
      </ul>
    </nav>
  );
};

export default TheNav;
