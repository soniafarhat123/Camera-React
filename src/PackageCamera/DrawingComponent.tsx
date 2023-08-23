import { useEffect, useState } from "react";

import CanvasDraw from "react-canvas-draw";
import { DrawingPops } from "./DrawingInterface";


export const Drawing: React.FC<DrawingPops> = ({
  canvasRef,
  dataPicture,
  updateCanvas,
  canvasWidth,
  canvasHeight
}) => {
  const [isReady, setIsReady] = useState<any>(false);
  const [canvasSize, setCanvasSize] = useState<any>({});


  useEffect(() => {
    const imageFromCamera = new Image();
    imageFromCamera.onload = function () {
      let height = Math.round(
        window.innerWidth / (imageFromCamera.width / imageFromCamera.height)
      );
      let width = window.innerWidth;
      // Get the proportion
      let prop = width / height;
      // If height too important, rescale
      let diff = 0;
      if (height > window.innerHeight - 100) {
        diff = height - (window.innerHeight - 100);
        height = window.innerHeight - 100;
        width -= prop * diff;
      }

      setCanvasSize({ width: width, height: height });
      setIsReady(true);
      updateCanvas(imageFromCamera);
    };
    imageFromCamera.src = dataPicture;
  }, [dataPicture]);

  return (
    <>
      {isReady && (
        <CanvasDraw
          ref={canvasRef}
          loadTimeOffset={2}
          lazyRadius={5}
          brushRadius={5}
          catenaryColor={"#00000000"}
          hideGrid={false}
          brushColor="#ff9200"
          imgSrc={dataPicture}
          canvasWidth={canvasWidth?canvasWidth:canvasSize.width }
          canvasHeight={canvasHeight?canvasHeight:canvasSize.height }
        />
      )}
    </>
  );
};

{
  /* <IonButton onClick={close}>back</IonButton>
<IonButton onClick={handleUndo}>undo </IonButton>
<IonButton onClick={handleClear}>delete</IonButton>
<IonButton onClick={handleDrawingData}>done</IonButton> */
}
