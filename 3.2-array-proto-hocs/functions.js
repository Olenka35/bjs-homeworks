'use strict'
	console.clear();
	//----------- 1 task -----------
	
	const weapons = [
	  new Knife(), 
	  new Staff(), 
	  new Axe(), 
	  new StormStaff(), 
	  new LongBow(), 
	  new Bow()
	];
	
	function getNames(){
	  return weapons.map(elem => elem.name);
	}
	
	function getCountReliableWeapons(element) {
	  return weapons.filter(elem => element < elem.durability).length;
	}
	
	function hasReliableWeapons(element){
	  return weapons.some(elem => element < elem.durability);
	}
	
	function getReliableWeaponsNames(element){
	  return weapons
	    .filter(elem => element < elem.durability)
	    .map(elem => elem.name);
	}
	
	function getTotalDamage(){
	  return weapons.reduce((sum, current) => sum + current.attack, 0);
	}
		
	function getValuestCountToSumValues(arr, number){
	  let sumNumbers = {sum: 0, len: 0};
		
	  arr.reduce(function(elem, current){
	    if(sumNumbers.sum < number){
	      sumNumbers.len++
	      return sumNumbers.sum = elem + current
	    }
	  }, 0);
		
	  return sumNumbers.len;
	}
	
	//----------- 2 task -----------
	
	function sleep(milliseconds){
	  let e = new Date().getTime() + milliseconds;
	  while (new Date().getTime() <= e) {}
	}
	
	function sum(...args) {
	  // Замедление на половину секунды.
	  sleep(100); // Можно использовать другое значение замедления.
	  return args.reduce((sum, arg) => {
	    return sum += arg;
	  }, 0);
	}
	
	function compareArrays(arr1, arr2){
	  return arr1.length === arr2.length && arr1.every((elem, index) => elem === arr2[index]);
	}
	 
	function memorize(fn, limit){
	  const memory = [];
	
	  return function(...args) {
	    let results = memory.find(elem => compareArrays(elem.args, args));
			
	    if(results){
	      return results.result;
	    }
		  
	    let sum = fn(...args);
	    memory.push({args: args, result: sum});
			
	    if(memory.length > limit) { 
	      memory.shift(); 
	    }
				
	    return sum;
	  }
	}
	
	const mSum = memorize(sum, 5);
	
	//----------- 3 task -----------
	
	function testCase(testFunction, arr, nameTaimer){
	  console.time(nameTaimer);
		
	  for (let i = 0; i < 100; i++) {
	    arr.forEach(element => testFunction(element));
	  };
		
	  console.timeEnd(nameTaimer);
	}
	
	testCase(sum, arr, "Время выполнения sum");
	testCase(mSum, arr, "Время выполнения mSum");


