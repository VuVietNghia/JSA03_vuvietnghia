setInterval(() => {
    const currentDate = new Date();
    console.log(currentDate.toLocaleString())
    document.getElementById('time').innerHTML = currentDate.toLocaleString()
}, 1000)

function myButton(){
    const ten=document.getElementById('name').value;
    const age=document.getElementById('age').value;
    sessionStorage.setItem('name', ten)
    sessionStorage.setItem('age', age)
    confirm("Lưu thông tin thành công!, Quay về trang Home Page")
}

function chechInfo (){
    const name = sessionStorage.getItem('name')
    const age = sessionStorage.getItem('age')
if (age && name){
    alert('Name: '+ name + ' Age: ' + age)
}
else{
    alert('Không có thông tin')
}
}

function send(){
    sessionStorage.setItem('name', document.getElementById('name').value)
    sessionStorage.setItem('age', document.getElementById('age').value)
}

function delItem(){
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('age')
    alert('Xóa thông tin thành công')
}