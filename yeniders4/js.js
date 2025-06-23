function createStudent(ad, yas) {
  return {
    name: ad,
    age: yas
  };
}

// Nümunə:
const telebe = createStudent("Yusif", 20);
console.log(telebe); // { name: 'Yusif', age: 20 }