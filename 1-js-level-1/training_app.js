function doTeach(sub) {
    console.log(`${this.name} teaching ${sub}`)
    let notes = `${sub}-notes`
    let self = this;
    let learn = function() {
        console.log(`${this.name} leaning with ${notes} from ${self.name}`)
    }
    console.log("teaching ends")
    return learn;
}

function Employee(name) {
    this.name = name
}

function Trainer(name) {
    this.name = name
}
let e1 = new Employee('Elite')
let e2 = new Employee('Navya')
let tnr = new Trainer('Nag')
let newtnr = new Trainer("Abdhulah")
let learn = doTeach.call(tnr, 'javascript')
learn.call(e1)
learn.call(e2)
let learnFunc = doTeach.call(newtnr, 'java')
learnFunc.call(e1)
learnFunc.call(e2)