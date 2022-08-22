var student = {
    name: 'Vũ Việt Nghĩa',
    age: '17',
    address: 'TP Hạ Long',
  }
  function studentInfo ( name, age, address ){
    var result = name + " - " + age + " - " + address
    return result
  }
  console.log( studentInfo ( student.name, student.age, student.address) )