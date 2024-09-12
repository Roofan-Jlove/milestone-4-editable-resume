document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeform');
    var displayName = document.getElementById('display-name');
    var displayEmail = document.getElementById('display-email');
    var displayPhone = document.getElementById('display-phone');
    var displayProfilePicture = document.getElementById('display-profile-picture');
    var displayEducation = document.getElementById('display-education');
    var displayExperience = document.getElementById('display-experience');
    var displaySkills = document.getElementById('display-skills');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var profilePictureInput = document.getElementById('profile-picture');
        var degree = document.getElementById('degree').value;
        var institute = document.getElementById('institute').value;
        var eduStart = document.getElementById('start').value;
        var eduEnd = document.getElementById('end').value;
        var position = document.getElementById('position').value;
        var company = document.getElementById('company').value;
        var expStart = document.getElementById('start').value;
        var expEnd = document.getElementById('end').value;
        var description = document.getElementById('description').value;
        var skill = document.getElementById('skill').value;
        var skillLevel = document.getElementById('skill-level').value;
        displayName.textContent = name;
        displayEmail.textContent = email;
        displayPhone.textContent = phone;
        if (profilePictureInput.files && profilePictureInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                displayProfilePicture.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            };
            reader.readAsDataURL(profilePictureInput.files[0]);
        }
        displayEducation.textContent = "Studied ".concat(degree, " at ").concat(institute, " from ").concat(eduStart, " to ").concat(eduEnd);
        displayExperience.textContent = "Worked as ".concat(position, " at ").concat(company, " from ").concat(expStart, " to ").concat(expEnd, ". ").concat(description);
        displaySkills.innerHTML = '';
        var li = document.createElement('li');
        li.textContent = "".concat(skill, " (").concat(skillLevel, ")");
        displaySkills.appendChild(li);
    });
});
