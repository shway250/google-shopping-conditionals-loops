var data = require('../products.json');

//////////////////////////NUMBER 1/////////////////////
// var shoppingCount = 0;

// for( var i = 0; i < data.items.length; i++){
// 	var item = data.items[i];
// 	if(item.kind === 'shopping#product'){
// 		shoppingCount++;
// 	}
// }
// console.log(shoppingCount);

//console.log(data.items);

//////////////////////////NUMBER 2//////////////////////////////

// for(var i = 0; i<data.items.length; i++){
// 	var item = data.items[i];
// 	if(item.product.inventories[0].availability === 'backorder'){
// 		console.log(item.product.title);
// 	}
// }


////////////////////////NUMBER 3///////////////////////
// for(var i = 0; i<data.items.length; i++){
// 	var item = data.items[i];
// 	if(item.product.images.length > 1){
// 		console.log(item.product.title);
// 	}
// }

////////////////////NUMBER 4 //////////////////////////

// for(var i = 0; i<data.items.length; i++){
// 	var item = data.items[i];
// 	if(item.product.brand === "Canon"){
// 		console.log(item.product.title);
// 	}
// }

////////////////////NUMBER 5//////////////////////////

// for(var i = 0; i<data.items.length; i++){
// 	var item = data.items[i];
// 	if(item.product.brand === "Canon" && item.product.author.name === "eBay"){
// 		console.log(item.product.title);
// 	}
// }


/////////////////////NUMBER 6//////////////////////
for(var i = 0; i<data.items.length; i++){
	var item = data.items[i];
	console.log(item.product.brand, item.product.inventories[0].price, item.product.images[0].link );
}