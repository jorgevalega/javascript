const fun3 = []

for (let i = 0; i < 10; i++) {
    fun3.push(function() {
        console.log(i)
    })
}

fun3[0]()
fun3[8]()
fun3[9]()