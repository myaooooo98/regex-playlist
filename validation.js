// validation script here
const inputs = document.querySelectorAll('input');

const patterns = {
    telephone: /^\d{11}$/,    //also can use [0-9]
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/      // yourName@domain.extension(.optionalExtension)
    // yourName = any letters, numbers, dots, hyphens
    // domain = any letters, numbers, hyphens
    // extension = any letters
    // optionalExtension = dot then any letters (cause some email don't have this)
};

// validation function
function validate(field, regex) {
    if (regex.test(field.value)){
        field.className = 'valid';      // add a new class to the input
    } else {
        field.className = 'invalid';
    }
};

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        // e.target = input, e.target.attributes.name.value = input's name
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});