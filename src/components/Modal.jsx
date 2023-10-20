const Modal = ({ member, handleClose, handleChange }) => {
  return (
    <dialog id="modal-member" open>
      <article>
        <header>
          <a
            href="#close"
            aria-label="Close"
            className="close"
            onClick={handleClose}
          ></a>
          {member.name}
        </header>
        <div
          style={{
            display: "flex",
            columnGap: "2rem",
            alignItems: "center",
          }}
        >
          <img
            style={{ maxHeight: "35vh", minWidth: "200px" }}
            src={`images/${member.slug}.svg`}
            alt={member.name}
          />
          <hgroup>
            <p>{member.bio}</p>
          </hgroup>
        </div>
        <footer>
          <a
            className="outline"
            href="#"
            role="button"
            onClick={() => handleChange(member.id, -1)}
          >
            Previous Cast
          </a>
          <a
            className="outline"
            href="#"
            role="button"
            onClick={() => handleChange(member.id, 1)}
          >
            Next Cast
          </a>
        </footer>
      </article>
    </dialog>
  );
};

export default Modal;
