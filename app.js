const express = require('express');
const app = express();
const port = 3050;
const goodsRouter = require('./routers/products_router.js')// routes라는 폴더 안에있는 products.router.js파일을 가져옴 "./" => 현재 경로(NK_MALL), products.router.js 파일에 있는 router를
// 반환 하여 goodsRouter에 할당

const connect = require("./schemas"); // 폴더만 불러와도 사용 가능 const connect = require("./schemas/index.js"); mongoose를 이용해 데이터베이스에 연결
connect();


app.get('/', (req,res) =>{
    res.send('welcome');
});

// localhost:3050/api -> goodsRouter
app.use("/api", [goodsRouter]); // 반환받은 router를 express에 적용(api에 등록), "/api"라는 경로가 추가 된 경우에는 모두 goodsRouter를 통해서 가라 app.'use' 전역미들웨어

app.listen(port, () =>{
    console.log(port, '포트로 서버가 열렸어요');
});

