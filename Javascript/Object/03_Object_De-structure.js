// Object De-structuring

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "Trupti",
};

// course.courseInstructor;

// for clean code use this syntax
const { courseInstructor } = course;

//we can give naming also
const { courseInstructor: instructor } = course;

console.log(courseInstructor);
console.log(instructor);
