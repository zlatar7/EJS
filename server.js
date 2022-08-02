const express =require('express')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs')

const arrayProductos = [{nombre: "mochila", precio: 5000, foto:"https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Backpack-256.png"},
                        {nombre:"regla", precio: 1000, foto:"https://cdn0.iconfinder.com/data/icons/mac-applications-icons-by-omer-cetin/128/ruler.png"},
                        {nombre:"transportador", precio: 250, foto:"https://cdn1.iconfinder.com/data/icons/office-material-9/128/curve_ruler_protactor_ruler_set_square_stationary-128.png"},
                        {nombre:"lapicera", precio: 120, foto:"https://cdn2.iconfinder.com/data/icons/scrap/Pen.png"}]

app.get("/",(req,res)=>{
    res.render("form")
})
app.get("/productos",(req,res)=>{
    res.render("index", {arrayProductos})
})

app.post("/productos", (req, res)=>{
    const {title, price, thumbnail} = req.body
    const productoRecibido = {nombre: title, precio: price, foto:thumbnail}
    arrayProductos.push(productoRecibido)
    res.redirect("/")
})

const PORT = process.env.PORT || 8000
app.listen(PORT, ()=>{
    console.log(`El servidor está corriendo en el puerto: ${PORT}`)
})