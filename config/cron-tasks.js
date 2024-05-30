module.exports = {
    myJob: {
        task: async ({strapi}) => {
            const events = await fetch('https://events-site-backend.onrender.com/api/all-events')
            const res = await events.json();
            console.log(res);
            return events;
        },
        options: {
            rule: "13 * * * *",
        }
    }
}