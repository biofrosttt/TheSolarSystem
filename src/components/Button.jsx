function Button({ children, onSelect }) {
  return (
    <button className="button" onClick={onSelect}>
      {children}
    </button>
  );
}

export default Button;
