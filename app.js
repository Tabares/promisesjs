function asyncMethod(message){
	return new Promise(function (fullfill, reject) {
		setTimeout(function(){
			console.log(message);
			fullfill();
		}, 500);
	});
	

}

function findUser(){
	return asyncMethod('find user');
}

function validateUser(){
    return asyncMethod('validte user');
}

function doStuff(){
	return asyncMethod('do stuff');

}

asyncMethod('open db connection')
	.then(findUser)//error
	.then(validateUser)
	.then(doStuff)
	.then(function(){});


	/*
	function asyncMethod(message){
	return new Promise(function (fullfill, reject) {
		setTimeout(function(){
			console.log(message);
			fullfill();
		}, 500);
	});
	

}

asyncMethod('open db connection').then( function(){
	asyncMethod('find user').then( function(){
		asyncMethod('validte user').then( function(){
			asyncMethod('do stuff').then( function(){

			})
		});

	});

});
	*/

/*

function asyncMethod(message, cb){
	setTimeout(function(){
		console.log(message);
		cb();
	}, 500);

}

asyncMethod('open db connection', function(){
	asyncMethod('find user', function(){
		asyncMethod('validte user', function(){
			asyncMethod('do stuff', function(){

			})
		});

	});

});


*/