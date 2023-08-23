import CanvasDraw from "react-canvas-draw";

const handleUndo = (canvasRef: React.RefObject<CanvasDraw>) => {
    canvasRef?.current?.undo();
  };
  
  const handleDelete = (canvasRef: React.RefObject<CanvasDraw>) => {
    canvasRef?.current?.clear();
  };
  
  const  handleDrawingData =  (canvasRef:React.RefObject<CanvasDraw | any>,canvasImg:any) =>{
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = canvasImg.width;
    tempCanvas.height = canvasImg.height;
    const context = tempCanvas.getContext("2d");
    const drawing = canvasRef?.current?.canvas.drawing;
    context?.drawImage(canvasImg, 0, 0);
    context?.drawImage(
      drawing,
      0,
      0,
      drawing.width,
      drawing.height,
      0,
      0,
      canvasImg.width,
      canvasImg.height
    );
    const drawnPicture = tempCanvas.toDataURL("image/jpeg", 0.92);
    return drawnPicture;
  }

  
  export { handleDelete, handleUndo, handleDrawingData };