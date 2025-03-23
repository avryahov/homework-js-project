const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
];

const usersOnlineNames = users.filter(user => user.status === "online")
    .map(user => user.username)
    .join(", ");

if (usersOnlineNames.length > 0) {
    alert("Сейчас в онлайн следующие пользователи: " + usersOnlineNames);
} else {
    alert("Сейчас нет пользователей онлайн");
}