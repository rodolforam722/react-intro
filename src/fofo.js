function Fofo({ content, isMale, age }) {
  return (
    <div style={{ backgroundColor: isMale ? "blue" : "pink" }}>
      {content} / {age}
    </div>
  );
}
export default Fofo;
