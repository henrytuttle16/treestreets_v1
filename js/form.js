/**
 * Contact Form Handling & Validation
 */

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    // Form fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const projectTypeInput = document.getElementById('projectType');
    const descriptionInput = document.getElementById('description');

    // Error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const projectTypeError = document.getElementById('projectTypeError');
    const descriptionError = document.getElementById('descriptionError');

    // Validation functions
    function validateName() {
        const value = nameInput.value.trim();
        if (value === '') {
            showError(nameInput, nameError, 'Please enter your name');
            return false;
        }
        if (value.length < 2) {
            showError(nameInput, nameError, 'Name must be at least 2 characters');
            return false;
        }
        clearError(nameInput, nameError);
        return true;
    }

    function validateEmail() {
        const value = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (value === '') {
            showError(emailInput, emailError, 'Please enter your email address');
            return false;
        }
        if (!emailRegex.test(value)) {
            showError(emailInput, emailError, 'Please enter a valid email address');
            return false;
        }
        clearError(emailInput, emailError);
        return true;
    }

    function validateProjectType() {
        const value = projectTypeInput.value;
        if (value === '') {
            showError(projectTypeInput, projectTypeError, 'Please select a project type');
            return false;
        }
        clearError(projectTypeInput, projectTypeError);
        return true;
    }

    function validateDescription() {
        const value = descriptionInput.value.trim();
        if (value === '') {
            showError(descriptionInput, descriptionError, 'Please describe your project');
            return false;
        }
        if (value.length < 10) {
            showError(descriptionInput, descriptionError, 'Please provide more details (at least 10 characters)');
            return false;
        }
        clearError(descriptionInput, descriptionError);
        return true;
    }

    function showError(input, errorElement, message) {
        input.classList.add('error');
        errorElement.textContent = message;
    }

    function clearError(input, errorElement) {
        input.classList.remove('error');
        errorElement.textContent = '';
    }

    // Real-time validation on blur
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    projectTypeInput.addEventListener('blur', validateProjectType);
    descriptionInput.addEventListener('blur', validateDescription);

    // Clear error on input
    nameInput.addEventListener('input', function() {
        if (nameInput.value.trim() !== '') {
            clearError(nameInput, nameError);
        }
    });

    emailInput.addEventListener('input', function() {
        if (emailInput.value.trim() !== '') {
            clearError(emailInput, emailError);
        }
    });

    projectTypeInput.addEventListener('change', function() {
        if (projectTypeInput.value !== '') {
            clearError(projectTypeInput, projectTypeError);
        }
    });

    descriptionInput.addEventListener('input', function() {
        if (descriptionInput.value.trim() !== '') {
            clearError(descriptionInput, descriptionError);
        }
    });

    // Form submission
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Hide any previous messages
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';

        // Validate all required fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isProjectTypeValid = validateProjectType();
        const isDescriptionValid = validateDescription();

        if (!isNameValid || !isEmailValid || !isProjectTypeValid || !isDescriptionValid) {
            // Scroll to first error
            const firstError = form.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        // Show loading state
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline';

        try {
            // Submit form using Fetch API
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success
                successMessage.style.display = 'block';
                form.reset();

                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // Reset button state after a delay
                setTimeout(function() {
                    submitBtn.disabled = false;
                    btnText.style.display = 'inline';
                    btnLoading.style.display = 'none';
                }, 2000);
            } else {
                // Error from server
                throw new Error('Server error');
            }
        } catch (error) {
            // Show error message
            errorMessage.style.display = 'block';
            errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Reset button state
            submitBtn.disabled = false;
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';

            console.error('Form submission error:', error);
        }
    });

    // Phone number formatting (optional enhancement)
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');

            if (value.length > 10) {
                value = value.slice(0, 10);
            }

            if (value.length >= 6) {
                value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
            } else if (value.length >= 3) {
                value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
            }

            e.target.value = value;
        });
    }
});
