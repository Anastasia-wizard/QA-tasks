// Task 3**
// В файле task3.txt найдете структуру компании и задания, необходимые выполнить.

// Примечание: ВСЕ задания выполнять не обязательно, если вам люто сложно. 
// Но ПЕРВОЕ - прям надо всем:)
const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников.
//    Для предприятия посчитать сумму всех сотрудников во всех отделах.


enterprises.forEach(item=>{
  console.log(item.name)


enterprises.forEach(item=>{
  item.departments.forEach(depart=>{console.log(depart.name + " " + depart.employees_count)
  })
})

})
