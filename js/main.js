document.getElementById('membership-btn').addEventListener('click', function() {
    document.getElementById('membership-dashboard').classList.remove('hidden');
    document.getElementById('user-management-dashboard').classList.add('hidden');
});

document.getElementById('user-management-btn').addEventListener('click', function() {
    document.getElementById('user-management-dashboard').classList.remove('hidden');
    document.getElementById('membership-dashboard').classList.add('hidden');
});
