const accountId = 144532 
let accountEmail = "shrikantgaikwad0715@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

//accountId = 2 //not allowed
 

accountEmail = "hc@hc.com"
accountpassword = "212121233"
accountCity = "hadpsar"

console.log(accountId);
/* 
prefer not use to var
bacause of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountpassword, accountCity, accountState])