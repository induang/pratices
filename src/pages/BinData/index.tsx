import { useState } from "react";

export default () => {
  const [image, setImage] = useState<URL>();
  const handleUpload = () => {};
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setImage(reader.result);
    };
  };
  return (
    <>
      <input
        type="file"
        id="imageLoader"
        name="imageLoader"
        accept="image/png, image/jpeg"
        onChange={(e) => handleChange}
      />
      <button onClick={handleUpload}>Upload File</button>
      <img src={image} />
    </>
  );
};
