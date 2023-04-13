export default () => {
  const handleChange = () => {
    console.log("change!");
  };
  // const handleFocus = () => {
  //   console.log("focus.");
  // };
  // const handleBlur = () => {
  //   console.log("blur.");
  // };
  const handleSubmit = (e: SubmitEvent) => {
    console.log("submit.");
    // prevent at there
    e.preventDefault();
    return false;
  };
  return (
    <div>
      <form onSubmit={() => handleSubmit}>
        <input
          onChange={handleChange}
          // onFocus={handleFocus}
          // onBlur={handleBlur}
          placeholder="HELLO, WORLD."
          className="m-auto mt-4"
          type="text"
        ></input>
      </form>
    </div>
  );
};
