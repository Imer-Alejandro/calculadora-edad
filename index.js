
let dateString = document.querySelector('input')

let element_year= document.querySelector('.year')
let element_months =document.querySelector('.months')
let element_days =document.querySelector('.days')

document.querySelector('button').addEventListener('click',()=>{
    
        // get year
        let hoy = new Date()
        let fechaNacimiento = new Date(dateString.value)
        let year = hoy.getFullYear() - fechaNacimiento.getFullYear()
        let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
        if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            year--
        }

        //get months
        let months = hoy.getMonth()

        //get day
        let days= hoy.getDate()

        
          if (dateString.value != '') {
            element_year.textContent=year
            element_months.textContent=months
            element_days.textContent=days
          }else{
            alert("Por favor ingrese una fecha")
          }

})

