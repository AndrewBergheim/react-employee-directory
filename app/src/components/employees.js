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
        let toReturn = []
        // populate array with unsorted values
        for (let i = 0; i< employees.defArray.length; i++){
            critArray.push(employees.defArray[i].age)
        }
        //sorts array in ascending order 
        critArray.sort((a,b) => a - b)

        //uses the criteria array to sort objects
        for (let i = 0; i < critArray.length; i++){
            let next = employees.defArray.find(item => item.age === critArray[i])
            toReturn.push(next)
            
        }
        //returns sorted array
        return toReturn
    },

    sortByAgeRev: function(){
        let critArray = [];
        let toReturn = []
        // populate array with unsorted values
        for (let i = 0; i< employees.defArray.length; i++){
            critArray.push(employees.defArray[i].age)
        }
        //sorts array in ascending order 
        critArray.sort((a,b) => b - a)

        //uses the criteria array to sort objects
        for (let i = 0; i < critArray.length; i++){
            let next = employees.defArray.find(item => item.age === critArray[i])
            toReturn.push(next)
            
        }
        //returns sorted array
        return toReturn
    },

    sortByName: function(){
        let critArray = [];
        let toReturn = []
        // populate array with unsorted values
        for (let i = 0; i< employees.defArray.length; i++){
            critArray.push(employees.defArray[i].name)
        }
        //sorts array in ascending order 
        critArray.sort()

        //uses the criteria array to sort objects
        for (let i = 0; i < critArray.length; i++){
            let next = employees.defArray.find(item => item.name === critArray[i])
            toReturn.push(next)
            
        }
        //returns sorted array
        return toReturn
    },

    sortByNameRev: function(){
        let critArray = [];
        let toReturn = []
        // populate array with unsorted values
        for (let i = 0; i< employees.defArray.length; i++){
            critArray.push(employees.defArray[i].name)
        }
        //sorts array in ascending order 
        critArray.sort()

        //uses the criteria array to sort objects
        for (let i = critArray.length-1; i > -1; i--){
            let next = employees.defArray.find(item => item.name === critArray[i])
            toReturn.push(next)
            
        }
        //returns sorted array
        return toReturn
    },

    SalaryOver: function(val){
        let toReturn = []
        for (let i = 0; i < employees.defArray.length; i++){
            if (employees.defArray[i].salary > val){toReturn.push(employees.defArray[i])}
        }
        return toReturn
    },
    
    SalaryUnder: function(val){
        let toReturn = []
        for (let i = 0; i < employees.defArray.length; i++){
            if (employees.defArray[i].salary < val){toReturn.push(employees.defArray[i])}
        }
        return toReturn
    }
}

export default employees;