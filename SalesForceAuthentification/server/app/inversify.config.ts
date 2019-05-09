import { Container } from "inversify";
import { Application } from "./app";
import { DatabaseController } from './controllers/database.controller';
import { Server } from "./server";
import { DatabaseService } from "./services/database.service";
import Types from "./types";
import { TokenController } from "./controllers/token.controller";
import { TokenService } from "./services/token.service";

const container: Container = new Container();

container.bind(Types.Server).to(Server);
container.bind(Types.Application).to(Application);

container.bind(Types.DatabaseService).to(DatabaseService);
container.bind(Types.DatabaseController).to(DatabaseController);

container.bind(Types.TokenController).to(TokenController);
container.bind(Types.TokenService).to(TokenService);


export { container };
