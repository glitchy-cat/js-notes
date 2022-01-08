console.log("Lets do some practice!")

 const mark = {
        fullName: "Mark Miller",
        height: 1.69,
        mass: 78,
        calcBMI: function() {
            this.bmi = this.mass / this.height ** 2
            return this.bmi
        }
    }
console.log(mark.calcBMI);

 const john = {
        fullName: "John Smith",
        height: 1.95,
        mass: 92,
        calcBMI: function() {
            this.bmi = this.mass / this.height ** 2
            return this.bmi

        }
    }
    mark.calcBMI();
    john.calcBMI();

    console.log(mark.bmi, john.bmi);