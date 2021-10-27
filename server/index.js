const express = require('express')
const path = require('path')
const app = express();
const multer  = require('multer')
const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(express.static('../server/publicAccess'))









//  multer diskstorage control 

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname,'../server/publicAccess'))
    },
    filename: function(req, file, callb){
        const fakeFileName = file.originalname;
        const extntion = path.extname(fakeFileName);


    
            const realFile = fakeFileName.split('.');
            console.log(realFile);
            const date = Date.now();
            const getRealFile = realFile[0]+'-'+date+extntion;
            callb(null, getRealFile);
       
       

    }

})


// upload file


    const upload = multer({
        storage:storage,
       
        fileFilter: (req, file, cb)=>{
      
                if (file.mimetype == 'image/jpeg' || file.mimetype =='image/jpg' || file.mimetype=='image/png' || file.mimetype == 'image/svg') {
                    cb(null, true)
                }
                else{
                    return cb(null, false);
                    
                 }
                
          
        }

    
        
    })






app.post('/post', upload.single("file"), (req, res)=>{

        const file = req.file
        console.log(file);

        console.log(req.body);




})



app.post('/volunteer-registration', (req,res)=>{
    console.log(req.body);
})























app.listen(5000, ()=>{
    console.log('Server running');
})