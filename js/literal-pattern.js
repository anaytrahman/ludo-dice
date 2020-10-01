console.log('Working');

// LITERAL PATTERN

//var StudentAttendanceSystem;
var app = {
    schoolName: "Indian Institute",
    studentList: [
        {
            name: "Anayt",
            grade: 'b'
        },
        {
            name: "roy",
            grade: 'b'
        }, {
            name: "wilson",
            grade: 'b'
        },
        {
            name: "via",
            grade: 'b'
        }, {
            name: "ayat",
            grade: 'b'
        }
    ],


    showSelectedStudent: function(index){
        console.log(this.studentList[index].name);
    },

    showStudents: function() {
        for(var i =0; i<this.studentList.length; i++) {
            console.log(this.studentList[i].name);
        }
    }
};


app.addStudent = function(student) {
    console.log('this student '+student.name+' has been added!!!');
    this.studentList.push(student);
    this.showStudents();
};

console.log('schoolName name is = ', app.schoolName);

app.schoolName = "Another scool";
console.log('schoolName name is = ', app.schoolName);

app.showSelectedStudent(2);

//app.showStudents();

app.addStudent({name: "rahman", grade: "M"});
app.addStudent({name: "aakash", grade: "M"});

//todo create application for cricket ground
