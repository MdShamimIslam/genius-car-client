export const authToken = (user)=>{
    const currentUser ={
        email : user.email
    }
    console.log(currentUser);

    fetch('https://genius-car-server-sooty-five.vercel.app/jwt',{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem('genius-token', data.token);
    })
}