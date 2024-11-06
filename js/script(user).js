document.getElementById("logoutBtn").onclick = function() {
    document.getElementById("logoutModal").style.display = "block";
}

document.getElementById("confirmLogout").onclick = function() {
    window.location.href = "/index.html"; // Redirect to index.html on logout
}

document.getElementById("cancelLogout").onclick = function() {
    document.getElementById("logoutModal").style.display = "none";
}

document.querySelector(".close").onclick = function() {
    document.getElementById("logoutModal").style.display = "none";
}
