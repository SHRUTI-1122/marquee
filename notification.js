



const notifyBtn = document.getElementById("notifyBtn");
const notifyPanel = document.getElementById("notifyPanel");
const notifyBadge = document.getElementById("notifyBadge");
const notifications = [
    "Login successful",
    "You have 3 new emails",
    "Meeting starts in 10 minutes",
    "New message "
];

notifyBtn.addEventListener("click", () => {
    notifyPanel.classList.toggle("open");

    if (!notifyPanel.classList.contains("open")) {
        return;
    }

    notifyPanel.innerHTML = "<div class='notification-item'>Loading notifications...</div>";

    setTimeout(() => {
        notifyPanel.innerHTML = "";
        notifyBadge.textContent = notifications.length;

        notifications.forEach((item, index) => {
            setTimeout(() => {
                const div = document.createElement("div");
                div.className = "notification-item";
                div.textContent = item;
                notifyPanel.appendChild(div);
            }, index * 250);
        });
    }, 700);
});
