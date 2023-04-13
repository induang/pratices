import { MouseEvent, useState } from "react";
import clsx from "clsx";

const DragNDrop = () => {
  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    const { currentTarget } = event;
    let shiftX = event.clientX - currentTarget.getBoundingClientRect().left;
    let shiftY = event.clientY - currentTarget.getBoundingClientRect().top;
    const currentParent = currentTarget.parentElement;

    currentTarget.style.position = "absolute";
    currentTarget.style.zIndex = "1000";
    document.body.append(currentTarget);

    function moveAt(pageX: number, pageY: number) {
      currentTarget.style.left = pageX - shiftX + "px";
      currentTarget.style.top = pageY - shiftY + "px";
    }

    moveAt(event.pageX, event.pageY);

    function onMouseMove(event: MouseEvent<HTMLDivElement>) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener("mousemove", onMouseMove);

    currentTarget.onmouseup = function () {
      document.removeEventListener("mousemove", onMouseMove);
      currentTarget.onmouseup = null;
      currentTarget.onmousedown = null;
      currentParent?.append(currentTarget);
    };

    currentTarget.ondragstart = function () {
      return false;
    };
  };

  return (
    <div>
      <div
        className={clsx(
          "m-auto",
          "mt-10",
          "w-24",
          "h-24",
          "bg-teal-300",
          "rounded-full"
        )}
        onMouseDown={handleMouseDown}
      ></div>
    </div>
  );
};

export default DragNDrop;
