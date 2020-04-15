let employees = {
    defArray: [
        {
            age: 18,
            name: "Phil Ochs",
            title: "Barista",
            salary: 20000
        },
        {
            age: 25,
            name: "Victor Jara",
            title: "Janitor",
            salary: 5000
        }, 
        {
            age: 23,
            name: "Caroline Calloway ",
            title: "Poet Laureate",
            salary: 49950
        }, 
        {
            age: 41,
            name: "Borat Sagdayev",
            title: "Diplomat",
            salary: 500
        }, 
        {
            age: 4005,
            name: "Gandalf",
            title: "Actuary",
            salary:40300
        }, 
        {
            age: 2,
            name: "Stuart Little",
            title: "Mouse",
            salary: 10.95
        },
        {
            age: 61,
            name: "Clippy",
            title: "COBOL Programmer",
            salary: 1500000
        }

        
    ], 

    meetsCriteria : [
        {
            age: 18,
            name: "Phil Ochs",
            title: "Barista",
            salary: 20000
        },
        {
            age: 25,
            name: "Victor Jara",
            title: "Janitor",
            salary: 5000
        }, 
        {
            age: 23,
            name: "Caroline Calloway ",
            title: "Poet Laureate",
            salary: 49950
        }, 
        {
            age: 41,
            name: "Borat Sagdayev",
            title: "Diplomat",
            salary: 500
        }, 
        {
            age: 4005,
            name: "Gandalf",
            title: "Actuary",
            salary:40300
        }, 
        {
            age: 2,
            name: "Stuart Little",
            title: "Mouse",
            salary: 10.95
        },
        {
            age: 61,
            name: "Clippy",
            title: "COBOL Programmer",
            salary: 1500000
        }

        
    ],

    sortByAge: function(){
        let critArray = [];
        this.meetsCriteria.empty()
        // populate array with unsorted values
        for (let i = 0; i< this.defArray.length; i++){
            critArray.push(this.defArray[i].age)
        }
        //sorts array in ascending order 
        critArray.sort()

        //uses the criteria array to sort objects
        for (let i = 0; i < critArray.length; i++){
            let next = this.defArray.find(item => item.age === critArray[i])
            this.meetsCriteria.push(next)
            
        }
        //returns sorted array
        return this.meetsCriteria
    },

    sortByAgeRev: function(){
        let critArray = [];
        this.meetsCriteria.empty()
        // populate array with unsorted values
        for (let i = 0; i< this.defArray.length; i++){
            critArray.push(this.defArray[i].age)
        }
        //sorts array in ascending order 
        critArray.sort((a,b) => b - a)

        //uses the criteria array to sort objects
        for (let i = 0; i < critArray.length; i++){
            let next = this.defArray.find(item => item.age === critArray[i])
            this.meetsCriteria.push(next)
            
        }
        //returns sorted array
        return this.meetsCriteria
    },

    sortByName: function(){
        let critArray = [];
        this.meetsCriteria.empty()
        // populate array with unsorted values
        for (let i = 0; i< this.defArray.length; i++){
            critArray.push(this.defArray[i].name)
        }
        //sorts array in ascending order 
        critArray.sort()

        //uses the criteria array to sort objects
        for (let i = 0; i < critArray.length; i++){
            let next = this.defArray.find(item => item.name === critArray[i])
            this.meetsCriteria.push(next)
            
        }
        //returns sorted array
        return this.meetsCriteria
    },

    sortByNameRev: function(){
        this.meetsCriteria.empty()
        let critArray = [];
        this.meetsCriteria.empty()
        // populate array with unsorted values
        for (let i = 0; i< this.defArray.length; i++){
            critArray.push(this.defArray[i].name)
        }
        //sorts array in ascending order 
        critArray.sort((a,b) => b - a)

        //uses the criteria array to sort objects
        for (let i = 0; i < critArray.length; i++){
            let next = this.defArray.find(item => item.name === critArray[i])
            this.meetsCriteria.push(next)
            
        }
        //returns sorted array
        return this.meetsCriteria
    },

    SalaryOver: function(val){
        this.meetsCriteria.empty()
        for (let i = 0; i < this.defArray.length; i++){
            this.defArray.find(item => item.salary > val)
        }
    },
    
    SalaryUnder: function(val){
        this.meetsCriteria.empty()
        for (let i = 0; i < this.defArray.length; i++){
            this.defArray.find(item => item.salary < val)
        }
    }
}

export default employees;