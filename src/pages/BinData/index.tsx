import { useState } from "react";

export default () => {
  // TODO: should check
  const [image, setImage] = useState<ArrayBuffer | string | null>();
  // event 类型 可以通过在传入的地方查看,如onChange={(e) => handleChange}, 鼠标悬在e上即知event类型
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // FileList.item() 返回FileList索引值对应的项
    //  ?? typescript 语法，当左侧为空返回右侧 与|| 在设置默认值时用法相同
    const file = e.target?.files?.item(0) ?? new Blob(["ERROR"]);
    let reader = new FileReader();
    // read the binary data and encode it as base64 data url.
    reader.readAsDataURL(file);
    reader.onload = function () {
      setImage(reader.result);
    };
    reader.onerror = function (error) {
      console.log("error: ", error);
    };
  };
  return (
    <div className="w-screen">
      <label className="block m-auto mt-10">
        {/* input hidden 可以内嵌在label里，不能内嵌在button里 */}
        <input
          type="file"
          id="imageLoader"
          name="imageLoader"
          accept="image/png, image/jpeg"
          // wrong: onChange={(e) => handleChange}
          onChange={handleChange}
          hidden
        />
        Upload File
      </label>
      <div
        className="w-48 h-48 bg-contain"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  );
};
