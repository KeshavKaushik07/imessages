import multer from 'multer';

const MAX_FILE_SEZE = 25*1024*1024 // 25mb

export const upload = multer({
    storage:multer.memoryStorage(),
    limits:{ fileSize : MAX_FILE_SEZE },
    fileFilter : (req,file,cb) => {
        const isImage = file.mimetype.startsWith("image/");
        const isVideo = file.mimetype.startsWith("video/");

        if(!isImage && !isVideo ){
            cb(new Error("only image and video upoads are allowed"));
            return ;
        }

        cb(null,true);
    }
});