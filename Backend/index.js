import express from "express";
import cors from "cors";

const app = express();

app.use(cors()); // IMPORTANT (frontend access fix)

app.get("/",(req,res)=>{
  res.send("Portfolio API is Working")
})

app.get("/projects", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Kapda",
      category: "Fashion Shop",
      link: "https://kapda-phi.vercel.app/",
    },
    {
      id: 2,
      name: "Movie Search",
      category: "Entertainment",
      link: "https://movie-search-application-xi.vercel.app/",
    },
    {
      id: 3,
      name: "Product Table",
      category: "Dynamic Routing",
      link: "https://product-table-with-dynamic-routing.vercel.app/",
    },
  ]);
});

app.listen(2001, () => {
  console.log("Server running on http://localhost:2001");
});