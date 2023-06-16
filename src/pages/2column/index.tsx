import "./index.css";

export default function TwoColumn() {
  return (
    <div className="my-container">
      <div className="side bg-cyan-400 w-32 float-right ml-2 max-h-48 overflow-scroll">
        Let's now look at fixed positioning. This works in exactly the same way
        as absolute positioning, with one key difference: whereas absolute
        positioning fixes an element in place relative to its nearest positioned
        ancestor (the initial containing block if there isn't one), fixed
        positioning usually fixes an element in place relative to the visible
        portion of the viewport. (An exception to this occurs if one of the
        element's ancestors is a fixed containing block because its transform
        property has a value other than none.) This means that you can create
        useful UI items that are fixed in place, like persistent navigation
        menus that are always visible no matter how much the page scrolls.
      </div>
      <div className="float-left w-4 h-4 bg-slate-300"></div>
      <div className="content bg-emerald-200 min-h-screen">
        Let's now look at fixed positioning. This works in exactly the same way
        as absolute positioning, with one key difference: whereas absolute
        positioning fixes an element in place relative to its nearest positioned
        ancestor (the initial containing block if there isn't one), fixed
        positioning usually fixes an element in place relative to the visible
        portion of the viewport. (An exception to this occurs if one of the
        element's ancestors is a fixed containing block because its transform
        property has a value other than none.) This means that you can create
        useful UI items that are fixed in place, like persistent navigation
        menus that are always visible no matter how much the page scrolls. Let's
        now look at fixed positioning. This works in exactly the same way as
        absolute positioning, with one key difference: whereas absolute
        positioning fixes an element in place relative to its nearest positioned
        ancestor (the initial containing block if there isn't one), fixed
        positioning usually fixes an element in place relative to the visible
        portion of the viewport. (An exception to this occurs if one of the
        element's ancestors is a fixed containing block because its transform
        property has a value other than none.) This means that you can create
        useful UI items that are fixed in place, like persistent navigation
        menus that are always visible no matter how much the page scrolls. Let's
        now look at fixed positioning. This works in exactly the same way as
        absolute positioning, with one key difference: whereas absolute
        positioning fixes an element in place relative to its nearest positioned
        ancestor (the initial containing block if there isn't one), fixed
        positioning usually fixes an element in place relative to the visible
        portion of the viewport. (An exception to this occurs if one of the
        element's ancestors is a fixed containing block because its transform
        property has a value other than none.) This means that you can create
        useful UI items that are fixed in place, like persistent navigation
        menus that are always visible no matter how much the page scrolls.
      </div>
    </div>
  );
}
