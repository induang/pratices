import { useState } from "react";

// TODO: try multi files
export default () => {
  // TODO: should check
  const [imageURLs, setImageURLs] = useState<string[]>([]);
  // event 类型 可以通过在传入的地方查看,如onChange={(e) => handleChange}, 鼠标悬在e上即知event类型
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // FileList.item() 返回FileList索引值对应的项
    //  ?? typescript 语法，当左侧为空返回右侧 与|| 在设置默认值时用法相同
    const files = e.target.files;
    const images = [] as string[];
    if (!files?.length) return;
    // change convert way because asynchronuse
    for (const file of files) {
      const url = URL.createObjectURL(file);
      console.log(url);
      images.push(url);
    }
    setImageURLs(images);
  };
  return (
    <div className="w-screen">
      <label htmlFor="imageLoader" className="block m-auto mt-10 bg-red-500">
        Upload File
      </label>
      {/* input hidden 可以内嵌在label里，不能内嵌在button里 */}
      <input
        type="file"
        id="imageLoader"
        name="imageLoader"
        accept="image/png, image/jpeg"
        multiple
        // wrong: onChange={(e) => handleChange}
        onChange={handleChange}
        hidden
      />
      <div className="flex">
        {imageURLs?.map((imageURL, index) => (
          <div
            key={`imageURL${index}`}
            className="w-48 h-48 bg-contain bg-no-repeat bg-center m-auto"
            style={{ backgroundImage: `url(${imageURL})` }}
          />
        ))}
      </div>
    </div>
  );
};
