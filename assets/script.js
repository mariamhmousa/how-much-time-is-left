function updateTimer() {
    const workEnd = new Date();
    workEnd.setHours(17, 0, 0); // Set workday end time (e.g., 5:00 PM)

    const now = new Date();
    const remainingTime = workEnd - now;

    if (remainingTime > 0) {
        const hours = Math.floor(remainingTime / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        document.getElementById("timer").textContent = 
            `${hours}h ${minutes}m ${seconds}s remaining`;
    } else {
        document.getElementById("timer").textContent = "Workday is over!";
    }
}

setInterval(updateTimer, 1000); // Update every second
