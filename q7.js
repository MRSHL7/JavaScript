const students = [
    {
        "name": "Sahil",
        "mark": 90
    },
    {
        "name": "Biran",
        "mark": 70
    },
    {
        "name": "Dom",
        "mark": 40
    }
]


const f = students.filter(
    (marks)=>{
        return marks.mark>80
    }
)

console.log(f);