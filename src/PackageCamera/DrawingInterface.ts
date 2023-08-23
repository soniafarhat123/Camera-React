import CanvasDraw from "react-canvas-draw";

export interface DrawingPops {
    dataPicture: string;
    canvasRef: React.RefObject<CanvasDraw>;
    updateCanvas: (img: Object) => void;
    canvasWidth?:number,
    canvasHeight?:number
  }