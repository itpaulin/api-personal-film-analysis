import express, { Request, Response } from 'express';
import movieRouters from '@/routes/movie';
export const app = express();

const port = Bun.env.PORT;
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send(
    'Bem Vindo a API de análises de filme! Todo desenvolvimento do projeto foi feito por Paulo Ricardo, GitHub: @itpaulin'
  );
});

app.use('/movie', movieRouters);

app.listen(port, () => console.log(`Listening on port ${port}...`));
