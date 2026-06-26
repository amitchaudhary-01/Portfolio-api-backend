import express from "express";
import cors from "cors";
import dbConnect from "./config/db.js";
import path from "path"
import dotenv from "dotenv"
import TableRouter from "./routes/table.routes.js";
// Controllers
import { getUser, userCreate, getUserbyId, updateUser, deleteUser } from "./controller/user.controller.js";
import { getProduct, getProductById, productCreate, updateProduct } from "./controller/product.controller.js";
import { getForm, uformCreate } from "./controller/userform.controller.js";
import { deleteTable, getTable, getTablebyId,  updateTable } from "./controller/table.controller.js";
import { editCreate, getEdit, getEditbyId, updateEdit } from "./controller/edit.controller.js";

// Test schema (if needed directly here)
import { Test } from "./schema/test.js";

//tableproduct controllers//
import { deleteTableProduct, getTableProduct, getTableProductbyId, tableproductCreate, updateTableProduct } from "./controller/tableproduct.controller.js";

/////multer middleware/////////////
import { upload } from "./middlerware/multer.js";

const app = express();

dotenv.config()

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use('/uploads', express.static('uploads'));


// Connect Database
dbConnect();

// Base Route
app.get("/", (req, res) => {
  res.send("Data is integrated to schema mongodb/ test/ user ");
});

// Projects Static Route
app.get("/projects", (req, res) => {
  res.json([
    { id: 1, name: "Kapda", category: "Fashion Shop", link: "https://kapda-phi.vercel.app/" },
    { id: 2, name: "Movie Search", category: "Entertainment", link: "https://movie-search-application-xi.vercel.app/" },
    { id: 3, name: "Product Table", category: "Dynamic Routing", link: "https://product-table-with-dynamic-routing.vercel.app/" },
    { id: 4, name: "Joke Generator", category: "Funny and entertainment", link: "https://joke-eosin-delta.vercel.app/" },
  ]);
});

/* ==========================================================
   TEST ROUTES
   ========================================================== */
// FIXED: Changed from .get to .post since it creates data using req.body
app.post("/test", async (req, res) => {
  try {
    const { caption, image } = req.body;
    const test = await Test.create({ caption, image });
    res.status(200).json({ 
      message: "test created successfully", data: test });
  } catch (error) {
    res.status(500).json({ 
      message: "server error" });
  }
});

app.get("/gettest", async (req, res) => {
  try {
    const testData = await Test.find();
    res.status(200).json({ 
      message: "test data in database", 
      data: testData });
  } catch (error) {
    res.status(500).json({ 
      message: "Server Crashed" });
  }
});

/* ==========================================================
   USER & PRODUCT CREATION ROUTES
   ========================================================== */
// FIXED: Changed from .get to .post to correctly accept req.body payload
app.post("/add", userCreate);
app.post("/reg", productCreate);

/* ==========================================================
   PRODUCT MANAGEMENT ROUTES
   ========================================================== */
app.get("/getproduct", getProduct);
app.get("/getproduct/:id", getProductById);
// FIXED: Changed from .get to .put for resource update
app.put("/productupdate/:id", updateProduct);

/* ==========================================================
   USER MANAGEMENT ROUTES
   ========================================================== */
app.get("/getusers", getUser);
app.get("/getuser/:id", getUserbyId);
// FIXED: Changed from .get to .put for resource update
app.put("/userupdate/:id", updateUser);
// FIXED: Changed from .get to .delete for cleaner semantics
app.delete("/deleteuser/:id", deleteUser);

/* ==========================================================
   FORM & TABLE ROUTES
   ========================================================== */
// app.post("/form", uformCreate);

app.use("/api/v1/table",TableRouter)

// app.use("/api/v1/gettable", getTable);
// app.get("/gettable/:id", getTablebyId);
// app.put("/updatetable/:id",upload.single("image"), updateTable);
// app.delete("/deletetable/:id", deleteTable);

/* ==========================================================
   EDIT ROUTES
   ========================================================== */
app.post("/edit", editCreate);
app.get("/getedit", getEdit);
app.get("/getedit/:id", getEditbyId);
// FIXED: Changed from .get to .put for updates
app.put("/updateedit/:id", updateEdit);


/* ==========================================================
   tableproduct ROUTES
   ========================================================== */
   app.post("/producttable",upload.single("image"),tableproductCreate)

   app.get("/producttable",getTableProduct)

   app.get("/producttable/:id",getTableProductbyId)

   app.put("/producttable/:id",upload.single("image"),updateTableProduct)

   app.delete("/producttable/:id",deleteTableProduct)

/////////////form user/////////
   app.post("/uform",upload.array("images", 5),uformCreate)

   app.get("/getform",getForm)
  

   
// Run Server
app.listen(2001, () => {
  console.log("Server running on http://localhost:2001");
});






