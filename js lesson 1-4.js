/**
 * Created by Aleksey on 23.03.2017.
 */

var password;
admin = prompt('vvedite login "Admin"');
if(admin === null) {
    alert('Logout');
} else {
    if(admin == 'Admin') {
        password = prompt('Enter Password "BlackLord"');
        if(password === null) {
            alert('Logout');
        } else {
            if(password == 'BlackLord') {
                alert('Welcome');
            } else {
                alert('Do not know you');
            }
        }
    } else {
        alert('I do not know you');
    }
}



var n = prompt('Enter the maximum number');
n = Number(n);
for (var i=2; i<=n; i++){
    for(var j=2; j<=i; j++){
        if (i%j == 0) break;
    }
    if(j==i)
        console.log(i);
}
