export function fetchAllProducts() {
  //TODO: we will not hard-code server URL here
  return new Promise(async (resolve) => {
    const response = await fetch(" http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter,sort,pagination) {
  //filter={"category":"smartphone"}
  //TODO:on server we will support ,multiple filters vales
  let queryString = "";
  for (let key in filter) {
    const categoryValues=filter[key];
    if(categoryValues.filter){
      const lastCategoryValues = categoryValues[categoryValues.length-1]
      queryString += `${key}=${lastCategoryValues}&`;
    }
  }
  for(let key in sort){
    queryString += `${key}=${sort[key]}&`;
  }
  for(let key in pagination){
    queryString += `${key}=${pagination[key]}&`;
  }
  //TODO: we will not hard-code server URL here
  return new Promise(async (resolve) => {
    // http://localhost:8080/products?category=laptops
    const response = await fetch(
      " http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    const totalItems=await response.headers.get('X-Total-Count')
    resolve({ data:{products:data,totalItems:+totalItems} });
  });
}
