const express = require("express");
const Invoice = require("../model/invoice.model.js");
const router = express.Router();
const {getInvoices, getInvoice, createInvoice, updateInvoice, deleteInvoice} = require('../controller/invoice.controller.js');


router.get('/', getInvoices);
router.get("/:id", getInvoice);

router.post("/", createInvoice);

// update a Invoice
router.put("/:id", updateInvoice);

// delete a Invoice
router.delete("/:id", deleteInvoice);




module.exports = router;