const API_ORDER = 'http://localhost:11000/api/orders';
const API_PAGE_VIEW = 'http://localhost:11000/api/page-view';

export function fetchOrders() {
    let url = API_ORDER;
    return fetch(url)
      .then( (response) => response.json() );
}

export function postPageView(path) {
  try{
    let url = API_PAGE_VIEW;
    fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({path: path})
  }).then(res => res)
  }
  catch(err){
  console.log("error at post",err)
  }

}