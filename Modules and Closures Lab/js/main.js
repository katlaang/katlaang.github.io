var accountListInfo = [];

var newAccount = (function () {
 
 function Account(name, balance) {
  this.name = name;
  this.balance = balance;
 }
 
 return {
  create: function () {
   var name = document.getElementById("accountName").value;
   var deposit = document.getElementById("deposit").value;
   var account = new Account(name, deposit);
   accountListInfo[accountListInfo.length] = account;

   document.getElementById("textarea").value += "Account name: " + account.name + " Balance: " + account.balance + "\n";
   
   document.getElementById("accountName").value = "";
   document.getElementById("deposit").value = "";
   
  }
 }
})();
