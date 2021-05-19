const fetchUrl = 'https://online-shoppp.herokuapp.com/api/categories'

async function getCategories() {
    try {
         const response = await fetch(base_url + '/categories')
         
    } catch (e) {
        alert ('Ошибка при запросе категории' + e.message)
    }
}

function makeCategory(category) {
   return `
   <div class="category">
   <img class="vector-1" src="../images/Vector (1).png" alt="" />
   <img class="vector-2" src="../images/Vector (2).png" alt="" />
   <h3 class="name-ctgr">${category.name}</h3>
 </div>
   `
}
