export default () => {
  return (
    <>
      <div tabIndex={1} className="bg-slate-300 w-24 h-24 m-auto"></div>
      <input type="text" placeholder="Hello" className="block m-auto mt-4" />
      <div tabIndex={0} className="bg-purple-300 w-28 h-28 m-auto mt-4"></div>
      <div tabIndex={5} className="bg-green-300 w-20 h-20 m-auto mt-4"></div>
      <div tabIndex={2} className="bg-red-300 w-32 h-32 m-auto mt-4"></div>
    </>
  );
};
