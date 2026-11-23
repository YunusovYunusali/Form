let btnEl=document.querySelector('.eye1');
let inputEl=document.querySelector('#parol');
let formEl=document.querySelector('form');
let bntEl1=document.querySelector('.form-btn');

btnEl.addEventListener('click', () => {
    if (inputEl.getAttribute('type') === 'password') {
        inputEl.setAttribute('type', 'text')
    } else {
        inputEl.setAttribute('type', 'password')
    }
})


inputEl.addEventListener('input' , (event)=>{
    // console.log(event.target.value);
    
})


formEl.addEventListener('submit', (e)=>{
e.preventDefault();

let formData=new FormData(e.target);
let formDb={
    login:formData.get('login'),
    parol:formData.get('parol'),
};
console.log(formDb);
formEl.reset();
});















// btnEl1.addEventListener('click',()=>{
//     joriyindex =(joriyindex+1)%rasm.length;
//     yangirasm();
// });