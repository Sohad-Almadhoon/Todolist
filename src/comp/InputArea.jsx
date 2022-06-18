export default function InputArea(props) {
  return (
    <div className="form">
      <input type="text" onChange={props.update} value={props.value} />
      <button onClick={props.addItems}>
        <span>Add</span>
      </button>
    </div>
  );
}
