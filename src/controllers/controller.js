
const Customer = require('../models/customers');
const Transaction = require('../models/transactions');
const Account = require('../models/accounts');

const activeCustomers = async (req, res) => {
    try{
      const customers = await Customer.find({active:true}, 'name email address accounts');
      res.json({status:200, data:customers})
    }catch(error){
      console.log("error", error);
    }
  }

const transactionOfAccount = async(req,res)=>{
    try{
      const transaction = await Transaction.find({
        account_id: Number(req.query.accountId)
      })
      res.json({status:200, data: transaction});
    }catch(error){
      console.log("error", error);
    }
  }

const transactionAmount = async (req,res) => {
    try{
      const pageSize = parseInt(req.query.pageSize) || 5; 
      const pageNumber = parseInt(req.query.pageNumber) || 1;
      const amount = parseInt(req.query.amount);
      const skipCount = (pageNumber - 1) * pageSize;
      const transactions = await Transaction.find({
        transactions: {
          $elemMatch: { amount: { $lt: Number(amount) } }
        }
      })
      .skip(skipCount)
      .limit(pageSize)
      .exec();
      res.json({status:200,data:transactions});
    }catch(error){
      console.log("error", error);
    }
  }

const transactionAmountCounts = async (req,res) => {
    try{
      const transactionCount = await Transaction.find({
        transactions: {
          $elemMatch: { amount: { $lt: Number(req.query.amount) } }
        }
      })
      res.json({status:200,data:transactionCount.length});
    }catch(error){
      console.log("erro",error);
    }
  }

const distinctProducts = async (req,res) => {
    try{
      const product = await Account.distinct("products");
      res.json({status:200,data:product});
    }catch(error){
      console.log("error", error);
    }
  };


module.exports = {activeCustomers, transactionOfAccount, transactionAmount, transactionAmountCounts, distinctProducts}