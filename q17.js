const amount =40000

const emp = [
    {
        "ename":"vinit",
        "salary":56000
    },
    {
        "ename":"alex",
        "salary":46000
    },
    {
        "name":"tom",
        "salary":34000
    }
]

const f = emp.filter(   
    s => s.salary>amount
)

console.log(f);