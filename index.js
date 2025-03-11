const signInBtn = document.getElementById("nav-btn");
const emailEl = document.getElementById("email-el");
const toggleBtn = document.getElementById("toggle-btn");
const container = document.getElementById("container");

signInBtn.addEventListener("click", function() {
    let email = prompt("Enter your email!");
    emailEl.innerHTML = 
                        `
                            <a href='${email}' target='_blank'>
                                ${email}
                            </a>
                        `;
})  

toggleBtn.addEventListener("click", function() {
    
})

