'use strict'
	
	console.log("\n----------- 1 task -----------\n");
							
	class PrintEditionItem {
	  constructor(name, releaseDate, pagesCount){
	    this.name = name;
	    this.releaseDate = releaseDate;
	    this.pagesCount = pagesCount;
	    this.state = 100;
	    this.type = null;			
	  }
		
	  fix() {
	    let nextState = this.state * 1.5;
	    this.state = nextState;
	  }
		
	  set state(value){
	    if (value < 0) {
	      this._state = 0;
	    } else if (value > 100) {
	      this._state = 100;
	    } else {
	      this._state = value;
	    }
	   }
		
	  get state() {
	    return this._state;
	  }
	}
	
	class Magazine extends PrintEditionItem {
	  constructor(name, releaseDate, pagesCount){
	    super(name, releaseDate, pagesCount);
	  }
	  type = "magazine";
	}
	
	class Book extends PrintEditionItem {
	  constructor(author, name, releaseDate, pagesCount){
	    super(name, releaseDate, pagesCount);
		this.author = author;
	  }
	  type = "book";
	}
	
	class NovelBook extends Book {
	  constructor(author, name, releaseDate, pagesCount){
	    super(author, name, releaseDate, pagesCount);
	  }
	  type = "novel";
	}
	
	class FantasticBook extends Book {
	  constructor(author, name, releaseDate, pagesCount){
	    super(author, name, releaseDate, pagesCount);
	  }
	  type = "fantastic";
	}
	
	class DetectiveBook extends Book {
	  constructor(author, name, releaseDate, pagesCount){
	    super(author, name, releaseDate, pagesCount);
	  }
	  type = "detective";
	}
	
	console.log("\n----------- 2 task -----------\n");
	
	class Library {
	  constructor(name){
	    this.name = name;
	    this.books = [];
	  }
		
	  addBook(book) {
	    let state = book.state;
	    if (state > 30) {
	      this.books.push(book);
	    }
	  }
		
	  set books(value){
	    this._books = value;
	  }
		
	  get books() {
	    return this._books;
	  }
		
	  findBookBy(type, value) {	  
             for (let i = 0; i < this.books.length; i++) {
	      for (type in this.books[i]) {
	        let bookCase = this.books[i];
	        let valueBook = bookCase[type];
	
	        if (valueBook == value) { 
	        return bookCase;
	      }
	     }
	    }
	    return null;
	  }
		
	  giveBookByName(bookName) {
	    let giveBook;
			
	    for (let i = 0; i < this.books.length; i++) {
	      for (name in this.books[i]){
	        let bookCase = this.books[i];
	        let valueBook = bookCase[name];
	
	        if (valueBook == bookName) {
	          giveBook = bookCase;
	          this.books.splice(i, 1);
	          return giveBook;
	        }
	      }
	    }	
	    return null;
	  }	
	}
	
	console.log("\n----------- 3 task -----------\n\n");
	
	class StudentLog {
	  constructor(name){
	    this.name = name;
	    this.subjects = {};
	  }
		
	  getName() {
	    return this.name;
	  }
		
	  addGrade(grade, subject) {
	    if (grade <= 0 || grade > 5 || typeof grade != "number")  {
	      console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
	      return 0;
	    } 
			
	    if(!this.subjects[subject]) {
	      this.subjects[subject] = [];
	    }
			
	    this.subjects[subject].push(grade);
	    return this.subjects[subject].length;
	  }
	
	  getAverageBySubject(subject){
	    if(!this.subjects[subject]) {
	      return 0;
	  }
			
	    let len = this.subjects[subject].length;
	    let sum = 0;
	    for (let i = 0; i < len; i++) {
	      sum += this.subjects[subject][i];
	    }
	    return sum / len;
	  }
		
	  getTotalAverage() {
	    let count = 0;
	    let averageSum = 0;
	    for(let key in this.subjects) {
	      averageSum += this.getAverageBySubject(key);
	      count++;
	    }
	    return averageSum/count;
	  }


