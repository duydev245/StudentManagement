// Object Student
function Student(id, name, email, password, math, physics, chemis) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.password = password;
  this.math = math;
  this.physics = physics;
  this.chemis = chemis;
  this.avg = function () {
    return (this.math + this.physics + this.chemis) / 3;
  };
}
