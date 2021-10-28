const express = require('express')
const mongoose = require('mongoose');
const path = require('path')
const app = express();
const multer  = require('multer')
const cors = require('cors');
const registerVolunteerModel = require('./Models/RegisterVolunteerModel');
const voluinteerRouter = require('./Router/VolunteerListRouter');
const AddEventModel = require('./Models/AddEventModel');
const { readFile } = require('fs');


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(express.static('../server/publicAccess'))

const uri = 'mongodb://nawtikaSchool:nawtikaShool4281@cluster0-shard-00-00.mgll3.mongodb.net:27017,cluster0-shard-00-01.mgll3.mongodb.net:27017,cluster0-shard-00-02.mgll3.mongodb.net:27017/volunteer?ssl=true&replicaSet=atlas-6onnuf-shard-0&authSource=admin&retryWrites=true&w=majority'


    mongoose.connect(uri,(err)=>{
        if(err){
                 console.log(err);
          }
        else{
            console.log('connection successfull');
        }
        })









//  multer diskstorage control 

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname,'../server/publicAccess'))
    },
    filename: function(req, file, callb){
        const fakeFileName = file.originalname;
        const extntion = path.extname(fakeFileName);


    
            const realFile = fakeFileName.split('.'&&' ');
            console.log(realFile);
            const date = Date.now();
            const getRealFile = realFile[0].toLocaleLowerCase()+'-'+date+extntion;
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






app.post('/post-add-event', upload.single("file"), async(req, res)=>{
        const domainName = 'http://localhost:5000/images/'; 

        const fileName = req.file.filename
        console.log(fileName);

       const addEventInfo = req.body;
       addEventInfo.imageUrl = `${domainName}${fileName}`;

       const eventInfoSave = await AddEventModel(req.body)
       eventInfoSave.save(err=>{
        if (err) {
            console.log(err);
        }
        else{
            console.log(eventInfoSave);
        }
       })



        console.log(req.body);




})



app.post('/volunteer-registration', async(req,res)=>{
    console.log(req.body);

    const infoAdd = await new registerVolunteerModel(req.body);
    infoAdd.save((err)=>{
        if (!err) {
            res.status(200).json({msg:infoAdd})
        }
        else{
           res.status(400).json({errMsg:"Please fill up the full form"})
        }
    });
    console.log(infoAdd);
 

})

app.use('/volunteers',voluinteerRouter)

// app.use('/add-new-event')







app.use((err, req, res, next)=>{
    res.status(500).json({errMsg:"Server Side error. Please Wait"})
})


app.get('/images/:id',(req,res)=>{

console.log(req.params);
const {id} = req.params;
const image = path.join(__dirname, `/publicAccess/${id}`)
console.log(image);

readFile(image,(err, data)=>{
    if (err) {
        console.log(err);
    }
    else{
       
        res.end(data)
    }
    
})











})













app.listen(5000, ()=>{
    console.log('Server running');
})