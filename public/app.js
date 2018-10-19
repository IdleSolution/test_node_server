const form = document.querySelector('.post-form');
form.addEventListener('submit', submit);
function submit(e){
    console.log(e.target);
    if(e.target.children[0].value === '' || e.target.children[1].value === ''){
        e.preventDefault();
        alert('all fields are required');
        console.log(e.target.children[0].value.length);
        console.log(e.target.children[1].value.length);
    }

    if(e.target.children[0].value.length > 100){
        e.preventDefault();
        alert('The maximum length of the post is 100');
    }

    if(e.target.children[1].value.length > 16){
        e.preventDefault();
        alert('The maximum length of the username is 16')
    }

    
}
