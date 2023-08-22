export default function DaisyMenu() {
  const handleAddClick = () => {
    const span = document.createElement("span");
    span.style.backgroundColor = "rbg(252,157,155)";
    span.textContent = "hello, world";
    span.style.position = "fixed";
    span.style.left = "30px";
    span.style.top = "30px";
    const root = document.querySelector("#root");
    root?.appendChild(span);
  };
  return (
    <>
      <ul className="menu menu-xs bg-base-200 rounded-lg max-w-xs w-full m-auto mt-4">
        <li className="bg-slate-500 rounded">
          <a>resume.pdf</a>
        </li>
        <li>
          <details open className="flex">
            <summary className="bg-slate-500/50" id="summay1">
              <label className="grow">World</label>
            </summary>

            <ul>
              <li>
                <a style={{ backgroundColor: "#7c2d1280" }}>
                  Project-final.psd
                </a>
              </li>
              <li>
                <a>Project-final-2.psd</a>
              </li>
              <li>
                <details open>
                  <summary>Images</summary>
                  <ul>
                    <li>
                      <a>Screenshot1.png</a>
                    </li>
                    <li>
                      <a>Screenshot2.png</a>
                    </li>
                    <li>
                      <details open>
                        <summary>Others</summary>
                        <ul>
                          <li>
                            <a>Screenshot3.png</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>reports-final-2.pdf</a>
        </li>
      </ul>
      <button onClick={handleAddClick}>ADD </button>
    </>
  );
}
