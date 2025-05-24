document.getElementById('vehicleForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const form = e.target;
    const data = {
        name: form.name.value.trim(),
        id_number: form.id_number.value.trim(),
        student_id: form.student_id.value.trim(),
        phone_number: form.phone_number.value.trim(),
        programme_code: form.programme_code.value.trim(),
        program: form.program.value.trim(),
        faculty: form.faculty.value.trim(),
        semester: form.semester.value,
        college_name: form.college_name.value.trim(),
        address: form.address.value.trim(),
        license_plate: form.license_plate.value.trim(),
        vehicle_type: form.vehicle_type.value,
        vehicle_color: form.vehicle_color.value.trim(),
        excuse: form.excuse.value.trim()
    };

    const errors = [];
    if (!/^\d{12}$/.test(data.id_number)) errors.push("No. K/P must be exactly 12 digits.");
    if (!/^\d+$/.test(data.phone_number)) {
        errors.push("Phone Number must contain only digits.");
    } else if (data.phone_number.length !== 10) {
        errors.push("Phone Number must be exactly 10 digits.");
    }
    if (!/^\d+$/.test(data.student_id)) {
        errors.push("Student ID must contain only digits.");
    } else if (data.student_id.length !== 10) {
        errors.push("Student ID must be exactly 10 digits.");
    }

    if (errors.length > 0) {
        alert("Validation Error:\n" + errors.join("\n"));
        return;
    }

    // Save to localStorage
    localStorage.setItem('vehicleFormData', JSON.stringify(data));
    // Redirect to receipt page
    window.location.href = "receipt.html";
    const termsCheckbox = document.getElementById('agreeTerms');
if (!termsCheckbox.checked) {
    alert("You must agree to the terms and conditions before submitting.");
    return;
}
});
