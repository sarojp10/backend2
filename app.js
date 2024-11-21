
require('dotenv').config()
const express = require('express')
const connectDatabase = require("./highdatabase")
const person = require('./personModel')

connectDatabase()
const app = express()
// app.use(express.json())
// const {multer,storage} = require('./middleware/multerConfig')
// const upload = multer({storage : storage})
// const fs = require('fs')
// const cors = require('cors')

app.get('/',(req,res)=>{
    res.send("Welcome to home page")
})
app.get('/',(req,res)=>{
    res.status(200).json({
        message : "Welcome to home page."
    })
})


// app.use(cors(
//     {
//         origin : "https://binayakbhandari.vercel.app"
//     }
// ))
           

// app.post('/person',upload.single('personImage'),async (req,res)=>{
    app.post('/person', (req,res)=>{ 
    // const boyImage = "https://img.freepik.com/premium-photo/cute-boy-cartoon-hd-8k-wallpaper-stock-photographic-image_1030895-53582.jpg"
    // const girlImage = "https://sharedp.com/wp-content/uploads/2024/06/cute-dp-for-girls-cartoon-4k-960x1024.jpg"
    // const { personName, personProfession, personAge, personHobbies, personGender, personStatus, personLink, personMoto } = req.body
    // let filename;
    // if(req.file){
    //     filename = "https://mern3-0-node-profilecard.onrender.com/" + req.file.filename
    // }else{
    //     filename = personGender === "male" ? boyImage : girlImage
    // }

    // if(!personName || !personProfession || !personAge || !personHobbies || !personStatus || !personLink || !personMoto){
    //     return res.status(400).json({
    //         message : "Please enter title, subtitle or description "
    //     })
    // }
    // await Person.create({
    //     personName : personName,
    //     personProfession : personProfession,
    //     personAge : personAge,
    //     personHobbies : personHobbies,
    //     personGender : personGender,
    //     personStatus : personStatus,
    //     personLink : personLink,
    //     personMoto : personMoto,
    //     personImage : filename

    // })
    res.status(200).json({
        message : "Blog created successfully"
    })
})

// Read Operation with find() method 
// app.get('/person',async (req,res)=>{
//     const persons = await Person.find()
//     res.status(200).json({
//         message : "Blogs fetched successfully",
//         data : persons
//     })
// })

// Single read operation with findById() method
// app.get('/person/:id',async (req,res)=>{
//     const id = req.params.id
//     const person = await Person.findById(id)

//     if(!person){
//         return res.status(404).json({
//             message : "No data found"
//         })
//     }
//     res.status(200).json({
//         message : "Blog fetched successfully",
//         data : person
//     })
// })

// Delete operation
// app.delete("/person/:id", async (req, res) => {
//     const id = req.params.id
//     const person = await Person.findById(id)
//     const imageName = person.personImage.split('/').pop()
//     // const imageName = person.personImage

//     if(imageName){
//         fs.unlink(`storage/${imageName}`, (err) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 console.log("File deleted successfully")
//             }
//         })
//     }else{
//         console.log("File not found in this blog")
//     }

//     await Person.findByIdAndDelete(id)
//     res.status(200).json({
//         message: "Blog deleted successfully"
//     })
// })

// Update operation
// app.patch("/person/:id",upload.single('personImage'),async (req,res)=>{
//     const id = req.params.id
//     const { personName, personProfession, personAge, personHobbies, personGender, personStatus, personLink, personMoto } = req.body
//     let filename;
//     if(req.file){
//         filename = "https://mern3-0-node-profilecard.onrender.com/" + req.file.filename
//         const person = await Person.findById(id)
//         const imageName = person.personImage.split('/').pop()
//         // const imageName = person.personImage
//         console.log(imageName)
//         fs.unlink( `storage/${imageName}`, (err)=>{
//             if(err){
//                 console.log(err)
//             }else{
//                 console.log("File deleted successfully")
//             }
//         })
//     }

//     await Person.findByIdAndUpdate(id,{
//         personName : personName,
//         personProfession : personProfession,
//         personAge : personAge,
//         personHobbies : personHobbies,
//         personGender : personGender,
//         personStatus : personStatus,
//         personLink : personLink,
//         personMoto : personMoto,
//         personImage : filename
//     })
//     res.status(200).json({
//         message : "Blog updated successfully"
//     })
// })


//app.use(express.static('./storage'))


app.listen(process.env.PORT, ()=>{
    console.log("NodeJS project started")
})


