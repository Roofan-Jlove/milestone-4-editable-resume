document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeform') as HTMLFormElement;
    const displayName = document.getElementById('display-name') as HTMLElement;
    const displayEmail = document.getElementById('display-email') as HTMLElement;
    const displayPhone = document.getElementById('display-phone') as HTMLElement;
    const displayProfilePicture = document.getElementById('display-profile-picture') as HTMLImageElement;
    const displayEducation = document.getElementById('display-education') as HTMLElement;
    const displayExperience = document.getElementById('display-experience') as HTMLElement;
    const displaySkills = document.getElementById('display-skills') as HTMLElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const profilePictureInput = document.getElementById('profile-picture') as HTMLInputElement;
        const degree = (document.getElementById('degree') as HTMLInputElement).value;
        const institute = (document.getElementById('institute') as HTMLInputElement).value;
        const eduStart = (document.getElementById('start') as HTMLInputElement).value;
        const eduEnd = (document.getElementById('end') as HTMLInputElement).value;
        const position = (document.getElementById('position') as HTMLInputElement).value;
        const company = (document.getElementById('company') as HTMLInputElement).value;
        const expStart = (document.getElementById('start') as HTMLInputElement).value;
        const expEnd = (document.getElementById('end') as HTMLInputElement).value;
        const description = (document.getElementById('description') as HTMLTextAreaElement).value;
        const skill = (document.getElementById('skill') as HTMLInputElement).value;
        const skillLevel = (document.getElementById('skill-level') as HTMLSelectElement).value;

        displayName.textContent = name;
        displayEmail.textContent = email;
        displayPhone.textContent = phone;

        if (profilePictureInput.files && profilePictureInput.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                displayProfilePicture.src = e.target?.result as string;
            };
            reader.readAsDataURL(profilePictureInput.files[0]);
        }

        displayEducation.textContent = `Studied ${degree} at ${institute} from ${eduStart} to ${eduEnd}`;
        displayExperience.textContent = `Worked as ${position} at ${company} from ${expStart} to ${expEnd}. ${description}`;

        displaySkills.innerHTML = '';
        const li = document.createElement('li');
        li.textContent = `${skill} (${skillLevel})`;
        displaySkills.appendChild(li);
    });
});
