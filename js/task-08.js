const form = document.querySelector(".login-form");

const formSubmited = (event) => {
    event.preventDefault();
    
    if (form.elements[0].value === "" || form.elements[1].value === "") {
        alert("all fields must be filled");
    } else {
        const formValue = {};
        
        formValue[form.elements[0].getAttribute("name")] = form.elements[0].value;
        formValue[form.elements[1].getAttribute("name")] = form.elements[1].value;

        console.log(formValue);
    }
    event.currentTarget.reset();
};

form.addEventListener("submit", formSubmited);
