const path = require("path")
module.exports={
    entry:"./unit5/note/index.js",
    output:{
        path:path.join(__dirname,"unit5/note"),
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader"]
            }
        ]
    }
}