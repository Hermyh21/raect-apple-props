const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("<h1> up and running ...</h1>"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "evangadi",
  password: "1219",
  database: "mydb",
});

// Define your table creation queries
app.get("/install", (req, res) => {
  let msg = "Tables Created";

  let createProducts = `CREATE TABLE if not exists Products (
    product_id int auto_increment,
    product_url varchar(255),
    product_name varchar(255),
    description TEXT,
    monthly_plan varchar(255),
    PRIMARY KEY (product_id)
)`;

  let createProductDescription = `CREATE TABLE if not exists ProductDescription (
    description_id int auto_increment,
    product_id int not null,
    product_brief_description TEXT not null,
    product_description TEXT not null,
    product_img varchar(255) not null,
    product_link varchar(255) not null,
    PRIMARY KEY (description_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
)`;

  let createProductPrice = `CREATE TABLE if not exists ProductPrice (
    price_id int auto_increment,
    product_id int not null,
    starting_price varchar(255) not null,
    price_range varchar(255) not null,
    PRIMARY KEY (price_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
)`;

  let createUser = `CREATE TABLE if not exists user (
    user_id int auto_increment,
    user_name varchar(200) not null,
    user_password varchar(200) not null,
    PRIMARY KEY (user_id)
)`;

  let createOrders = `CREATE TABLE if not exists orders (
    order_id int auto_increment,
    product_id int not null,
    user_id int not null,
    PRIMARY KEY (order_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id)
)`;

  // app.get("/install", (req, res) => {
  //     let msg = "Tables Created";

  // First, create the user table
  connection.query(createUser, (err, result, fields) => {
    if (err) {
      console.log(`Error Found in createUser: ${err}`);
      res.status(500).send(err);
      return;
    }

    // Then, create the Products table
    connection.query(createProducts, (err, result, fields) => {
      if (err) {
        console.log(`Error Found in createProducts: ${err}`);
        res.status(500).send(err);
        return;
      }

      // Create the ProductDescription table
      connection.query(createProductDescription, (err, result, fields) => {
        if (err) {
          console.log(`Error Found in createProductDescription: ${err}`);
          res.status(500).send(err);
          return;
        }

        // Create the ProductPrice table
        connection.query(createProductPrice, (err, result, fields) => {
          if (err) {
            console.log(`Error Found in createProductPrice: ${err}`);
            res.status(500).send(err);
            return;
          }

          // Finally, create the orders table
          connection.query(createOrders, (err, result, fields) => {
            if (err) {
              console.log(`Error Found in createOrders: ${err}`);
              res.status(500).send(err);
              return;
            }
            res.end(msg);
          });
        });
      });
    });
  });
});

app.post("/add-product", (req, res) => {
  const { product_url, product_name, description, monthly_plan } = req.body;

  let insertProductUrl = `INSERT INTO Products (product_url, product_name, description, monthly_plan) VALUES ("${product_url}", "${product_name}", "${description}", "${monthly_plan}")`;
  connection.query(insertProductUrl, (err, results) => {
    if (err) {
      console.log(`Error Found in add-product: ${err}`);
      res.status(500).send(err);
    } else {
      console.log("Product added successfully");
      res.json({ message: "Product added successfully", data: results });
    }
  });
});
app.get("/products", function (req, res) {
  let query = "SELECT * FROM products";

  connection.query(query, function (error, results, fields) {
    if (error) {
      console.error("Error fetching data: ", error);
      res.status(500).send("Error fetching data");
    } else {
      console.log("Data fetched successfully");
      res.json(results);
    }
  });
});
connection.connect((err) => {
  if (err) {
    console.log(`Error connecting to the database: ${err}`);
    return;
  }
  console.log("Connected to MySql");
});

app.listen(2222, () => console.log("Server running on port 2222"));
