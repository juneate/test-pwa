// 1. Determine what goes into a task (data wise)
// 2. Structure the data into objects/arrays
// 3. Iterate through the array using a loop
// 4. Populate interface with sample data
// 5. Taking new tasks from a user, updating our structure
// 6. Creating the user interactions

/*
- name of the task
- date created
- date due
- category (home, work, school, cat, ...)
- status (boolean? or keep track of state of the task)
- priority (1-5)
- creator


creator: {
  name: "George Brown",
  id: 4321
},
collabs: [ 123, 4567, 7567, 8767 ]
*/



// Object: A collection of values that are alike
var task = {
  id: 123,
  name: "Feed the Dog",
  created: "Wed, 26 Sep 2018 14:47:05 GMT",
  duedate: "Wed, 27 Sep 2018 09:00:00 GMT",
  category: {
    label: "Home",
    id: 1
  },
  priority: 5
}

console.log(task);

var allTasks = [
  {
    id: 123,
    name: "Feed the Dog",
    created: "Wed, 26 Sep 2018 14:47:05 GMT",
    duedate: "Wed, 27 Sep 2018 09:00:00 GMT",
    category: {
      label: "Home",
      id: 1
    },
    priority: 5
  }, {
    id: 345,
    name: "Finish Todo list",
    created: "Wed, 26 Sep 2018 14:47:05 GMT",
    duedate: "Tue, 01 Jan 2019 08:00:00 GMT",
    category: {
      label: "School",
      id: 2
    },
    priority: 2
  }, {
    id: 678,
    name: "Pickup the drycleaning",
    created: "Wed, 26 Sep 2018 14:47:05 GMT",
    duedate: "Fri, 01 Oct 2018 18:00:00 GMT",
    category: {
      label: "Home",
      id: 1
    },
    priority: 1
  }

];



// var category = {
//   name: "Home",
//   num: 1
// }



/* For dates:
MMMM Do YYYY, h:mm:ss a
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
https://momentjs.com/
*/













//
