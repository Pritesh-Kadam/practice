var express=require('express')
var app=express();

app.get('/',(req,resp)=>{
resp.send(
    "<h1>Welcome to My Web Application</>"
    +"<hr/>"
    +"<li>Laptop<li/>"
    +"<li>Mobile<li/>"
    +"<li>TV<li/>"
    +"<li>Smart Watch<li/>"
    +"<li>Tablet<li/>"
)
});
app.get('/aboutus',(req,resp)=>{
    resp.send(
       "<br/>"
       + "<hr/>"
        +"<h3>Reach us at :pkadam@gmail.com<h3/>"
        +"<h3>Mobile no. 9028896488<h3/>"
       
    )
});


app.listen(9000);
console.log("listening at port 9000");