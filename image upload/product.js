const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const upload = multer({dest: "uploads/"});

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null,'./uploads/');
      },
  filename: function(req, file, cb){
    cb(null, new Date().toISOString().replace(/:/g,'-'))
  }
});

const fileFilter = (req, file, cb) =>{
  if(file.mimetype === 'image/jpg' || file.mimetype ='image/png' || file.mimetype= 'image/jpeg'){
    cb(null, true);
  } else
  cb(null, false);
  }
};


const upload = multer({storage: storage,
  limits:{
  fileSize: 1024 * 1024 *5
},
fileFilter: fileFilter
});
const product = require("../models/products");

router.get("/", req,res,next) =>{
  Product.find()
  .select("name price_id productImage")
  .exec()
  .then docs( => {8
    const response ={
      count: docs.length,
      products: docs.map(doc =>{
        return{
          name: doc.name,
          price: doc.price,
          productImage: doc.productImage,
          _id: doc._id,
          request: {
            type: "GET",
            url: "https://localhost:3000/products/" +doc. _id
          }
        };
      })
    }

  })
};
router.post("/",upload.single('productImage'),(req,res,next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    product: req.file.path,
  });
product
  .save()
  .then( result =>{
    console.log(result);
    res.status(201).json({
      message: "Created product succesfully",
      createdProduct: {

      })
  })
});

const mongoose = require("mongoose");

const productRoutes = api(".api/routes/products");
const orderRoutes = require(".api/routes/orders");

mongose.connect{
"*mongodb://node-shop" +
  process.env.MONGO_ATLAS_PW +
  "*"
  {
    useMongoClient: ture,
  }
  };

  mongoose.Promise = global.Promise;

  app.use(express.static('uploads'));
  app.use(morgan("dev"))
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
