import 'dotenv/config';
import express from 'express';
import UserControllers from './app/controllers/UserControllers';
import BullBoard from 'bull-board';
import Queue from './app/lib/Queue';

const app = express();
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());
app.post('/users', UserControllers.store);

app.use('/admin/queues', BullBoard.UI);

app.listen(3333, () => {
  console.log('Server running on localhost:3333');
});
