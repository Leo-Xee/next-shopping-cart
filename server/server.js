// json-server
const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

// lowdb
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync(path.join(__dirname, "db.json"));
const db = low(adapter);

server.use(middlewares);

server.use(jsonServer.bodyParser);

/**
 * Products
 */

/** 전체 상품 조회 */
server.get("/products", (req, res) => {
  res.status(200).json(db.get("products"));
});

/** 특정 상품 조회 */
server.get("/products/:productId", (req, res) => {
  const { productId } = req.params;
  console.log(typeof productId, productId);

  if (!Number(productId)) {
    return res.sendStatus(400);
  }

  const product = db
    .get("products")
    .find((product) => product.id === Number(productId))
    .value();

  res.status(200).json(product);
});

/** 상품 추가 */
server.post("/products", (req, res) => {
  const { price, name, imageUrl } = req.body;

  if (
    !Number.isInteger(price) ||
    typeof name !== "string" ||
    typeof imageUrl !== "string"
  ) {
    res.sendStatus(400);
  } else {
    db.get("products").push({ id: Date.now(), price, name, imageUrl }).write();
    res.sendStatus(201);
  }
});

/**
 * Carts
 */

/** 전체 카트 조회 */
server.get("/carts", (req, res) => {
  res.status(200).json(db.get("carts"));
});

/** 카트 추가 */
server.post("/carts", (req, res) => {
  const { product } = req.body;
  const { id, price, name, imageUrl } = product;

  if (
    !Number.isInteger(price) ||
    !Number.isInteger(id) ||
    typeof name !== "string" ||
    typeof imageUrl !== "string"
  ) {
    return res.sendStatus(400);
  }

  const targetIdx = db
    .get("carts")
    .findIndex((cart) => cart.product.id === id)
    .value();

  if (targetIdx < 0) {
    db.get("carts")
      .push({
        id: Date.now(),
        product: {
          ...product,
          quantity: 1,
          selected: false,
        },
      })
      .write();
  } else {
    db.get("carts")
      .forEach((cart, idx) => {
        if (targetIdx === idx) {
          cart.product.quantity += 1;
        }
      })
      .write();
  }

  res.sendStatus(201);
});

/** 전체 카트를 선택 여부 변경 */
server.patch("/carts/selected", (req, res) => {
  const { selected } = req.body;

  if (typeof selected !== "boolean") {
    return res.sendStatus(400);
  }

  db.get("carts")
    .forEach((cart) => {
      cart.product.selected = selected;
    })
    .write();

  res.sendStatus(200);
});

/** 특정 카트의 선택 여부 변경 */
server.patch("/carts/:cartId/selected", (req, res) => {
  const { selected } = req.body;
  const { cartId } = req.params;

  if (typeof selected !== "boolean" || !Number(cartId)) {
    return res.sendStatus(400);
  }

  const targetIdx = db
    .get("carts")
    .findIndex((cart) => cart.id === Number(cartId))
    .value();

  if (targetIdx < 0) {
    return res.sendStatus(400);
  }

  db.get("carts")
    .forEach((cart, idx) => {
      if (targetIdx === idx) {
        cart.product.selected = selected;
      }
    })
    .write();

  res.sendStatus(200);
});

/** 특정 카트의 수량 변경 */
server.patch("/carts/:cartId/quantity", (req, res) => {
  const { cartId } = req.params;
  const { quantity } = req.body;

  console.log(typeof cartId, cartId);
  console.log(typeof quantity, quantity);

  if (!Number(quantity) || !Number(cartId)) {
    return res.sendStatus(400);
  }

  const targetIdx = db
    .get("carts")
    .findIndex((cart) => cart.id === Number(cartId))
    .value();

  if (targetIdx < 0) {
    return res.sendStatus(400);
  }

  db.get("carts")
    .forEach((cart, idx) => {
      if (targetIdx === idx) {
        cart.product.quantity = quantity;
      }
    })
    .write();

  res.sendStatus(200);
});

/** 특정 카트들을 삭제 */
server.delete("/carts", (req, res) => {
  const { deleteItems } = req.query;
  const cartIdList = deleteItems.split(",");

  if (!Array.isArray(cartIdList)) return res.sendStatus(400);

  cartIdList.forEach((cartId) => {
    if (!Number(cartId)) return res.sendStatus(400);
  });

  for (let i = 0; i < cartIdList.length; i++) {
    const targetIdx = db
      .get("carts")
      .findIndex((cart) => cart.id === Number(cartIdList[i]))
      .value();

    db.get("carts").splice(targetIdx, 1).write();
  }

  res.sendStatus(200);
});

/** 특정 카트 삭제 */
server.delete("/carts/:cartId", (req, res) => {
  const { cartId } = req.params;

  if (!Number(cartId)) {
    return res.sendStatus(400);
  }

  const targetIdx = db
    .get("carts")
    .findIndex((cart) => cart.id === Number(cartId))
    .value();

  if (targetIdx < 0) {
    return res.sendStatus(400);
  }

  const result = db.get("carts").splice(targetIdx, 1).write();

  console.log(result);

  res.sendStatus(200);
});

/**
 * Orders
 */

/** 전체 주문 조회 */
server.get("/orders", (req, res) => {
  res.status(200).json(db.get("orders"));
});

/** 주문 추가 */
server.post("/orders", (req, res) => {
  const { orderDetails } = req.body;

  for (const orderDetail of orderDetails) {
    const { quantity, price, name, imageUrl } = orderDetail;

    if (
      !Number.isInteger(quantity) ||
      quantity < 1 ||
      !Number.isInteger(price) ||
      typeof name !== "string" ||
      typeof imageUrl !== "string"
    ) {
      res.sendStatus(400);
      return;
    }
  }

  db.get("orders")
    .push({
      id: Date.now(),
      orderDetails,
    })
    .write();
  res.sendStatus(201);
});

// default router
server.use(router);

server.listen(3003, () => {
  console.log("JSON Server is running");
});
