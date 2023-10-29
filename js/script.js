document.addEventListener("DOMContentLoaded", function() {

    let form = document.getElementById("main-form");
    let outputDiv = document.getElementById("output");
    let sendButton = document.getElementById("send-button");
    let cancelButton = document.getElementById("cancel-button");
    let calculateButton = document.getElementById("calculate-button");
    let lightThemeButton = document.getElementById('lightTheme');
    let darkThemeButton = document.getElementById('darkTheme');


    if (sendButton || cancelButton){
        sendButton.addEventListener("click", userForm);
        cancelButton.addEventListener("click",deleteForm);

    }if (calculateButton){
        calculateButton.addEventListener("click",myExcelFuns);

    }if ( lightThemeButton){
        lightThemeButton.addEventListener("click",function(event) {
            event.preventDefault();
            chooseTheme("light");
        });

    }if(darkThemeButton){
        darkThemeButton.addEventListener("click",function(event) {
            event.preventDefault();
            chooseTheme("dark");
        });
    }
    

    function userForm(event){
        event.preventDefault();
        let first_name = document.getElementById("First_name").value;
        let last_name = document.getElementById("Last_name").value;
        let email = document.getElementById("Email").value;
        let address = document.getElementById("Address").value;
        let city = document.getElementById("City").value;
        let province = document.getElementById("Province").value;
        let membership = document.querySelector('input[name="Membership"]:checked').value;

        outputDiv.innerHTML = "Full Name: " + first_name +" "+ last_name + "<br>Email: " + email + "<br>Address: " + address  
        + "<br><span>" + city + "," + province + "<br>Membership: " + membership;
    }
    function deleteForm(){
        form.reset();
    }

    function myExcelFuns(event){
        event.preventDefault();
        let numbersStr = document.getElementById('Enter').value.trim();
        let res = 0;
        if (numbersStr === "" || /[a-zA-Z]/.test(numbersStr)) {
            alert("Please enter some valid values before calculating !");
            }else {
                let numberArr = numbersStr.split(" ");
                let finalNumericArray = [];
                for(let i in numberArr){
                    let intNumber = parseInt(numberArr[i]);
                    if(!Number.isNaN(intNumber)){
                        finalNumericArray.push(intNumber);
                    }
                }
               if(document.getElementById("Sum").checked){
                for(let i in finalNumericArray){
                    res += finalNumericArray[i];
                }
                outputDiv.innerHTML = "Result of the sum :<br>"+ res;

               }else if(document.getElementById("Ave").checked){
                for(let i in finalNumericArray){
                    res+= finalNumericArray[i];
                }
                res = res/finalNumericArray.length;
                outputDiv.innerHTML = "Result of the average :<br>"+ res.toFixed(2);

               }else if(document.getElementById("Max").checked){
                let res = Math.max(...finalNumericArray);
                outputDiv.innerHTML = "Result of the max :<br>"+ res;

            
               }else if(document.getElementById("Min").checked){
                let res = Math.min(...finalNumericArray);
                outputDiv.innerHTML = "Result of the min :<br>"+ res;

               }
                
            }
            
    }

    function chooseTheme(theme) {
        event.preventDefault();
        let body = document.body;
    
        if (theme === 'light') {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
        } else if (theme === 'dark') {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
        }
    }

});

