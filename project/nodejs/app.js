const express = require('express');
const app = express();

// Gọi body-paser
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// json web token
const jwt = require('jsonwebtoken');

// mở api
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// api menu
app.get('/api/menu/list', (req, res)=>{

    // dữ liệu này sẽ gọi đến mongodb
    var data = [
        { name: 'Trang chủ', alias: '/' },
        { name: 'Giới thiệu', alias: 'gioi-thieu.html' },
        { name: 'Danh mục', alias: 'danh-muc' },
        { name: 'Sản phẩm', alias: 'san-pham' },
        { name: 'Tin tức', alias: 'tin-tuc' },
        { name: 'Liên hệ', alias: 'lien-he.html' },
        { name: 'Login', alias: 'dang-nhap.html' },
        { name: 'Thông tin User', alias: 'thong-tin-thanh-vien.html' }
    ];

    res.send({kq:1, data});
});

// api category
app.get('/api/category/list', (req, res)=>{

    // dữ liệu này sẽ gọi đến mongodb
    var data = [
        { name: 'Thiết Bị Điện Tử', alias: 'thiet-bi-dien-tu' },
        { name: 'Phụ Kiện Điện Tử', alias: 'phu-kien-dien-tu' },
        { name: 'TV & Thiết Bị Điện Gia Dụng', alias: 'tv-&-thiet-bi-dien-gia-dung' },
        { name: 'Sức Khỏe & Làm Đẹp', alias: 'suc-khoa-&-lam-dep' },
        { name: 'Hàng Mẹ, Bé & Đồ Chơi', alias: 'hang-me-be-&-do-choi' },
        { name: 'Siêu Thị Tạp Hóa', alias: 'sieu-thi-tap-hoa' }
    ];

    res.send({kq:1, data});
});

// api best seller
app.get('/api/product/bestSeller', (req, res)=>{

    // dữ liệu này sẽ gọi đến mongodb
    var data = [
        { name: 'Thiết Bị Điện Tử', alias: 'thiet-bi-dien-tu' },
        { name: 'Phụ Kiện Điện Tử', alias: 'phu-kien-dien-tu' },
        { name: 'Sức Khỏe & Làm Đẹp', alias: 'suc-khoa-&-lam-dep' },
        { name: 'Siêu Thị Tạp Hóa', alias: 'sieu-thi-tap-hoa' }
    ];

    res.send({kq:1, data});
});

// api list prooduct
app.get('/api/list_product/:name_category', (req, res)=>{

    // dữ liệu này sẽ gọi đến mongodb
    var data = [
        { name: 'Sp1', alias: 'sp1', parents: 'name_category' },
        { name: 'Sp2', alias: 'sp2', parents: 'name_category' },
        { name: 'Sp3', alias: 'sp3', parents: 'name_category' },
        { name: 'sp4', alias: 'sp4', parents: 'name_category' },
        { name: 'Sp5', alias: 'sp5', parents: 'name_category' },
        { name: 'Sp6', alias: 'sp6', parents: 'name_category' },
        { name: 'Sp7', alias: 'sp7', parents: 'name_category' },
        { name: 'sp8', alias: 'sp8', parents: 'name_category' },
        { name: 'sp9', alias: 'sp9', parents: 'name_category' }
    ];

    res.send({kq:1, data});
});

var serectKey = '$%$##Fd';

// login
app.post('/login', (req, res)=>{
    // khai báo
    var username, password, err='', flag=1;
    // lấy dữ liệu
    username = req.body.username;
    password = req.body.password;
    // kiểm tra dữ liệu
    // tổng kết
    if(flag == 1){
        // kết nối db
        // kiểm tra 1 lần nữa

        var payload={
            name: 'Họ Tên',
            username,
            email: 'abc@gmail.com'
        };

        jwt.sign(payload, serectKey, {expiresIn: 120}, (err, token)=>{
            if(err){
                res.send({kq:0, err:err});
            }else{
                // lưu lại token
                res.send({kq:1, token});
            }
        });

    }else{
        res.send({kq:0, err});
    }    
});

// api info user
app.get('/api/info_user/:token', (req, res)=>{

    var token = req.params.token;

    jwt.verify(token, serectKey, (err, data)=>{
        if(err){
            res.send({result:0});
        }else{
            res.send({result:1});
        }
    });
});

app.listen(3000, ()=>{ console.log('Đã bật server'); });