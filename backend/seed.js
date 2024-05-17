const mongoose = require('mongoose');
const User = require('./models/user.model');
const Task = require('./models/task.model');

    mongoose.connect('mongodb://localhost:27017/todo_app')

const db = mongoose.connection;


db.on('error',console.error.bind(console,'connection error'));
    
    db.once('open', async function(){
        console.log('Connected to database');
    
           // Seed users
           const users = [
            { name: 'Alice', email: 'alice@example.com' },
            { name: 'Bob', email: 'bob@example.com' },
            { name: 'Charlie', email: 'charlie@example.com' }
        ];
    
        const userDocs = await User.insertMany(users);
        const userIds = userDocs.map(user=>user._id);
    
         // Seed tasks
         const tasks = [
            {
                title: 'Task 1',
                description: 'Description for Task 1',
                progress: 'Not started',
                start_date: new Date(),
                end_date: new Date(Date.now() + 7*24*60*60*1000), // One week from now
                user_id: userIds[0]
            },
            {
                title: 'Task 2',
                description: 'Description for Task 2',
                progress: 'In progress',
                start_date: new Date(),
                end_date: new Date(Date.now() + 14*24*60*60*1000), // Two weeks from now
                user_id: userIds[1]
            },
            {
                title: 'Task 3',
                description: 'Description for Task 3',
                progress: 'Completed',
                start_date: new Date(),
                end_date: new Date(Date.now() + 21*24*60*60*1000), // Three weeks from now
                user_id: userIds[2]
            }
        ];
    
    
        await Task.insertMany(tasks);
    
        console.log('Database seeded');
    
        mongoose.connection.close()
    }
)