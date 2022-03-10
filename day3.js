const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://harsh:harsh001@cluster0.84eyj.mongodb.net/UNIT4?retryWrites=true&w=majority"
  );
};

// USER SCHEMA
// Step 1 :- creating the schema
const section1 = new mongoose.Schema(
  {
    name: { type: String, required: true },
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "book",
      required: false,
    }
  },
  {
    timestamps: true, 
  }
);

const section= mongoose.model("section", section1); 

const books = new mongoose.Schema(
  {
    name: { type: String, required: true },
    body: { type: String, required: true },
    sectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "section",
      required: true,
    },
    authorId:{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "author",
      required: true
    }
  },
  {

    timestamps: true, 
  }
);

const book = mongoose.model("book", books); 

const author1 = new mongoose.Schema(
  {
    first_name:{ type: String, required: true}, 
    last_name:{ type: String, required: true},
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "book",
      required: false,
    }
    },
  {
    versionKey: false,
    timestamps: true,
  }
);

const author = mongoose.model("author", author1); 

// CRUD OPERATIONS
// get => getting data from the server
// post => adding data to the server
// put / patch => updating data in the server
// delete => deleting data from the server

// USERS CRUD

app.post("/author", async (req, res) => {
  try {
    const authors1 = await author.create(req.body);

    return res.status(201).send(authors1);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.get("/books", async (req, res) => {
  try {
    const books1 = await  book.find().lean().exec();

    return res.status(200).send({ author: books1 }); // []
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Something went wrong .. try again later" });
  }
});

app.get("/section", async (req, res) => {
  try {
    const books1 = await  section.find().lean().exec();

    return res.status(200).send({ author: books1 }); // []
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Something went wrong .. try again later" });
  }
});

app.get("/authors", async (req, res) => {
  try {
    const author1 = await  author.find().lean().exec();

    return res.status(200).send({ author: author1 }); // []
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Something went wrong .. try again later" });
  }
});



// // body => req.body
// // url => req.params
// // query string => req.query

// app.get("/users/:id", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id).lean().exec();
//     // db.users.findOne({_id: Object('622893471b0065f917d24a38')})

//     return res.status(200).send(user);
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });

// app.patch("/users/:id", async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     })
//       .lean()
//       .exec();
//     // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})

//     return res.status(200).send(user);
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });

// app.delete("/users/:id", async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id).lean().exec();
//     // db.users.deleteOne({_id: Object('622893471b0065f917d24a38')})

//     return res.status(200).send(user);
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });

// // POSTS CRUD
// app.get("/posts", async (req, res) => {
//   try {
//     const posts = await Post.find().lean().exec();

//     return res.status(200).send(posts);
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });

// app.post("/posts", async (req, res) => {
//   try {
//     const post = await Post.create(req.body);

//     return res.status(200).send(post);
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });

// app.get("/posts/:id", async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id).lean().exec();

//     return res.status(200).send(post);
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });

// app.patch("/posts/:id", async (req, res) => {
//   try {
//     const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     })
//       .lean()
//       .exec();

//     return res.status(200).send(post);
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });

// app.delete("/posts/:id", async (req, res) => {
//   try {
//     const post = await Post.findByIdAndDelete(req.params.id).lean().exec();

//     return res.status(200).send(post);
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });

app.listen(5000, async () => {
  try {
    await connect();
  } catch (err) {
    console.log(err);
  }

  console.log("listening on port 5000");
});
