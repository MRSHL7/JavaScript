const order = [
    {
        "name":"pizza",
        "sales":70000
    },
    {
        "name":"burger",
        "sales":80000
    },
    {
        "name":"fries",
        "sales":50000
    }
]

const total = order.reduce(
    (t,a)=>{ return t+a.sales},0

)

console.log(total);