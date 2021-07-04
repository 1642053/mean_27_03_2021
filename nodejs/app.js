const express = require('express');
const app = express();

// gọi body-paser
const bodyPaser = require('body-parser');
// x-www-form-urlencoded
app.use(bodyPaser.urlencoded({extended: false}));
// json
app.use(bodyPaser.json());

// mở api
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', (req, res)=>{
    res.send('Xin chào trang chủ');
});

app.get('/list_products', (req, res)=>{
    var obj = [
        { name: 'A', age: 18 },
        { name: 'B', age: 19 },
        { name: 'C', age: 20 }
    ]
    
    res.send({ kq:1, obj });
});

app.post('/contactForm', (req, res)=>{
    // khai báo
    var name = email = phone = message = err = '', flag=1; 
    // lấy dữ liệu
    name = req.body.name;
    email = req.body.email;
    phone = req.body.phone;
    message = req.body.message;
    // kiểm tra dữ liệu
    // thành công
    if(flag == 1){
        var obj = { name, email, phone, message };
        res.send({kq:1, obj});
    }
    else{
        res.send({kq:0, err});
    }
});

function dequy(obj=[], id='')
{
    var json=[];

    obj.forEach(e=>{
        if(e.parents == id){
            json.push({
                name: e.name,
                alias: e.alias,
                parents: dequy( obj, e.name )
            })
        }
    });

    return json;
}

app.get('/categories', (req, res)=>{
    var obj = [
        // Cấp 0
        { name: 'A', alias: 'a', parents: [''] },
        { name: 'B', alias: 'b', parents: [''] },

        // Cấp 1
        { name: 'A1', alias: 'a1', parents: ['A'] },
        { name: 'A2', alias: 'a2', parents: ['A'] },
        { name: 'A3', alias: 'a3', parents: ['A'] },
        // Cấp 1
        { name: 'B1', alias: 'b1', parents: ['B'] },
        { name: 'B2', alias: 'b2', parents: ['B'] },
        { name: 'B3', alias: 'b3', parents: ['B'] },

        // Cấp 2
        { name: 'A11', alias: 'a11', parents: ['A1'] },
        { name: 'A12', alias: 'a12', parents: ['A1'] },
        { name: 'A13', alias: 'a13', parents: ['A1'] },
        // Cấp 2
        { name: 'A21', alias: 'a21', parents: ['A2'] },
        { name: 'A22', alias: 'a22', parents: ['A2'] },
        { name: 'A23', alias: 'a23', parents: ['A2'] },

        // Cấp 2
        { name: 'B11', alias: 'b11', parents: ['B1'] },
        { name: 'B12', alias: 'b12', parents: ['B1'] },
        { name: 'B13', alias: 'b13', parents: ['B1'] },
        // Cấp 2
        { name: 'B21', alias: 'b21', parents: ['B2'] },
        { name: 'B22', alias: 'b22', parents: ['B2'] },
        { name: 'B23', alias: 'b23', parents: ['B2'] },
    ]

    res.send({kq:1, data: dequy(obj)});

    // ý đồ

    /**
        obj = [
            {
                name: 'A', 
                alias: 'a', 
                parents: [
                    {
                        name: 'A1', 
                        alias: 'a1', 
                        parents: [
                            { name: 'A11', alias: 'a11', parents: ['A1'] },
                            { name: 'A12', alias: 'a12', parents: ['A1'] },
                            { name: 'A13', alias: 'a13', parents: ['A1'] }
                        ]
                    },
                    { name: 'A2', alias: 'a2', parents: ['A'] },
                    { name: 'A3', alias: 'a3', parents: ['A'] },
                    ...
                ]
            }
        ]
     */
})

app.listen(3000, ()=>{ console.log('Đã bật Server') });