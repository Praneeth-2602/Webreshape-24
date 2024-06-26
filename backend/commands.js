const User = require('./users')
const {body, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Borrower = require('./borrowers');
const secret = "MynameisLokeshBoddupelly@"




const createUser =

   [
    body('email').isEmail(),
    body('password',).isLength({min :5}),
    body('name').isLength({min:5})
  
    ,async (req , res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        let salt = await bcrypt.genSalt(10)
        let securePassword = await bcrypt.hash(req.body.password,salt)
        
        try {
            await User.create({
                name: req.body.name,
                password: securePassword,
                email: req.body.email,
                location: req.body.location
    
            })
          
            res.json({success:true})
            
        } catch (error) {
            console.log(error)
            res.json({success:false})
         
        }
    }
];

const loginUser =

   [
    body('email').isEmail(),
    body('password',).isLength({min :5})
   
  
    ,async (req , res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        let email =req.body.email
        
        try {
            let userData = await User.findOne({email})
            if(!userData){
                return res.status(400).json({errors: "USer doesnot exist"});
            }

            let passwordCompare = await bcrypt.compare(req.body.password ,userData.password)
            if(!passwordCompare ){
                return res.status(400).json({errors: "Enter the correct password"});
            }
            const data ={
                user:{
                    id:userData.id
                }
            }
            let authToken = jwt.sign(data,secret)
            return res.json({success:true,authToken:authToken})


            
        } catch (error) {
            console.log(error)
            res.json({success:false})
         
        }
    }
];


const borrow = async (req, res) => {
    try {
      

        await Borrower.create({
            name: req.body.name,
            bookTitle: req.body.title
        });

        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
}

module.exports = { createUser , loginUser , borrow }