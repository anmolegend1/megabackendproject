import { v2 as cloudinary} from "cloudinary";
import fs from "fs"

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: CLOUDINARY_API_SECRET
  });


const uploadOnCloudinary = async (localFlepath)=>
    {
        try {
            if(!localFlepath) return null
            //upload the file on cloudinary

            const response=await cloudinary.uploader.upload(localFlepath,{
                resource_type:"auto"
            })
            //file has been uploaded sucessfully
            console.log("FILE HAS BEEN UPLOADED ON CLOUDINARY",response.url)
            return response
      
        } catch (error) {
            fs.unlinkSync(localFlepath) //removed the locally saved temporary file as the upload operation get failed
            return null
        }
    }

export {uploadOnCloudinary}