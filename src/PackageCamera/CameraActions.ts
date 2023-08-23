import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

   export  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
      saveToGallery: false,
    });
    const photoBase64 = 'data:image/jpeg;base64,' + image.base64String;
    return photoBase64

  }

  
