

// $(()=>{
//     const idPost = location.search.slice(1)
//     console.log(idPost)
//     fetch(`http://localhost:8080/posts/${idPost}`, {
//   method: 'GET',
// })

// .then(response => response.json())

//   .then(response => {

//         let temp1 = ''
//         let imgPerfil = response.imgPerfil                
//         temp1 += `
//         <div>
//         <img src="${imgPerfil}" class="rounded-circle me-3" alt="..."><span class="authorPost me-3"></span><span class="datePost me-3"></span><span class="timePost"></span>
//         </div>
//         `
//         let temp = ''
//         let formFile = response.formFile                
//         temp += `
//         <div>
//         <img src="${formFile}" class="card-image rounded mx-auto d-block" alt="..." width="100%" height="270rem">
//         </div>
//         `
//         $('#avatarPost').html(temp1)
//         $('#imagePost').html(temp)
//         $('.titlePost').text(response.title)
//         $('.authorPost').text(response.author)
//         $('.timePost').text(response.readingTime + " min. read")
//         $('.datePost').text(response.dateCreated)
//         $('.textPost').text(response.postContent)
    
//   })

//   .catch(error => {
//     console.error('GET POSTS ERROR: ', error)
//   })

    

// })

let idpost = location.search.slice(8)


const getposts = (callback) => {
    fetch(
        `https://localhost:8080/posts/${idpost}`
    )
      .then((obj) => {
        return obj.json();
      })
      .then((resp) => {
        callBack(resp.posts)
      });
  };
  
  const callBack = (posts) => {
 
    let idpost = location.search.slice(8)
      let template = `
      
      <div class="container ">
            <form class="row position-relative">
                      <span class="text-primary fw-light ms-1">${resp.author}</span>
                      <span class="fw-light ms-3">${posts.fechaCreacion} ·</span>
                      <span class="fw-light">${posts.tiempoLectura}</span>
                  </p>
                </div>
                <div class="col-md-3"></div>
                
                <div class="col-md-12">
                    <img class="mt-2 mb-2 col-md-6 img-responsive rounded mx-auto d-block"
                    src="${posts.imagenPost}"
                    height= "400px" 
                    width= 100%
                    alt=""
                    />
                </div>

                <div class="col-md-3"></div>
                <div class="col-md-6"><h5 class='mt-5 fw-lighter fst-italic'>${posts.abstract}</h5></div>
                <div class="col-md-3"></div> 
                <div class="col-md-3"></div>
                <div class="col-md-6 mt-5 mb-5"><p>${posts.contenidoPost}</p></div>
                <div class="col-md-3"></div>
            </form>
      </div> 
      ` 
    document.querySelector('.posts').innerHTML = template
          
  }

  getposts(callBack)