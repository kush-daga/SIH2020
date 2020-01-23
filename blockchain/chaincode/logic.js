/** @format */

"use strict";

const { Contract } = require("fabric-contract-api");

// doc = {
//     ownerUser: ;
//     ipfsHash: ;
//     description: ;
//     authorizedAccs: [];
//     type: "";
//     dateCreated: "";
//     lasttransaction: {
//             doneBy: ""
//             transactionName:""
// };
// }

/* Functions:
        1. Register user
        2. Login(mayb)
        3. Add doc
        4. View Rec by id
        5. View all recs
        6. Update Rec transaction
        7. View last transaction
        8. Change Owner transaction
        9. 

*/

// class mainContract extends Contract {
//     async createDoc(ctx, ownerUser, ipfsHash, description, type, dateCreated) {
//         const doc = {
//             ownerUser,
//             ipfsHash,
//             description,
//             type,
//             dateCreated: new Date().format('m-d-Y h:i:s'),
//             lasttransaction: {
//                 doneBy: ownerUser,
//                 transactionName: "Created new document."
//             }
//         }

//         await ctx.stub.putState()
//     }
// }

("use strict");
const { Contract } = require("fabric-contract-api");
const sha512 = require("js-sha512");

class mainContract extends Contract {
	async init(ctx) {
		console.log("<==Instantiated fabric-drive Chaincode==>");
	}
	async getFiles(ctx, userId, key) {
		let userAsBytes = await ctx.stub.getState(userId);
		if (!userAsBytes || userAsBytes.toString().length <= 0) {
			return { Error: "Error: Incorrect UserId..!" };
		} else {
			let user = JSON.parse(userAsBytes);
			if (sha512(key) != user.AccessKey) {
				return { Error: "Error: Incorrect AccessKey..!" };
			} else {
				let files = JSON.parse(userAsBytes.toString());
				return JSON.stringify(files.Files);
			}
		}
	}
	async registerUser(ctx, name, userId, key) {
		let userAsBytes = await ctx.stub.getState(userId);
		if (!userAsBytes || userAsBytes.toString().length <= 0) {
			let userData = {
				Name: name,
				UserId: userId,
				AccessKey: sha512(key),
				Files: [],
			};

			await ctx.stub.putState(userId, Buffer.from(JSON.stringify(userData)));
			console.log('Account Registered Succesfully.."');
			return "Account registered succesfully. Start uploading your files into decentralized Storage, They live here forever.";
		} else {
			return "Error:Username is Taken.! Choose Another one.";
		}
	}

	async uploadFile(ctx, userId, key, name, hash) {
		let userAsBytes = await ctx.stub.getState(userId);
		if (!userAsBytes || userAsBytes.toString().length <= 0) {
			return "Error: Incorrect UserId..!";
		} else {
			let user = JSON.parse(userAsBytes);
			if (sha512(key) != user.AccessKey) {
				return "Error: Incorrect AccessKey..!";
			}
			let timeStamp = await ctx.stub.getTxTimestamp();
			const timestamp = new Date(timeStamp.getSeconds() * 1000).toISOString();

			let fileData = {
				Timestamp: timestamp,
				Name: name,
				FileHash: hash,
			};

			user.Files.push(fileData);

			await ctx.stub.putState(userId, Buffer.from(JSON.stringify(user)));
			console.log("File Uploaded Succesfully..");
			return "File Uploaded to Ledger Succesfully..";
		}
	}
}

module.exports = mainContract;
