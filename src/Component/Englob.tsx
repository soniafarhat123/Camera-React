import { useRef, useState } from "react";
import { IonButton } from "@ionic/react";
import CanvasDraw from "react-canvas-draw";
import {
  handleDelete,
  handleUndo,
  handleDrawingData,
  takePhoto,
  Drawing,
} from "../PackageCamera";
import Knova from "./Knova";

export const Englobe: React.FC = () => {
  const [draw, setDraw] = useState(false);
  const [dataPicture, setDataPicture] = useState("");
  const [drawData, setdrawData] = useState<string>("");
  const [canvasImg, setCanvasImg] = useState<any>(null);
  const canvasRef = useRef<CanvasDraw | null>(null);

  const updateImg = (img: any) => {
    setCanvasImg(img);
  };
  const _handleUndo = () => {
    handleUndo(canvasRef);
  };

  const _handleDrawingData = () => {
    const drawnPicture = handleDrawingData(canvasRef, canvasImg);
    console.log(drawnPicture);
    setdrawData(drawnPicture);
    setDraw(false);
  };

  const _handleDelete = () => {
    handleDelete(canvasRef);
  };
  const getPicture = async () => {
    const dataUri = await takePhoto();
    console.log(dataUri);
    setDataPicture(dataUri);
    setDraw(true);
  };

  return !draw ? (
    <>
      <IonButton onClick={getPicture}>Prendre une photo</IonButton>
      {!!drawData && <img src={drawData} alt="" />}
    </>
  ) : (
    <>
      <Drawing
        updateCanvas={updateImg}
        dataPicture={dataPicture}
        canvasRef={canvasRef}
      />

      <div>
        <IonButton onClick={_handleUndo} size="large">
          undo
        </IonButton>
        <IonButton onClick={_handleDelete} size="large">
          delete
        </IonButton>
        <IonButton size="large">Line</IonButton>
        <IonButton onClick={_handleDrawingData} size="large">
          save
        </IonButton>
      </div>
    </>
  );
};
