//@ts-nocheck
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Stage, Layer, Rect, Image } from "react-konva";
import useImage from "use-image";



const useCanvas = () => {
    const [image] = useImage(
      "https://upload.wikimedia.org/wikipedia/commons/5/55/John_William_Waterhouse_A_Mermaid.jpg"
    );
    const [canvas, setCanvas] = React.useState(null);
  
    React.useEffect(() => {
      if (!image) {
        return;
      }
      const canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      canvas.width = image.width / 2;
      canvas.height = image.height / 2;
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      setCanvas(canvas);
    }, [image]);
    return canvas;
  };


const DrawAnnotations = () => {
  const [annotations, setAnnotations] = useState([]);
  const [newAnnotation, setNewAnnotation] = useState([]);

  const handleMouseDown = event => {
    if (newAnnotation.length === 0) {
      const { x, y } = event.target.getStage().getPointerPosition();
      setNewAnnotation([{ x, y, width: 0, height: 0, key: "0" }]);
    }
  };

  const handleMouseUp = event => {
    if (newAnnotation.length === 1) {
      const sx = newAnnotation[0].x;
      const sy = newAnnotation[0].y;
      const { x, y } = event.target.getStage().getPointerPosition();
      const annotationToAdd = {
        x: sx,
        y: sy,
        width: x - sx,
        height: y - sy,
        key: annotations.length + 1
      };
      annotations.push(annotationToAdd);
      setNewAnnotation([]);
      setAnnotations(annotations);
    }
  };

  const handleMouseMove = (event:any) => {
    if (newAnnotation.length === 1) {
      const sx = newAnnotation[0].x;
      const sy = newAnnotation[0].y;
      const { x, y } = event.target.getStage().getPointerPosition();
      setNewAnnotation([
        {
          x: sx,
          y: sy,
          width: x - sx,
          height: y - sy,
          key: "0"
        }
      ]);
    }
  };

  const annotationsToDraw = [...annotations, ...newAnnotation];
  const canvas = useCanvas();
  return (
    <Stage
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      width={900}
      height={700}
    >
      <Layer>
      <Image image={canvas} />
        {annotationsToDraw.map((value:any) => {
          return (
            <Rect
              x={value.x}
              y={value.y}
              width={value.width}
              height={value.height}
              fill="transparent"
              stroke="black"
            />
          );
        })}
      </Layer>
    </Stage>
  );
};

export default function Knova() {
  return (
    <div>
      <p>Start to draw!</p>
      <DrawAnnotations />
    </div>
  );
}
