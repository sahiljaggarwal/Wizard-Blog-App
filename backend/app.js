import express from "express";
import mongoose from "mongoose"
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
const app = express();

app.use(express.json())
app.use("/api/user", router); 
app.use("/api/blog", blogRouter);

mongoose.connect(`mongodb+srv://admin:9817758309@cluster0.jetjcrl.mongodb.net/WizardBlog?retryWrites=true&w=majority`
).then(() => app.listen(5000)).then(() => console.log("Connected To DataBase Listening To localhost")).catch((err)=>console.log(err))


app.use("/", (req, res, next) => {
    res.send("Internal error")
})

