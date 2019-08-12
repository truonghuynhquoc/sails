const Sequelize = require('Sequelize');
var hd1payment_db = new Sequelize('mysql://root:@localhost:3303/hd1payment_db');
var hd1cas_db = new Sequelize('mysql://root:@localhost:3303/hd1cas_db');
hd1cas = [];
module.exports = {
	UserMOMO: function (req, res){
		hd1cas_db.query("SELECT D.userId, FA.email, LA.mobile FROM User U LEFT JOIN Device D ON D.userId = U.id LEFT JOIN FacebookAccount FA ON FA.id = U.fbAccId LEFT JOIN LocalAccount LA ON LA.id = U.localAccId").then(([results, metadata]) => {
			// console.table(results);
			hd1payment_db.query("SELECT S.userId,C.sourceId, C.transId,C.amount FROM Source S LEFT JOIN Charge C ON C.sourceId = S.id LEFT JOIN Method M ON M.id = S.methodId WHERE M.type = 'MOMO'").then(([results1, metadata]) => {
				for (item of results) {
					for (item1 of results1)
					{
						if(item1.userId = item1.userId)
						{	
							console.log(item1.userId ,item.mobile, item.email, item1.sourceId, item1.transId, item1.amount);
						}
					}
				}
			})
		})
			.catch(err => {
				console.error('Unable to connect to the database:', err);
			});
    },
    UserVNPAY: function (req, res) {
		hd1cas_db.query("SELECT D.userId, FA.email, LA.mobile FROM User U LEFT JOIN Device D ON D.userId = U.id LEFT JOIN FacebookAccount FA ON FA.id = U.fbAccId LEFT JOIN LocalAccount LA ON LA.id = U.localAccId").then(([results, metadata]) => {
			// console.table(results);
			hd1payment_db.query("SELECT S.userId,C.sourceId, C.transId,C.amount FROM Source S LEFT JOIN Charge C ON C.sourceId = S.id LEFT JOIN Method M ON M.id = S.methodId WHERE M.type = 'VNPAY'").then(([results1, metadata]) => {
				for (item of results) {
					for (item1 of results1)
					{
						if(item1.userId = item1.userId)
						{	
							console.log(item1.userId ,item.mobile, item.email, item1.sourceId, item1.transId, item1.amount);
						}
					}
				}
			})
		})
			.catch(err => {
				console.error('Unable to connect to the database:', err);
			});
    },
    UserASIAPAY: function (req, res) {
		hd1cas_db.query("SELECT D.userId, FA.email, LA.mobile FROM User U LEFT JOIN Device D ON D.userId = U.id LEFT JOIN FacebookAccount FA ON FA.id = U.fbAccId LEFT JOIN LocalAccount LA ON LA.id = U.localAccId").then(([results, metadata]) => {
			// console.table(results);
			hd1payment_db.query("SELECT S.userId,C.sourceId, C.transId,C.amount FROM Source S LEFT JOIN Charge C ON C.sourceId = S.id LEFT JOIN Method M ON M.id = S.methodId WHERE M.type = 'ASIAPAY'").then(([results1, metadata]) => {
				for (item of results) {
					for (item1 of results1)
					{
						if(item1.userId = item1.userId)
						{	
							console.log(item1.userId ,item.mobile, item.email, item1.sourceId, item1.transId, item1.amount);
						}
					}
				}
			})
		})
			.catch(err => {
				console.error('Unable to connect to the database:', err);
			});
	}
} 